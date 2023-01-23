import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Station } from '../interfaces/station.interface';

export const StationsContext = createContext<Station[]>([]);

export interface StationsContextValue {
  [id: string]: Station;
}

export function StationsContextProvider({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [stations, setStations] = useState<Station[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/metro/station')
      .then((response) => {
        const stations: Station[] = response.data;

        setStations(stations);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <StationsContext.Provider value={stations}>
      {children}
    </StationsContext.Provider>
  );
}
