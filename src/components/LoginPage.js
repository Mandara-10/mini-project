// src/components/LoginPage.js
import React, { useState } from "react";
import translations from "../utils/translations";

const LoginPage = ({ setUser }) => {
  const [language, setLanguage] = useState("english");
  const [role, setRole] = useState("farmer");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);

  const t = translations[language];

  // Generate OTP
  const handleGenerateOtp = () => {
    if (!phone) {
      alert("Please enter phone number");
      return;
    }
    const otpValue = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otpValue);
    setOtpSent(true);
    alert(`Your OTP is: ${otpValue}`); // Demo only
  };

  // Verify OTP
  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setVerified(true);
      setUser({ phone, role, language });
      alert("Login Successful ✅");
    } else {
      alert("Invalid OTP ❌");
    }
  };

  // Change phone number
  const handleChangePhone = () => {
    setPhone("");
    setOtp("");
    setGeneratedOtp("");
    setOtpSent(false);
    setVerified(false);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url('/farm-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "24rem" }}>
        {/* Logo */}
        <div className="text-center mb-3">
          <div
            className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center"
            style={{ width: "60px", height: "60px" }}
          >
            <span style={{ fontSize: "2rem", color: "green" }}>🌱</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center text-success fw-bold">{t.title}</h3>
        <p className="text-center text-muted mb-4">{t.subtitle}</p>

        {/* Language Selection */}
        <div className="btn-group w-100 mb-3" role="group">
          <button
            type="button"
            className={`btn ${
              language === "english" ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => setLanguage("english")}
          >
            {t.langEnglish}
          </button>
          <button
            type="button"
            className={`btn ${
              language === "hindi" ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => setLanguage("hindi")}
          >
            {t.langHindi}
          </button>
          <button
            type="button"
            className={`btn ${
              language === "kannada" ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => setLanguage("kannada")}
          >
            {t.langKannada}
          </button>
        </div>

        {/* Role Selector */}
        <div className="mb-3">
          <label className="form-label fw-bold">{t.roleLabel}</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-select"
          >
            <option value="farmer">👨‍🌾 Farmer</option>
            <option value="gardener">🌿 Professional Gardener</option>
            <option value="home">🏡 Home User</option>
          </select>
        </div>

        {/* Phone Input */}
        {!otpSent && (
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        )}

        {/* Generate OTP */}
        {!otpSent && (
          <button
            onClick={handleGenerateOtp}
            className="btn btn-success w-100 fw-bold mb-2"
          >
            Send OTP
          </button>
        )}

        {/* OTP Input & Verify */}
        {otpSent && !verified && (
          <>
            <p className="fw-bold text-muted mb-2">
              OTP sent to +91 {phone}
            </p>
            <div className="mb-2">
              <input
                type="text"
                className="form-control text-center"
                placeholder="Enter 4-digit OTP"
                value={otp}
                maxLength={4}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <p className="text-center text-muted small">
              Demo OTP: {generatedOtp}
            </p>

            <button
              onClick={handleVerifyOtp}
              className="btn btn-success w-100 fw-bold mb-2"
              disabled={otp.length !== 4}
            >
              Verify & Login
            </button>
          </>
        )}

        {/* After Verified */}
        {verified && (
          <p className="text-center text-success fw-bold">
            ✅ Phone Verified: {phone}
          </p>
        )}

        {/* Always show Change Phone Number */}
        <p className="text-center mt-3">
          <button
            className="btn btn-link text-success fw-bold p-0"
            style={{ textDecoration: "none" }}
            onClick={handleChangePhone}
          >
            Change Phone Number
          </button>
        </p>

        {/* Footer */}
        <p className="text-center text-muted small mt-3">
          {t.terms} <u>{t.termsLink}</u>{" "}
          {language === "english" ? "and" : ""} <u>{t.privacyLink}</u>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
