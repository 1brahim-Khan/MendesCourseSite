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
 * IMPORTANT PAYMENT ATTRIBUTION:
 * If these classes are separate personal offerings by Shaykh Mendes, update
 * brand.legalText and the Zelle recipient so the page does not imply nonprofit
 * payment collection.
 */
export const siteConfig = {
  brand: {
    name: "Marhama Institute",
    parentOrg: "Marhama Village",
    tagline:
      "Online formation experiences rooted in Qur’an, Sunnah, and the Islamic tradition of human formation.",
    legalText:
      "Marhama Institute is an educational initiative of Marhama Village, a 501(c)(3) nonprofit organization.",
    contactEmail: "UPDATE_ME@example.com",
  },
  hero: {
    eyebrow: "Marhama Institute Presents",
    title: "Two Online Formation Experiences with Shaykh Adeyinka Mendes",
    description:
      "Join Shaykh Adeyinka Mendes for two focused online experiences rooted in the Qur’an, Sunnah, and the Islamic tradition of human formation. Attend either class individually or register for both.",
    image: "/assets/marriage-class-flyer.jpg",
    imageAlt: "The Prophetic Art of Marriage flyer featuring Shaykh Adeyinka Mendes",
  },
  registration: {
    // Add the main Google Form URL here. Optional prefilled links below override it.
    generalGoogleFormUrl: "",
    marriageGoogleFormUrl: "",
    mindfulnessGoogleFormUrl: "",
    bothClassesGoogleFormUrl: "",
    futureAnnouncementsUrl: "",
    note: "The registration form opens in Google Forms.",
  },
  payment: {
    zelleRecipient: "UPDATE_ME",
    zelleRecipientName: "UPDATE_ME",
    amountPerClass: 100,
    memoFormat: "MENDEZ-[LAST NAME]-[CLASS]",
    qrCodeImage: "",
    qrCodeAlt: "Zelle payment QR code",
  },
  instructor: {
    name: "Shaykh Adeyinka Mendes",
    bio: "Shaykh Adeyinka Mendes is a teacher, spiritual guide, community leader, and founder of Marhama Village. His work centers on Islamic spiritual formation, prophetic character, community healing, and helping students cultivate lives rooted in remembrance, mercy, and service.",
    portrait: "/assets/marriage-class-flyer.jpg",
    portraitAlt: "Class flyer featuring Shaykh Adeyinka Mendes",
    videoUrl: "",
    socialLinks: [] as { label: string; url: string }[],
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
  // Add image, video, or link items here. This section stays hidden while empty.
  media: [
    {
      title: "The Prophetic Art of Marriage class flyer",
      type: "image",
      url: "/assets/marriage-class-flyer.jpg",
      classId: "marriage",
      visible: true,
      sortOrder: 1,
    },
    {
      title: "Returning to the True You class flyer",
      type: "image",
      url: "/assets/mindfulness-class-flyer.jpg",
      classId: "mindfulness",
      visible: true,
      sortOrder: 2,
    },
  ] as {
    title: string;
    type: "image" | "video" | "link";
    url: string;
    classId: ClassId | "general";
    visible: boolean;
    sortOrder: number;
  }[],
};
