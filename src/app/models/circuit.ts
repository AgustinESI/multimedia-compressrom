export class Circuit {
  circuitName: string;
  circuitId: string;
  raceName: string;
  latitude: string;
  longitude: string;
  locality: string;
  country: string;
  image: string;
  date: string;
  time: string;
  pass: boolean;

  constructor(
    circuitName: string,
    raceName: string,
    circuitId: string,
    latitude: string,
    longitude: string,
    locality: string,
    country: string,
    image: string,
    date: string,
    time: string,
    pass: boolean
  ) {
    this.circuitName = circuitName;
    this.raceName = raceName;
    this.circuitId = circuitId;
    this.latitude = latitude;
    this.longitude = longitude;
    this.locality = locality;
    this.country = country;
    this.image = image;
    this.date = date;
    this.time = time;
    this.pass = pass;
  }
}
