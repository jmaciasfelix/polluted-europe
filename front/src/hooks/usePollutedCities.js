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
  const [pollutedCities, setPolutedCities] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  const handleErrors = (socket) => {
    socket.disconnect();
    setLoading(false);
    setPolutedCities(null);
    setError(true);
  };

  const retry = () => setError(false);
  const getDate = () =>
    new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "long",
    })
      .format(Date.now())
      .replace("CET", "");

  useEffect(() => {
    setLoading(true);
    const socket = socketIOClient(ENDPOINT);

    socket.on("serverPollutedEurope", (pollutedCities) => {
      setLastUpdate(getDate());
      setPolutedCities(pollutedCities);
      setLoading(false);
    });

    socket.on("connect_error", () => handleErrors(socket));
    socket.on("connect_failed", () => handleErrors(socket));

    return () => socket.disconnect();
  }, [isError]);

  return [pollutedCities, isLoading, isError, retry, lastUpdate];
}
