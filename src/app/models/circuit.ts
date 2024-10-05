export class Circuit {
  circuitName: string;
  circuitId: string;
  raceName: string;
  latitude: string;
  longitude: string;
  locality: string;
  country: string;
  date: string;
  time: string;

  constructor(
    circuitName: string,
    raceName: string,
    circuitId: string,
    latitude: string,
    longitude: string,
    locality: string,
    country: string,
    date: string,
    time: string
  ) {
    this.circuitName = circuitName;
    this.raceName = raceName;
    this.circuitId = circuitId;
    this.latitude = latitude;
    this.longitude = longitude;
    this.locality = locality;
    this.country = country;
    this.date = date;
    this.time = time;
  }
}
