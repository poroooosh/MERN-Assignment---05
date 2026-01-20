import React, { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactModal from "./ContactModal";

const ContactTable = ({ contacts }) => {
  const { deleteContact } = useContext(ContactContext);
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalMode, setModalMode] = useState(""); // 'show' or 'edit' mood

  // Function to open the modal
  const handleAction = (contact, mode) => {
    setSelectedContact(contact);
    setModalMode(mode);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedContact(null);
    setModalMode("");
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id}>
              <td>{index + 1}</td>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td width="150">
                {/* Show Details Modal */}
                <button
                  className="btn btn-sm btn-circle btn-outline-info mr-1"
                  title="Show"
                  onClick={() => handleAction(contact, "show")}
                >
                  <i className="fa fa-eye"></i>
                </button>

                {/* Edit Contact Modal */}
                <button
                  className="btn btn-sm btn-circle btn-outline-secondary mr-1"
                  title="Edit"
                  onClick={() => handleAction(contact, "edit")}
                >
                  <i className="fa fa-edit"></i>
                </button>

                {/* Delete with Warning */}
                <button
                  className="btn btn-sm btn-circle btn-outline-danger"
                  title="Delete"
                  onClick={() => deleteContact(contact.id)}
                >
                  <i className="fa fa-times"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* The modal will only be shown if a contact is selected */}
      {selectedContact && (
        <ContactModal
          contact={selectedContact}
          mode={modalMode}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ContactTable;
