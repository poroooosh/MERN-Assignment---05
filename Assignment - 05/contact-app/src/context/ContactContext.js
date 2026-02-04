import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://mern-assignment-05.onrender.com/contacts";

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setContacts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Network Error: Is your backend running?");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (contact) => {
    try {
      await axios.post(API_URL, contact);
      fetchContacts();
    } catch (err) {
      alert("Error adding contact");
    }
  };

  const updateContact = async (id, updatedData) => {
    try {
      await axios.put(`${API_URL}/${id}`, updatedData);
      fetchContacts();
    } catch (err) {
      alert("Error updating contact");
    }
  };

  const deleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchContacts();
      } catch (err) {
        alert("Error deleting contact");
      }
    }
  };

  return (
    <ContactContext.Provider
      value={{ contacts, loading, addContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

