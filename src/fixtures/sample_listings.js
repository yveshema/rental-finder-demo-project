import { shuffle, normalize } from "../utils/functions";
import { Address, Specs } from "../utils/classes";

import sample_listings from "./sample_listings.json";

export function init() {
  return shuffle(sample_listings).map(function (listing) {
    return {
      id: listing.id,
      name: listing.name,
      description: "Great residential unit for individuals and/or families",
      address: new Address(
        listing.st_num,
        listing.st_name,
        listing.city,
        listing.province,
        listing.zip
      ),
      image: "https://source.unsplash.com/random?house",
      specs: new Specs(
        1,
        1,
        320,
        ["Apartment", "Townhouse", "Condo"][Math.floor(Math.random() * 3)]
      ),
      utilities: ["water", "heating"],
      features: {
        unit: ["fridge", "microwave"],
        building: ["laundry facilities"],
        nearby: ["transit"],
        other: []
      },
      policies: ["no smoking", "no pets"],
      management: "",
      verified: [true, false][Math.floor(Math.random() * 2)],
      contact: {
        email: `${normalize(listing.name)}@mail.com`,
        phone: listing.phone
      }
    };
  });
}
