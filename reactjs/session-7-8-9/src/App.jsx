import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

const defaultContacts = [
  { id: 1, name: "John Doe", online: false },
  { id: 2, name: "Mary Jane", online: true },
];

function App() {
  const [contacts, setContacts] = useState(() => defaultContacts);

  const toggleStatus = (idContact) => {
    const updatedContacts = [...contacts];
    const idx = updatedContacts.findIndex((c) => c.id === idContact);
    if (idx > -1) {
      updatedContacts[idx].online = !updatedContacts[idx].online;
      setContacts(updatedContacts);
    }
  };

  const deleteContact = (idContact) => {
    setContacts(contacts.filter((c) => c.id !== idContact));
  };

  const addContact = (newContact) => {
    // TODO: generate id sequential
    setContacts([...contacts, { ...newContact, id: Date.now() }]);
  };

  return (
    <div style={{ maxWidth: "640px", margin: "0 auto" }}>
      <h1 style={{ padding: "8px 24px" }}>Contact List</h1>
      <ContactList
        contacts={contacts}
        onDelete={deleteContact}
        toggleStatus={toggleStatus}
      />
      <ContactForm onCreate={addContact} />
    </div>
  );
}

export default App;
