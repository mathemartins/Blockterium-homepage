import React from "react";

const SettingsInput = ({ label, placeholder, type }) => {
  return (
    <div className="border border-greySeven flex flex-col py-1 mb-3">
      <label className="px-5 text-xs">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        className="border-none text-greyFour text-sm outline-none px-5"
      />
    </div>
  );
};

export default SettingsInput;
