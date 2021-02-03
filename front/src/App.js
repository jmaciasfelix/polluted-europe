import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8080";

function App() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("FromAPI", (data) => {
      setResponse(data);
      console.log(data);
    });

    return () => socket.disconnect();
  }, []);

  return <p>It's</p>;
}

export default App;
