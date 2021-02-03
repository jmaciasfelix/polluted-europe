import { useEffect, useState } from "react";
//SocketsIo
import socketIOClient from "socket.io-client";

/**
 * usePollutedCities use a WebSocket to get the polluted cities from Europe
 * @return { Object[] } pollutedCities
 */
export function usePollutedCities() {
  const [pollutedCities, setPolutedCities] = useState(false);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("serverPollutedEurope", (pollutedCities) =>
      setPolutedCities(pollutedCities)
    );

    return () => socket.disconnect();
  }, []);

  return [pollutedCities];
}
