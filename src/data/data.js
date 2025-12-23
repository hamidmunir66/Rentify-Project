import {
  faLock,
  faHandHoldingHeart,
  faShield,
  faClock,
  FiGrid,
  FiUsers,
  FiBriefcase,
  FiBox,
  FiCreditCard,
  FiSettings
} from "@fortawesome/free-solid-svg-icons";
import featuredcamera from "../assets/images/featured-camera.jpg";
import featuredlaptop from "../assets/images/featured-laptop.avif";
import heroslide1 from "../assets/images/heroslide1.jpg";
import heroslide2 from "../assets/images/heroslide2.jpg";
import heroslide3 from "../assets/images/heroslide3.jpg";
import heroslide4 from "../assets/images/heroslide4.jpg";
import heroslide5 from "../assets/images/heroslide5.avif";
import {
  FaUserCheck,
  FaLock,
  FaFileContract,
  FaHeadset,
  FaMapMarkerAlt,
  FaStar,
  FaIdCard,
  FaMoneyCheckAlt,
  FaFileSignature,
  FaUserShield,
  FaMapMarkedAlt,
  FaUserPlus,
  FaSearch,
  FaMoneyBillWave,
  FaHandshake,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaStore,
  FaGlobe,
  FaCheckCircle,
  FaCar,
  FaMobileAlt,
  FaTools,
  FaCouch,
  FaFootballBall,
  FaHome,
  FaUserCircle,
} from "react-icons/fa";

const heroSlides = [
  {
    id: 1,
    image: heroslide1,
  },
  {
    id: 2,
    image: heroslide2,
  },
  {
    id: 3,
    image: heroslide3,
  },
  {
    id: 4,
    image: heroslide4,
  },
  {
    id: 5,
    image: heroslide5,
  },
];

export default heroSlides;

export const browseCategories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    icon: FaMobileAlt,
  },
  {
    id: 2,
    name: "Tools",
    slug: "tools",
    icon: FaTools,
  },
  {
    id: 3,
    name: "Vehicles",
    slug: "vehicles",
    icon: FaCar,
  },
  {
    id: 4,
    name: "Furniture",
    slug: "furniture",
    icon: FaCouch,
  },
  {
    id: 5,
    name: "Sports",
    slug: "sports",
    icon: FaFootballBall,
  },
  {
    id: 6,
    name: "Real Estate",
    slug: "real-estate",
    icon: FaHome,
  },
];

//browse catogories

export const categories = [
  { id: 1, name: "Electronics", slug: "electronics" },
  { id: 2, name: "Vehicles", slug: "vehicles" },
  { id: 3, name: "Furniture", slug: "furniture" },
  { id: 4, name: "Home Appliances", slug: "home-appliances" },
  { id: 5, name: "Sports", slug: "sports" },
  { id: 6, name: "Real Estate", slug: "real-estate" },
];

export const featuredListings = [
  {
    id: 1,
    title: "Canon EOS Camera",
    image: featuredcamera,
    priceDay: 1200,
    priceWeek: 7500,
    location: "Mumbai, Maharashtra",
    owner: "Priya Sharma",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Sony Lens Kit",
    image: featuredlaptop,
    priceDay: 900,
    priceWeek: 6000,
    location: "Delhi, India",
    owner: "Arjun Mehra",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Nikon Prime Lens",
    image: "/public/images/featured-camera.jpg",
    priceDay: 700,
    priceWeek: 5200,
    location: "Chandigarh",
    owner: "Kunal Tiwari",
    rating: 4.7,
  },
  {
    id: 4,
    title: "GoPro Hero 10",
    image: "/public/images/featured-laptop.avif",
    priceDay: 500,
    priceWeek: 3500,
    location: "Pune, India",
    owner: "Riya Kapoor",
    rating: 4.9,
  },
];

