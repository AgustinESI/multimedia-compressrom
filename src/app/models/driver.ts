export class Driver {
    name: string;
    surname: string;
    dob: string;
    scuderia: string;
    image: string;
    imageGoldNoName: string;
    imageGoldName: string;
  
    constructor(
      name: string,
      surname: string,
      dob: string,
      scuderia: string,
      image: string,
      imageGoldNoName: string,
      imageGoldName: string
    ) {
      this.name = name;
      this.surname = surname;
      this.dob = dob;
      this.scuderia = scuderia;
      this.image = image;
      this.imageGoldNoName = imageGoldNoName;
      this.imageGoldName = imageGoldName;
    }
  }
  