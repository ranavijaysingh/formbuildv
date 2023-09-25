import React, { useState } from 'react';

export default function FileUploadComp() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // Get the selected file from the input element
    const file = e.target.files[0];

    // Update the state with the selected file
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Check if a file has been selected
    if (selectedFile) {
      // You can perform file upload logic here (e.g., send the file to a server)
      console.log('Uploading file:', selectedFile.name);
    } else {
      alert('Please select a file before uploading.');
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>


      <h2>File Uploader</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {selectedFile && (
        <div>
          <h3>Selected File:</h3>
          <p>Name: {selectedFile.name}</p>
          <p>Type: {selectedFile.type}</p>
          <p>Size: {selectedFile.size} bytes</p>
        </div>
      )}


    </div>
  );
}