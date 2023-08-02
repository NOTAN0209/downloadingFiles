import React, { useState } from 'react';
import './App.css';


const FileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files.slice(0, 100)); // Limiting the selection to 100 files
  };

  const handleUpload = () => {
    // Perform the upload logic to Yandex.Disk using selectedFiles array
    console.log(selectedFiles);
    // Reset selectedFiles state after successful upload
    setSelectedFiles([]);
  };

  return (
    <div className="download">
      <input type="file" multiple onChange={handleFileSelect} />
      <button onClick={handleUpload}>Загрузить</button>
      <p>Выбранные фаилы:</p>
      <ul className="downloadList">
        {selectedFiles.map((file, index) => (
          <li className="downloadItem" key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploader;