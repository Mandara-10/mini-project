import React from "react";
import translations from "../utils/translations";

const Dashboard = ({ user, setUser }) => {
  const t = translations[user.language];

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">
          {t.welcome}, {user.name} 👩‍🌾
        </h1>
        <button
          onClick={() => setUser(null)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          {t.logout}
        </button>
      </header>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold text-green-600">{t.crops}</h2>
          <p>{t.cropsDesc}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold text-green-600">{t.upload}</h2>
          <p>{t.uploadDesc}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold text-green-600">{t.notify}</h2>
          <p>{t.notifyDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
