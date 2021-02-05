import { useEffect, useState } from "react";
//constants
import { ENDPOINT } from "src/constant";
//SocketsIo
import socketIOClient from "socket.io-client";

/**
 * usePollutedCities use a WebSocket to get the polluted cities from Europe
 * @return { Object[] } pollutedCities
 */
export function usePollutedCities() {
  const [pollutedCities, setPolutedCities] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const handleErrors = (socket) => {
    socket.disconnect();
    setLoading(false);
    setError(true);
  };

  const retry = () => setError(false);

  useEffect(() => {
    setLoading(true);
    const socket = socketIOClient(ENDPOINT);

    socket.on("serverPollutedEurope", (pollutedCities) => {
      setPolutedCities(pollutedCities);
      setLoading(false);
    });

    socket.on("connect_error", () => handleErrors(socket));
    socket.on("connect_failed", () => handleErrors(socket));

    return () => socket.disconnect();
  }, [isError]);

  return [pollutedCities, isLoading, isError, retry];
}
