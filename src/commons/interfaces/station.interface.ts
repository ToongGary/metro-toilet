export interface Station {
  id: number;
  lineCode: string;
  lineName: string;
  stationCode: string;
  stationName: string;
  stationOrder: number;
  regionCode: string;
  operatingAgencyCode: string;
  toiletCount: number;
  toiletInGateCount: number;
}
