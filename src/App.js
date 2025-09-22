// src/App.js
import React, { useState } from "react";
import LoginPage from "./components/LoginPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? <h2 className="text-center mt-5">Welcome, {user.phoneOrEmail} 👩‍🌾</h2> : <LoginPage setUser={setUser} />}
    </div>
  );
}

export default App;
