import { useRef, useState } from "react";

const ContactForm = ({ onCreate }) => {
  const inputRef = useRef();
  const [name, setName] = useState("");

  const newContact = (e) => {
    e.preventDefault();
    onCreate({
      name,
      online: false,
    });
  };
  return (
    <form onSubmit={newContact}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        ref={inputRef}
        value={name}
        onChange={() => setName(inputRef.current.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default ContactForm;
