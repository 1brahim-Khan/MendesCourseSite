export type ClassStatus = "open" | "waitlist" | "closed";

export type ClassId = "marriage" | "mindfulness";

export type ClassExperience = {
  id: ClassId;
  status: ClassStatus;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  time: string;
  format: string;
  instructor: string;
  price: number;
  capacity: number;
  image: string;
  imageAlt: string;
  themes: string[];
  receives: string[];
};

/**
 * ADMIN EDITING GUIDE
 * This is the only file you need to edit for routine site updates.
 *
 * - Replace every UPDATE_ME value before launch.
 * - Put public images in /public/assets and use paths such as /assets/photo.jpg.
 * - Set a class status to "open", "waitlist", or "closed".
 * - Never put Zoom links, registrant data, API keys, or private notes here.
 *
 * - The instructor bio and profile link below mirror Marhama Village's public
 *   Team page; update them if that source page changes.
 */
export const siteConfig = {
  brand: {
    name: "Marhama Institute",
    parentOrg: "Marhama Village",
    tagline:
      "Online formation experiences rooted in Qur’an, Sunnah, and the Islamic tradition of human formation.",
    legalText:
      "Marhama Institute is an educational initiative of Marhama Village, a 501(c)(3) nonprofit organization.",
    contactEmail: "kfranklin@greenmedicalfoundation.org",
  },
  hero: {
    eyebrow: "Marhama Institute Presents",
    title: "Two Online Formation Experiences with Shaykh Adeyinka Mendes",
    description:
      "Join Shaykh Adeyinka Mendes for two focused online experiences rooted in the Qur’an, Sunnah, and the Islamic tradition of human formation. Attend either class individually or register for both.",
  },
  registration: {
    // Add the main Google Form URL here. Optional prefilled links below override it.
    generalGoogleFormUrl: "https://forms.gle/ra96eccdxDQ7Qs5V7",
    marriageGoogleFormUrl: "",
    mindfulnessGoogleFormUrl: "",
    bothClassesGoogleFormUrl: "",
    note: "The registration form opens in Google Forms.",
  },
  instructor: {
    name: "Shaykh Adeyinka Mendes",
    bio: "Adeyinka Muhammad Mendes is the Founder & Resident Scholar of Marhama Village, a home for wellness and sacred living in Houston and beyond. His teaching brings together Islamic spiritual formation, prophetic character, and the work of building compassionate community.",
    sourceUrl: "https://www.marhamavillage.org/about-us",
  },
  classes: [
    {
      id: "marriage",
      status: "open",
      title: "The Prophetic Art of Marriage",
      subtitle: "Lessons from the Hadith of Umm Zarʿ",
      description:
        "A live two-hour experience exploring what one of the Islamic tradition’s most remarkable conversations teaches about marriage, emotional intelligence, communication, gratitude, memory, character, and prophetic listening.",
      date: "Saturday, July 25, 2026",
      time: "To be confirmed, Central Time",
      format: "Live online",
      instructor: "Shaykh Adeyinka Mendes",
      price: 100,
      capacity: 30,
      image: "/assets/marriage-class-flyer.jpg",
      imageAlt: "Flyer for The Prophetic Art of Marriage",
      themes: [
        "Emotional safety in marriage",
        "Listening without interrupting or correcting",
        "Communication and conflict resolution",
        "Gratitude and relational memory",
        "Principles of lasting love",
        "Prophetic character in intimate relationships",
      ],
      receives: [
        "Live two-hour class",
        "Replay recording",
        "Reflection handout",
        "Recommended reading",
        "Invitation to the September Marhama Formation Circle",
      ],
    },
    {
      id: "mindfulness",
      status: "open",
      title: "Returning to the True You",
      subtitle: "An Introduction to Muslim Mindfulness",
      description:
        "A live two-hour formation experience introducing murāqabah: the Islamic practice of cultivating awareness of Allah, attentiveness of the heart, and greater presence in everyday life.",
      date: "Sunday, July 26, 2026",
      time: "9:00–11:00 a.m. Central Time",
      format: "Live online",
      instructor: "Shaykh Adeyinka Mendes",
      price: 100,
      capacity: 30,
      image: "/assets/mindfulness-class-flyer.jpg",
      imageAlt: "Flyer for Returning to the True You",
      themes: [
        "Awareness of Allah",
        "Spiritual attentiveness",
        "Presence in prayer and daily life",
        "Intentional living",
        "Formation of the heart",
        "Islamic mindfulness beyond modern wellness trends",
      ],
      receives: [
        "Live two-hour class",
        "Replay recording",
        "Reflection handout",
        "Recommended reading",
        "Invitation to the September Marhama Formation Circle",
      ],
    },
  ] satisfies ClassExperience[],
};
