import PropTypes from 'prop-types';
import style from './ContactListElement.module.css';

const ContactListElement = ({ id, name, number, onDelete }) => (
  <li className={style.ContactList__item} key={id}>
    <span className={style.ContactList__text}>{name}: </span>
    <span className={style.ContactList__text}>{number}: </span>
    <button className={style.ContactList__button} onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListElement;
