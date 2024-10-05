export class Driver {
  name: string;
  surname: string;
  dob: string;
  scuderia: string;
  image: string;
  country: string;
  points: number;
  number: number;

  constructor(
    name: string,
    surname: string,
    dob: string,
    scuderia: string,
    image: string,
    country: string,
    points: number,
    number: number
  ) {
    this.name = name;
    this.surname = surname;
    this.dob = dob;
    this.scuderia = scuderia;
    this.image = image;
    this.country = country;
    this.points = points;
    this.number = number;
  }
}
