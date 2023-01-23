import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { StationToilet } from '../interfaces/station-toilet.interface';

export const StationToiletContext = createContext({
  modal: false,
  stationId: 0,
  stationToilet: [] as StationToilet[],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openModal: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeModal: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateStationId: (id: number) => {}
});

export function StationToiletContextProvider({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [state, setState] = useState({
    modal: false,
    stationId: 0,
    stationToilet: [] as StationToilet[],
    openModal: () => {
      setState({ ...state, modal: true });
    },
    closeModal: () => {
      setState({ ...state, modal: false });
    },
    updateStationId: (id: number) => {
      axios
        .get(`http://localhost:8080/metro/station/toilet/${id}`)
        .then((response) => {
          const toilets: StationToilet[] = response.data;
          setState({ ...state, stationToilet: toilets, modal: true });
        });
    }
  });

  return (
    <StationToiletContext.Provider value={state}>
      {children}
    </StationToiletContext.Provider>
  );
}
