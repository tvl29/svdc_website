// ---------------------------------------------------------------------------
// SVDC — single source of truth for practice info, copy, and NAP data.
// Keep this the ONLY place these values live (see past-project note: a
// duplicated content file — root vs. src/data — caused a hard-to-find bug).
// ---------------------------------------------------------------------------

export const practice = {
  name: "Salinas Valley Dental Care",
  shortName: "SVDC",
  // CONFIRM PHONE: postcard shows 831-272-7921; older site shows two other
  // numbers (831-784-8771 and 831-424-1535). Do not treat this as final.
  phoneDisplay: "831-272-7921",
  phoneHref: "tel:+18312727921",
  bookingUrl: "https://www.flexbook.me/svdc/1",
  since: 2014,
  reviewCount: "240+",
};

export const locations = {
  johnStreet: {
    label: "John Street",
    role: "General & Family Dentistry",
    status: "Opening November 2026",
    // CONFIRM ZIP
    address: "110 John Street, Salinas, CA [ZIP]",
    mapQuery: "110 John Street, Salinas, CA",
    isNew: true,
  },
  mainStreet: {
    label: "Main Street",
    role: "Specialty & Advanced Care",
    status: "Open now",
    address: "1211 S. Main Street, Salinas, CA 93901",
    mapQuery: "1211 S. Main Street, Salinas, CA 93901",
    isNew: false,
  },
};

export const dentists = [
  "Dr. Irving Chao",
  "Dr. Ngoc Bui",
  "Dr. Ashley Goldman",
  "Dr. Michelle Maciel",
];

export const services = [
  {
    title: "Preventive & Family",
    description:
      "Cleanings, exams, and digital X-rays for every age — the everyday care that keeps small issues from becoming big ones.",
  },
  {
    title: "Cosmetic",
    description:
      "Veneers, whitening, and Invisalign, planned around the smile you actually want.",
  },
  {
    title: "Restorative",
    description:
      "Crowns, bridges, implants, and fillings, using same-day digital scanning where it helps you avoid a second visit.",
  },
  {
    title: "Emergency Care",
    description:
      "Same-day appointments when something hurts now. Call first — we'll get you in.",
  },
];

export const whatThisMeans = [
  {
    title: "A larger office",
    description:
      "More treatment rooms on John Street, designed for comfort from the moment you walk in.",
  },
  {
    title: "Sooner appointments",
    description:
      "More appointment availability, including late-evening and Saturday hours.",
  },
  {
    title: "Specialty care stays put",
    description:
      "Implants, wisdom teeth, root canals, and orthodontics continue at Main Street — enhanced, not going anywhere.",
  },
];

export const movingToJohnStreet = [
  "Exams & Cleanings",
  "Fillings",
  "Crowns",
  "Cosmetic Dentistry",
  "Emergency Care",
  "Restorative Care",
];

export const sameAcrossBoth = [
  "The same trusted doctors",
  "The same welcoming team",
  "Shared patient records",
  "Seven-day care",
  "In-network insurance accepted",
];

// Placeholder review — replace with a real, permissioned Google review before launch.
export const featuredReview = {
  quote:
    "[PLACEHOLDER — replace with a real, permissioned Google review before launch. Do not fabricate patient testimonials.]",
  author: "[Patient name — with consent]",
  rating: 5,
};
