import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      setMessage('Please choose a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data);
    } catch (error) {
      console.error('There was an error uploading the file!', error);
      setMessage('Upload failed. Make sure the backend is running.');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Secure File Transfer</h1>
      <p>Select a file to upload securely.</p>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} style={{ marginLeft: '0.5rem' }}>
        Upload
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