export const chooseUsData = [
  {
    icon: faLock,
    title: "Secure Transactions",
    desc: "All payments are processed securely with complete buyer protection.",
    iconColor: "text-yellow-600",
  },
  {
    icon: faHandHoldingHeart,
    title: "Trusted Community",
    desc: "Every user is verified for a safer renting experience.",
    iconColor: "text-pink-600",
  },
  {
    icon: faShield,
    title: "Protection Guarantee",
    desc: "We protect both renters and owners with secure policies.",
    iconColor: "text-blue-600",
  },
  {
    icon: faClock,
    title: "Fast & Simple",
    desc: "Rent anything quickly without complicated steps.",
    iconColor: "text-green-600",
  },
];

export const filtercategories = [
  "All Categories",
  "Electronics",
  "Tools",
  "Cameras",
  "Vehicles",
  "Furniture",
  "Party Items",
];

export const cities = [
  "",
  "Mumbai, Maharashtra",
  "Bangalore, Karnataka",
  "Delhi, NCR",
  "Hyderabad, Telangana",
  "Chennai, Tamil Nadu",
];

export const conditions = ["All", "New", "Like New", "Used", "Heavily Used"];

export const priceRanges = [
  { label: "Any", min: 0, max: 999999 },
  { label: "Below 500", min: 0, max: 500 },
  { label: "500 – 2000", min: 500, max: 2000 },
  { label: "2000 – 5000", min: 2000, max: 5000 },
  { label: "Above 5000", min: 5000, max: 999999 },
];

export const categoriesProducts = [
  {
    id: 1,
    name: "Canon EOS 1500D DSLR",
    price: 800,
    city: "Mumbai, Maharashtra",
    rating: 4.7,
    condition: "Like New",
    image: "/images/canon.jpg", // put images in public/images
  },
  {
    id: 2,
    name: "Portable Generator 2kW",
    price: 600,
    city: "Delhi, NCR",
    rating: 4.5,
    condition: "Used",
    image: "/images/generator.jpg",
  },
  {
    id: 3,
    name: "Nikon D5600 DSLR",
    price: 950,
    city: "Bangalore, Karnataka",
    rating: 4.8,
    condition: "New",
    image: "/images/nikon.jpg",
  },
  {
    id: 4,
    name: "DJI Mini Drone",
    price: 1200,
    city: "Hyderabad, Telangana",
    rating: 4.9,
    condition: "Like New",
    image: "",
  },
  {
    id: 5,
    name: "Electric Drill Machine",
    price: 350,
    city: "Chennai, Tamil Nadu",
    rating: 4.3,
    condition: "Used",
    image: "/images/drill.jpg",
  },
  {
    id: 6,
    name: "Canon 50mm Lens",
    price: 450,
    city: "Pune, Maharashtra",
    rating: 4.6,
    condition: "New",
    image: { featuredcamera },
  },
];

export const aboutHighlights = [
  {
    icon: FaHandshake,
    title: "Built on Trust",
    text: "Verified users, transparent listings, and secure rental workflows.",
  },
  {
    icon: FaRocket,
    title: "Fast & Simple",
    text: "List, rent, and connect instantly with a smooth experience.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Platform",
    text: "Admin-controlled moderation and protected user data.",
  },
];

export const roleDetails = [
  {
    icon: FaUsers,
    text: "Users can rent items quickly from trusted merchants.",
  },
  {
    icon: FaStore,
    text: "Merchants earn by renting items or home-based assets.",
  },
  {
    icon: FaShieldAlt,
    text: "Admins ensure safety, quality, and fairness.",
  },
];

export const whyRentify = [
  "Earn without investment",
  "Rent instead of buying",
  "Local & verified listings",
  "Modern UI & smooth experience",
];

export const vision = {
  icon: FaGlobe,
  title: "Our Vision",
  text: "To build the most trusted rental ecosystem where people can earn, rent, and connect locally with confidence.",
};

export const checkIcon = FaCheckCircle;

