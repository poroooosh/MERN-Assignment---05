import React, { useState, useEffect, useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const ContactModal = ({ contact, mode, onClose }) => {
  const { updateContact } = useContext(ContactContext);
  const [formData, setFormData] = useState({ ...contact });

  // When new contact will be Selected, State will Update
  useEffect(() => {
    setFormData({ ...contact });
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "edit") {
      await updateContact(contact.id, formData); //Data Update in  Edit Mood
    }
    onClose();
  };

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              {mode === "edit" ? "Edit Contact" : "Contact Details"}{" "}
              {/* Instruction wise Title */}
            </h5>
            <button
              type="button"
              className="close text-white"
              onClick={onClose}
            >
              <span>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {/* First Name Field */}
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">First Name</label>
                <div className="col-sm-9">
                  {mode === "edit" ? (
                    <input
                      type="text"
                      name="first_name"
                      className="form-control"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                  ) : (
                    <p className="form-control-plaintext text-muted">
                      {contact.first_name}
                    </p>
                  )}
                </div>
              </div>

              {/* Last Name Field */}
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Last Name</label>
                <div className="col-sm-9">
                  {mode === "edit" ? (
                    <input
                      type="text"
                      name="last_name"
                      className="form-control"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                    />
                  ) : (
                    <p className="form-control-plaintext text-muted">
                      {contact.last_name}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                  {mode === "edit" ? (
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  ) : (
                    <p className="form-control-plaintext text-muted">
                      {contact.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Phone</label>
                <div className="col-sm-9">
                  {mode === "edit" ? (
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  ) : (
                    <p className="form-control-plaintext text-muted">
                      {contact.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Address Field */}
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Address</label>
                <div className="col-sm-9">
                  {mode === "edit" ? (
                    <textarea
                      name="address"
                      className="form-control"
                      rows="3"
                      value={formData.address}
                      onChange={handleChange}
                    ></textarea>
                  ) : (
                    <p className="form-control-plaintext text-muted">
                      {contact.address || "N/A"}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {mode === "edit" ? (
                <>
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
