import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();

    const interval = setInterval(() => {
      fetchUsers();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <div className="bg1"></div>
      <div className="bg2"></div>

      <div className="container">
        <div className="top-section">
          <div>
            <h1>Users Portal</h1>
          </div>
        </div>

        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="card-container">
            {users.map((user) => (
              <div className="card" key={user.id}>
                <h2>{user.name}</h2>

                <div className="info">
                  <span>Email</span>
                  <p>{user.email}</p>
                </div>

                <div className="info">
                  <span>Phone</span>
                  <p>{user.phone}</p>
                </div>

                <div className="info">
                  <span>Website</span>
                  <p>{user.website}</p>
                </div>

                <div className="info">
                  <span>Company</span>
                  <p>{user.company.name}</p>
                </div>

                <button onClick={() => setSelectedUser(user)}>
                  View More
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedUser && (
        <div className="modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="close" onClick={() => setSelectedUser(null)}>
              ✕
            </div>

           <h2 style={{ color: "gold" }}>{selectedUser.name}</h2>

            <div className="details">
              <div>
                <span>Username</span>
                <p>{selectedUser.username}</p>
              </div>

              <div>
                <span>Email</span>
                <p>{selectedUser.email}</p>
              </div>

              <div>
                <span>Phone</span>
                <p>{selectedUser.phone}</p>
              </div>

              <div>
                <span>Website</span>
                <p>{selectedUser.website}</p>
              </div>

              <div>
                <span>Company</span>
                <p>{selectedUser.company.name}</p>
              </div>

              <div>
                <span>Catch Phrase</span>
                <p>{selectedUser.company.catchPhrase}</p>
              </div>

              <div>
                <span>City</span>
                <p>{selectedUser.address.city}</p>
              </div>

              <div>
                <span>Street</span>
                <p>{selectedUser.address.street}</p>
              </div>

              <div>
                <span>Suite</span>
                <p>{selectedUser.address.suite}</p>
              </div>

              <div>
                <span>Zipcode</span>
                <p>{selectedUser.address.zipcode}</p>
              </div>

              <div>
                <span>Latitude</span>
                <p>{selectedUser.address.geo.lat}</p>
              </div>

              <div>
                <span>Longitude</span>
                <p>{selectedUser.address.geo.lng}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;