export const howItWorksSteps = [
  {
    id: 1,
    title: "Create Your Account",
    description:
      "Sign up as a User or Merchant and unlock access to a smart rental ecosystem.",
    icon: FaUserPlus,
  },
  {
    id: 2,
    title: "Browse or List Items",
    description:
      "Users discover rental items while merchants list products to earn effortlessly.",
    icon: FaSearch,
  },
  {
    id: 3,
    title: "Rent & Connect",
    description:
      "Securely connect, verify details, and finalize rentals with confidence.",
    icon: FaHandshake,
  },
  {
    id: 4,
    title: "Earn or Enjoy",
    description:
      "Merchants earn income while users enjoy rentals without heavy costs.",
    icon: FaMoneyBillWave,
  },
];

export const safetyTips = [
  {
    id: 1,
    title: "Verify Identity",
    description:
      "Always verify CNIC or government-issued ID before renting or handing over items.",
    icon: FaIdCard,
  },
  {
    id: 2,
    title: "Use Rentify Payments",
    description:
      "Avoid cash transactions. Always pay and receive payments through Rentify for protection.",
    icon: FaMoneyCheckAlt,
  },
  {
    id: 3,
    title: "Sign Rental Agreement",
    description:
      "Ensure both parties sign a digital rental agreement covering duration, condition, and warranty.",
    icon: FaFileSignature,
  },
  {
    id: 4,
    title: "Meet in Safe Locations",
    description:
      "Meet in public or verified locations recommended by Rentify to avoid risks.",
    icon: FaMapMarkedAlt,
  },
  {
    id: 5,
    title: "Inspect Before Renting",
    description:
      "Check item condition carefully before accepting or handing over any product.",
    icon: FaHandshake,
  },
  {
    id: 6,
    title: "Trust & Protection",
    description:
      "Rentify holds payments securely and assists in case of disputes or replacements.",
    icon: FaUserShield,
  },
];

export const safetyPromise = {
  title: "Rentify Safety Promise",
  text: "Your trust matters. Rentify ensures identity verification, secure payments, digital agreements, and customer support to protect both renters and owners.",
};

export const trustSafetyFeatures = [
  {
    id: 1,
    title: "Verified Users",
    description:
      "Every user and merchant must verify their CNIC and contact details before renting or listing items.",
    icon: FaUserCheck,
  },
  {
    id: 2,
    title: "Secure Payments",
    description:
      "All payments are held securely by Rentify until the rental is completed successfully.",
    icon: FaMoneyBillWave,
  },
  {
    id: 3,
    title: "Digital Agreements",
    description:
      "Rentify provides digital rental agreements that protect both renters and owners.",
    icon: FaFileContract,
  },
  {
    id: 4,
    title: "Data Protection",
    description:
      "Your personal information is encrypted and protected using industry standards.",
    icon: FaLock,
  },
  {
    id: 5,
    title: "Customer Support",
    description:
      "Our support team assists in disputes, replacements, and safety concerns.",
    icon: FaHeadset,
  },
  {
    id: 6,
    title: "Fraud Prevention",
    description:
      "Advanced monitoring systems detect suspicious activity to keep the platform safe.",
    icon: FaShieldAlt,
  },
];

export const trustStatement = {
  title: "Your Trust Is Our Priority",
  text: "Rentify is built on transparency, accountability, and security. Every rental is backed by verification, protection, and support.",
};

export const productDetails = {
  id: 1,
  title: "Canon EOS R5 Professional Camera",
  priceDay: 1200,
  priceWeek: 7500,
  priceMonth: 25000,
  rating: 4.9,
  reviews: 47,
  location: "Bandra West, Mumbai, Maharashtra",
  images: [featuredcamera, featuredlaptop, "/images/camera3.jpg"],
  owner: {
    name: "Priya Sharma",
    city: "Mumbai",
    memberSince: "2023",
    rating: 4.9,
  },
  description: `Professional Canon EOS R5 camera available for rent. 
Perfect for photographers, videographers, and content creators.`,
  specs: [
    "45MP Full-Frame CMOS Sensor",
    "8K RAW Video Recording",
    "Dual Pixel CMOS AF II",
    "In-Body Image Stabilization",
    "3.2” Vari-Angle Touchscreen",
  ],
  safetyNote:
    "Meet in a public place, verify item condition before renting, and always use Rentify's secure payment system.",
};

