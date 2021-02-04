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

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("serverPollutedEurope", (pollutedCities) => {
      setPolutedCities(pollutedCities);
      setLoading(false);
    });

    return () => socket.disconnect();
  }, []);

  return [pollutedCities, isLoading];
}
