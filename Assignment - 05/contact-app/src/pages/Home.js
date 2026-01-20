import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // This is required for the Add New button
import { ContactContext } from "../context/ContactContext";
import ContactTable from "../components/ContactTable";

const Home = () => {
  const { contacts, loading } = useContext(ContactContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("default");

  // Search logic: Filter by First Name, Last Name, Email, or Phone
  const filteredContacts = contacts
    .filter(
      (c) =>
        c.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.phone.includes(searchTerm),
    )
    .sort((a, b) => {
      if (filterType === "1") return a.first_name.localeCompare(b.first_name); // First Name (A → Z)
      if (filterType === "2") return a.last_name.localeCompare(b.last_name); // Last Name (A → Z)
      if (filterType === "3") return b.id - a.id; // Oldest To First
      return 0;
    });

  return (
    <main className="py-5">
      <div className="container">
        <div className="card">
          <div className="card-header card-title">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="mb-0 text-white">All Contacts</h2>
              <div className="input-group w-50">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search contact..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {/* Add New button added as per instructions */}
              <div>
                <Link to="/add-contact" className="btn btn-success">
                  <i className="fa fa-plus-circle"></i> Add New
                </Link>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between p-3">
            <div className="fs-2">
              <i className="fa fa-filter text-success"></i> Filter
            </div>
            <select
              className="form-select"
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="1">First Name (A → Z)</option>
              <option value="2">Last Name (A → Z)</option>
              <option value="3">Oldest To First</option>
            </select>
          </div>

          <div className="card-body">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : filteredContacts.length > 0 ? (
              <ContactTable contacts={filteredContacts} />
            ) : (
              <div className="text-center py-5">
                {/* This message will be shown if the search result is empty */}
                <h4 className="text-muted">No Contact Information Found</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
