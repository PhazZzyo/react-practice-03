import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReducer from '../redux/contacts/contactsReducers'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";  

  const contactsPersistConfig = {key: "contacts", storage, blacklist:['filter']}
  const middleWare = [...getDefaultMiddleware({serializableCheck: {
    ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}),logger]

const store = configureStore({reducer:{contacts:persistReducer(contactsPersistConfig, contactsReducer)},middleware,devTools: process.env.NODE_ENV === "development"
})

const persister = persistStore(store)

export default {store, persister}