export const icons = {
  shield: FaShieldAlt,
  location: FaMapMarkerAlt,
  star: FaStar,
};
export const chats = [
  {
    id: 1,
    user: "Ali Raza",
    lastMessage: "Is the camera available tomorrow?",
    avatar: FaUserCircle,
    messages: [
      { from: "them", text: "Hi, is the camera available?" },
      { from: "me", text: "Yes, it is available." },
      { from: "them", text: "Is the camera available tomorrow?" },
    ],
  },
  {
    id: 2,
    user: "Hamza Khan",
    lastMessage: "Price negotiable?",
    avatar: FaUserCircle,
    messages: [
      { from: "them", text: "Hello!" },
      { from: "me", text: "Hi, how can I help?" },
      { from: "them", text: "Price negotiable?" },
    ],
  },
];

export const merchantListings = [
  {
    id: 1,
    title: "Canon DSLR Camera",
    image: "/images/camera.jpg",
    priceDay: 25,
    priceWeek: 150,
    location: "Lahore",
    status: "Active",
  },
  {
    id: 2,
    title: "Honda Generator",
    image: "/images/generator.jpg",
    priceDay: 40,
    priceWeek: 250,
    location: "Islamabad",
    status: "Rented",
  },
];
export const statusColor = {
  Active: "bg-green-100 text-green-700",
  Rented: "bg-yellow-100 text-yellow-700",
  Pending: "bg-blue-100 text-blue-700",
};

export const merchantStats = {
  totalListings: 12,
  activeListings: 5,
  rentedListings: 4,
  availableListings: 3,
};

export const merchantEarnings = {
  today: 2100,
  week: 9800,
  month: 32400,
};

export const merchantNotifications = [
  {
    id: 1,
    text: "Canon DSLR rented for 3 days",
  },
  {
    id: 2,
    text: "Payment received ₹2,400",
  },
  {
    id: 3,
    text: "Generator returned successfully",
  },
];

export const merchantReviews = [
  {
    id: 1,
    product: "Canon DSLR",
    rating: 5,
    comment: "Item was clean and well maintained",
  },
  {
    id: 2,
    product: "DJI Drone",
    rating: 4,
    comment: "Good experience, smooth rental",
  },
];

export const rentalRequests = [
  {
    id: 1,
    user: "Ali Khan",
    product: "Canon DSLR Camera",
    days: 3,
  },
  {
    id: 2,
    user: "Ahmed Raza",
    product: "Honda Generator",
    days: 5,
  },
  {
    id: 3,
    user: "Sara Malik",
    product: "Projector HD",
    days: 2,
  },
];
export const users = [
  {
    name: "Ali Khan",
    email: "ali@gmail.com",
    status: "Active",
    joined: "2024-01-12"
  },
  {
    name: "Sara Ahmed",
    email: "sara@gmail.com",
    status: "Blocked",
    joined: "2024-02-05"
  }
]
export const stats = [
    { label: "Total Users", value: "2,431" },
    { label: "Merchants", value: "312" },
    { label: "Active Listings", value: "1,284" },
    { label: "Revenue", value: "₹ 1.2M" },
  ]
export const menu = [
  { name: "Dashboard", icon: FiGrid, path: "/admin" },
  { name: "Users", icon: FiUsers, path: "/admin/users" },
  { name: "Merchants", icon: FiBriefcase, path: "/admin/merchants" },
  { name: "Listings", icon: FiBox, path: "/admin/listings" },
  { name: "Transactions", icon: FiCreditCard, path: "/admin/transactions" },
  { name: "Settings", icon: FiSettings, path: "/admin/settings" }
]