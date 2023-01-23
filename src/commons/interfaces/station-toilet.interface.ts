export interface StationToilet {
  id: number;
  stationId: number;
  operatingAgencyCode: string;
  toiletDetailLocation: string;
  toiletFloor: number;
  toiletFloorType: string;
  toiletSexType: string;
  toiletGateType: string;
  toiletNearExitNumber: string;
  toiletCount: number;
  toiletDiaperCount: number;
}
