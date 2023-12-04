import { shuffle, normalize } from "../utils/functions";
import { Address, Specs } from "../utils/classes";
import sample_listings from "./sample_listings.json";
import { images } from "./images";

export function init() {
  return shuffle(sample_listings).map(function (listing, idx) {
    const listingType = ["apartment", "townhouse", "condo"][
      Math.floor(Math.random() * 3)
    ];
    const verified = [true, false][Math.floor(Math.random() * 2)];
    const num_apartments = images.apartments.length;
    const num_houses = images.houses.length;
    const image =
      listingType === "apartment"
        ? images.apartments[idx % num_apartments]
        : images.houses[idx % num_houses];

    return {
      id: listing.id,
      name: listing.name,
      description: "Great residential unit for individuals and/or families",
      address: new Address(
        listing.st_num,
        listing.st_name,
        listing.city,
        listing.province,
        listing.zip,
      ),
      image: image.path,
      specs: new Specs(1, 1, 320, listingType),
      utilities: ["water", "heating"],
      features: {
        unit: ["fridge", "microwave"],
        building: ["laundry facilities"],
        nearby: ["transit"],
        other: [],
      },
      policies: ["no smoking", "no pets"],
      management: "",
      verified,
      contact: {
        email: `${normalize(listing.name)}@mail.com`,
        phone: listing.phone,
      },
    };
  });
}
