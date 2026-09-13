export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
};

// Real team roster, bios, and LinkedIn links, pulled from interprofinland.fi/about-us.
export const founder: TeamMember = {
  name: "Olivia Kumpula",
  role: "CEO & Founder",
  bio: "Olivia founded InterProFinland in 2021 after her own experience as an expat navigating the Finnish workforce. Through her expat blog and 'The Finns and Foreigners Club', she saw firsthand how many international professionals face the same barriers — and built InterProFinland to close that gap.",
  photo: "/images/team/olivia-kumpula.jpg",
  linkedin: "https://www.linkedin.com/in/oliviakumpula/",
};

export const chairperson: TeamMember = {
  name: "Henriika Ilkko",
  role: "Chairperson",
  bio: "Henriika has successfully led numerous projects and excelled in IT, Quality Management, and Project Management Office (PMO) functions in her impressive career. In her role as Chairperson, Henriika plays a crucial role in guiding our organization's strategic direction, fostering growth, and ensuring continued excellence in all our endeavors.",
  photo: "/images/team/henriika-ilkko.jpg",
};

export const team: TeamMember[] = [
  {
    name: "Matthew Bowen",
    role: "CAO",
    bio: "Oversees administration and operations, keeping the organization running smoothly for its members.",
    photo: "/images/team/matthew-bowen.jpg",
    linkedin: "https://www.linkedin.com/in/matthew-j-bowen/",
  },
  {
    name: "Meha Bouazizi",
    role: "Media / Marketing",
    bio: "Tells the stories of our members and keeps the community informed and connected.",
    photo: "/images/team/meha-bouazizi.jpg",
    linkedin: "https://www.linkedin.com/in/meha-bouazizi/",
  },
  {
    name: "Temitope Popoola",
    role: "Funding / Project Coordinator",
    bio: "Coordinates funding and project delivery across InterProFinland's programs.",
    photo: "/images/team/temitope-popoola.jpg",
    linkedin: "https://www.linkedin.com/in/popoola-temitope/",
  },
  {
    name: "Bruna Eklund",
    role: "Project & Event Coordinator",
    bio: "Plans and runs InterProFinland's projects and community events.",
    photo: "/images/team/bruna-eklund.jpg",
  },
  {
    name: "Pooja Mattoo",
    role: "Kielikaverit (Language Club) Coordinator",
    bio: "Organizes the Finnish Language Club and integration meetups across the community.",
    photo: "/images/team/pooja-mattoo.jpg",
  },
  {
    name: "Gabriel Ebah",
    role: "Facilitator, Media & Marketing (Volunteer)",
    bio: "Volunteers his time supporting InterProFinland's media, marketing, and facilitation work.",
    photo: "/images/team/gabriel-ebah.jpg",
  },
];
