import { useState } from "react";
import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const iplTeam = [
    {
      id: 1,
      team: "Royal Challengers Bengaluru",
      captain: "Rajat Patidar",
      points: "18 Points",
      status: "Qualified",
    },
    {
      id: 2,
      team: "Gujarath Titans",
      captain: "Shubman Gill",
      points: "16 Points",
      status: "Playoff Race",
    },
    {
      id: 3,
      team: "Sunrisers Hyderabad",
      captain: "Pat Cummins",
      points: "12 Points",
      status: "Playoff Race",
    },
    {
      id: 4,
      team: "Punjab Kings",
      captain: "Shreyas Iyer",
      points: "13 Points",
      status: "Playoff Race",
    },
    {
      id: 5,
      team: "Chennai Super Kings",
      captain: "Ruturaj Gaikwad",
      points: "12 Points",
      status: "Playoff Race",
    },
    {
      id: 6,
      team: "Rajasthan Royals",
      captain: "Riyan Parag",
      points: "12 Points",
      status: "Playoff Race",
    },
    {
      id: 7,
      team: "Delhi Capitals",
      captain: "Axar Patel",
      points: "12 Points",
      status: "Playoff Race",
    },
    {
      id: 8,
      team: "Kolkata Knight Riders",
      captain: "Ajinkya Rahane",
      points: "11 Points",
      status: "Playoff Race",
    },
    {
      id: 9,
      team: "Mumbai Indians",
      captain: "Hardil Pandya",
      points: "8 Points",
      status: "Eliminated",
    },
    {
      id: 10,
      team: "Lucknow Super Giants",
      captain: "Rishabh Pant",
      points: "8 Points",
      status: "Eliminated",
    }
  ];

  return (
    <div className="full">

      <div className="container">

        <h1 className="title">
          IPL 2026 Dashboard
        </h1>


        <div className="section login-section">

          <button
            className="btn"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>

          {
            isLoggedIn ? (
              <div className="content-box">

                <h3 className="text">
                  Welcome Back to IPL DashBoard
                </h3>

                <p>
                  IPL 2026 live playoff updates are now visible
                </p>

              </div>
            ) : (
              <div className="content-box">

                <h3 className="warning">
                  Please Login
                </h3>

                <p>
                  Login to see IPL 2026 team Updates
                </p>

              </div>
            )
          }

        </div>

        {
          isLoggedIn && (

            <div className="section login-section">

              <h2>IPL Teams Status</h2>

              <div className="card-container">

                {
                  iplTeam.map((ipl) => (
                    <div className="content-box" key={ipl.id}>

                      <div className="card-top"></div>

                      <span className="status">
                        {ipl.status}
                      </span>

                      <h3>{ipl.team}</h3>

                      <p>
                        <strong>Captain:</strong> {ipl.captain}
                      </p>

                      <p>
                        <strong>Points:</strong> {ipl.points}
                      </p>

                      <button className="card-btn">
                        View Team
                      </button>

                    </div>
                  ))
                }

              </div>

            </div>

          )
        }

      </div>

    </div>
  );
}

export default App;