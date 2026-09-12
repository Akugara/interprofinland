export type Partner = {
  name: string;
  logo?: string;
};

// Real partner network & logos pulled from interprofinland.fi.
export const partners: Partner[] = [
  { name: "SAMK", logo: "/logos/partners/samk.png" },
  { name: "JCI Pori", logo: "/logos/partners/jci-pori.jpg" },
  { name: "Satarekry", logo: "/logos/partners/satarekry.png" },
  { name: "SMY", logo: "/logos/partners/smy.png" },
  { name: "Finnwards", logo: "/logos/partners/finnwards.png" },
  { name: "PoriES", logo: "/logos/partners/pories.png" },
  { name: "Seasons", logo: "/logos/partners/seasons.png" },
  { name: "KYKY Today", logo: "/logos/partners/kyky.png" },
  { name: "International House Pori" },
  { name: "Nicehearts ry", logo: "/logos/partners/nicehearts.jpg" },
];

// Networks & accreditation bodies InterProFinland is a member of.
export const networkMemberships = [
  { name: "ENII", logo: "/logos/networks/enii.png" },
  { name: "EURES", logo: "/logos/networks/eures.png" },
  { name: "Moniheli", logo: "/logos/networks/moniheli.png" },
];
