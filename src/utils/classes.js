export class Address {
  constructor(streetNo, streetName, city, province, zip) {
    this.streetNo = streetNo;
    this.streetName = streetName;
    this.city = city;
    this.province = province;
    this.zip = zip;
  }

  get streetAddress() {
    return `${this.streetNo} ${this.streetName}`;
  }

  toString() {
    return `${this.streetAddress}, ${this.city}, ${this.zip} ${this.province}`;
  }
}

export class Specs {
  constructor(bdr, bth, flp, type) {
    this.bdr = bdr;
    this.bth = bth;
    this.flp = flp;
    this.type = type;
  }
}
