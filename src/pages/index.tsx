import React, { useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');

  const sendRequest = async () => {
    try {
      const res = await axios({
        method,
        url,
        headers: headers ? JSON.parse(headers) : {},
        data: body ? JSON.parse(body) : {},
      });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setResponse(JSON.stringify(error.response.data, null, 2));
      } else if (error.request) {
        // The request was made but no response was received
        setResponse("No response received: " + error.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        setResponse("Error: " + error.message);
      }
    }
  };

  return (
    <div>
      <h1>Postman Extension</h1>
      <div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL"
        />
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <textarea
          value={headers}
          onChange={(e) => setHeaders(e.target.value)}
          placeholder="Headers (JSON format)"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body (JSON format)"
        />
        <button onClick={sendRequest}>Send Request</button>
      </div>
      <div>
        <h2>Response</h2>
        <pre>{response}</pre>
      </div>
    </div>
  );
};

export default Home;
