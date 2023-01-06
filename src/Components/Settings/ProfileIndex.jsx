import React, { useCallback } from "react";
import FileUpload from "../Inputs/FileUpload";
import SettingsInput from "../Inputs/SettingsInput";
import { useDropzone } from "react-dropzone";

const ProfileIndex = () => {
  const fullname = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      {/* <div className="h-[200px] sm:min-h-[300px] justify-center flex flex-col relative my-auto">
        <FileUpload
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isDragActive={isDragActive}
        />
      </div> */}
      <form className="mt-6">
        <SettingsInput label="Fullname" type="text" placeholder={fullname} />
        <SettingsInput label="Email" type="email" placeholder={email} />
        <SettingsInput
          label="Phone number"
          type="number"
          placeholder="Enter Phone Number"
        />
        <SettingsInput label="Country" type="text" placeholder="Country" />
        <SettingsInput
          label="City"
          type="text"
          placeholder="Enter your current City"
        />
      </form>
    </div>
  );
};

export default ProfileIndex;
