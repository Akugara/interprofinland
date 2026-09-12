export type MagazineIssue = {
  issueNumber: string;
  title: string;
  publishDate: string;
  cover: string;
  href: string;
};

// Real Heyzine flip-book embeds currently live on interprofinland.fi/magazine.
// Titles and dates are read directly off each issue's own cover art — the
// site itself doesn't label them, so nothing here is guessed.
export const magazineIssues: MagazineIssue[] = [
  {
    issueNumber: "Issue 1",
    title: "Welcome to Finland",
    publishDate: "July 2023",
    cover: "/images/magazine/issue-1-jul-2023.jpg",
    href: "https://heyzine.com/flip-book/808d73ac52.html",
  },
  {
    issueNumber: "Issue 2",
    title: "Entrepreneurship: A Pathway for International Professionals in Finland",
    publishDate: "June 2024",
    cover: "/images/magazine/issue-2-jun-2024.jpg",
    href: "https://heyzine.com/flip-book/74ef5f2d3d.html",
  },
  {
    issueNumber: "Issue 3",
    title: "Immigrant Experiences, Cultural Adaptation, and the Nuanced Realities of Inclusion",
    publishDate: "March 2025",
    cover: "/images/magazine/issue-3-mar-2025.jpg",
    href: "https://heyzine.com/flip-book/042c64ca76.html",
  },
];
