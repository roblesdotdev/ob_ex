const ContactItem = ({ contact, toggleStatus, onDelete }) => {
  return (
    <li>
      <span>{contact.name}</span>
      <button onClick={() => toggleStatus(contact.id)}>
        {contact.online ? "Online" : "Offline"}
      </button>
      <button onClick={() => onDelete(contact.id)}>X</button>
    </li>
  );
};

export default ContactItem;
