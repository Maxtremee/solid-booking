import { db } from ".";
import { accomodations } from "./schema";

await db.insert(accomodations).values([
  {
    name: "Sarbinowo",
    description:
      "Sarbinowo is a village in the administrative district of Gmina Mielno, within Koszalin County, West Pomeranian Voivodeship, in north-western Poland.",
    location: "Sarbinowo, Poland",
    price: 100,
  },
  {
    name: "Mielno",
    description:
      "Mielno is a village in the administrative district of Gmina Mielno, within Koszalin County, West Pomeranian Voivodeship, in north-western Poland.",
    location: "Mielno, Poland",
    price: 150,
  },
  {
    name: "Koszalin",
    description:
      "Koszalin is a village in the administrative district of Gmina Mielno, within Koszalin County, West Pomeranian Voivodeship, in north-western Poland.",
    location: "Koszalin, Poland",
    price: 200,
  },
]);
