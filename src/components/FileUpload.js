// FileUpload.js

import React, { useState } from 'react';


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    } else {
      setFile(null);
      setUploadStatus('Please select a valid PDF file.');
    }
  };

  const handleFileUpload = () => {
    if (file) {
      // Simulate API call to save the file and get the response.
      // Replace this with your actual API call in a real-world scenario.
      setTimeout(() => {
        setUploadStatus('Upload successful.');
      }, 2000);
    } else {
      setUploadStatus('Please select a PDF file to upload.');
    }
  };

  return (
    <div className="file-upload">
      <input type="file" accept=".pdf" onChange={handleFileChange} className="file-input" />
      <button onClick={handleFileUpload}>Upload</button>
      {file && (
        <div className="preview">
          <h3>Preview:</h3>
          <embed src={URL.createObjectURL(file)} width="500" height="400" type="application/pdf" />
        </div>
      )}
      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
    </div>
  );
};

export default FileUpload;
