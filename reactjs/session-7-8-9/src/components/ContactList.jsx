import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onDelete, toggleStatus }) => {
  return (
    <div>
      <ul>
        {contacts.map((c) => (
          <ContactItem
            contact={c}
            key={c.id}
            onDelete={onDelete}
            toggleStatus={toggleStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
