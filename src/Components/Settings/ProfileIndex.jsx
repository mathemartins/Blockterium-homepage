import React, { useCallback } from "react";
import FileUpload from "../Inputs/FileUpload";
import SettingsInput from "../Inputs/SettingsInput";
import { useDropzone } from "react-dropzone";

const ProfileIndex = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <div className="h-[200px] sm:min-h-[300px] justify-center flex flex-col relative my-auto">
        <FileUpload
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          isDragActive={isDragActive}
        />
      </div>
      <form>
        <SettingsInput
          label="First Name"
          type="text"
          placeholder="Enter First Name"
        />
        <SettingsInput
          label="First Name"
          type="text"
          placeholder="Enter First Name"
        />
        <SettingsInput label="Email" type="email" placeholder="Enter Email" />
        <SettingsInput
          label="Phone number"
          type="number"
          placeholder="Enter Phone Number"
        />
      </form>
    </div>
  );
};

export default ProfileIndex;
