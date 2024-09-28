import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import api from '../api/contacts';
import EditContact from './EditContact';

function App() {
  const [contacts, setContacts] = useState([]);

  const retrievedContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact
    };

    const response = await api.post("/contacts", request);
    setContacts((prevContacts) => [...prevContacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrievedContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ContactList contacts={contacts} removeContactHandler={removeContactHandler} />}
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/contact/:id"
            element={<ContactDetail />}
          />
          <Route
            path="/edit/:id"
            element={<EditContact updateContactHandler={addContactHandler} />} // Adjusted to use addContactHandler
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
