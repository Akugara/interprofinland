export type Value = {
  title: string;
  description: string;
};

// Full value statements as published on interprofinland.fi/about-us.
export const values: Value[] = [
  {
    title: "Potentiality",
    description:
      "We believe that there is an inherent ability in every single one of us which can be nurtured and developed to the fullest capacity.",
  },
  {
    title: "Recognition",
    description:
      "We believe that all humans deserve to be seen in the totality of their existence, not just in the fragment of the present, but as an entity with a past, skills, and identity that should be recognised.",
  },
  {
    title: "Professionalism",
    description:
      "We believe that underutilization of professional skills and training amounts to brain waste, and that harnessing the skills and talents inherent in a society enriches its economy.",
  },
  {
    title: "Growth",
    description:
      "We believe that growth is a natural occurrence which is vital to human existence and wellbeing, and that everyone deserves a chance to grow professionally, economically, and in other areas they need to grow in.",
  },
  {
    title: "Inclusion",
    description:
      "We believe that a society is at its best if all who live within it are carried along in all areas, with none left devoid of the feeling of belonging.",
  },
];

// Matches the live counter on interprofinland.fi (as of this writing).
// These are point-in-time community stats, not derived figures — update
// periodically as the real numbers grow.
export const stats = [
  { value: 1800, suffix: "+", label: "Professionals" },
  { value: 80, suffix: "+", label: "Professions" },
  { value: 74, suffix: "+", label: "Nationalities" },
  { value: 2021, suffix: "", label: "Founded" },
];
