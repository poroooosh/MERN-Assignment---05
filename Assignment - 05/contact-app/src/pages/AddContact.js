import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ContactContext } from "../context/ContactContext";

const AddContact = () => {
  // The addContact function has been brought in from the context.
  const { addContact } = useContext(ContactContext);
  const navigate = useNavigate();

  // State for holding form data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Function to update state as input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(formData); // API call via Context
    navigate("/"); // Redirect to the home page after successfully adding
  };

  return (
    <main className="py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header card-title">
                <strong>Add New Contact</strong>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* First Name Field */}
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">
                      First Name
                    </label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        required
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Last Name Field */}
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Last Name</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        required
                        value={formData.last_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Email</label>
                    <div className="col-md-9">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Phone</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Address Field */}
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Address</label>
                    <div className="col-md-9">
                      <textarea
                        name="address"
                        className="form-control"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  <hr />

                  <div className="form-group row mb-0">
                    <div className="col-md-9 offset-md-3">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                      <Link to="/" className="btn btn-outline-secondary ml-2">
                        Cancel
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddContact;
