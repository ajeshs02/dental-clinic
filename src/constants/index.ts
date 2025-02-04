import {
  FaUserMd,
  FaAmbulance,
  FaMicroscope,
  FaProcedures,
  FaStethoscope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const navLinks = [
  { label: "Home", link: "#" },
  { label: "About", link: "#about" },
  { label: "Service", link: "#services" },
  { label: "Doctors", link: "#doctors" },
  { label: "Testimonials", link: "#testimonials" },
];

export const aboutIcons = [
  { icon: FaUserMd, title: "Qualified", subtitle: "Doctors" },
  { icon: FaProcedures, title: "Emergency", subtitle: "Services" },
  { icon: FaMicroscope, title: "Accurate", subtitle: "Testing" },
  { icon: FaAmbulance, title: "Free", subtitle: "Ambulance" },
];

export const services = [
  {
    id: 1,
    icon: FaUserMd,
    title: "Emergency Care",
    description:
      "Kasd dolor no lorem nonumy sit labore tempor at justo rebun rebum stet, justo elitr dolor amet sit.",
  },
  {
    id: 2,
    icon: FaProcedures,
    title: "Operation & Surgery",
    description:
      "Kasd dolor no lorem nonumy sit labore tempor at justo rebun rebum stet, justo elitr dolor amet sit.",
  },
  {
    id: 3,
    icon: FaStethoscope,
    title: "Outdoor Checkup",
    description:
      "Kasd dolor no lorem nonumy sit labore tempor at justo rebun rebum stet, justo elitr dolor amet sit.",
  },
  {
    id: 4,
    icon: FaUserMd,
    title: "Emergency Care",
    description:
      "Kasd dolor no lorem nonumy sit labore tempor at justo rebun rebum stet, justo elitr dolor amet sit.",
  },
  {
    id: 5,
    icon: FaProcedures,
    title: "Operation & Surgery",
    description:
      "Kasd dolor no lorem nonumy sit labore tempor at justo rebun rebum stet, justo elitr dolor amet sit.",
  },
  {
    id: 6,
    icon: FaStethoscope,
    title: "Outdoor Checkup",
    description:
      "Kasd dolor no lorem nonumy sit labore tempor at justo rebun rebum stet, justo elitr dolor amet sit.",
  },
];

export const testimonials = [
  {
    name: "John Doe",
    profession: "Software Engineer",
    image: "/doctor-2.png", // Replace with actual image URL
    text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
  },
  {
    name: "Sarah Johnson",
    profession: "Marketing Manager",
    image: "/doctor-2.png",
    text: "At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
  },
  {
    name: "Michael Brown",
    profession: "UX Designer",
    image: "/doctor-2.png",
    text: "Erat dolor rebumm sit ipsum. A great experience working with this team!",
  },
];

export const doctors = [
  {
    name: "Dr. John Doe",
    specialty: "Cardiology Specialist",
    image: "/doctor-2.png", // Replace with real image URLs
  },
  {
    name: "Dr. Emily Smith",
    specialty: "Neurologist",
    image: "doctor-3.png",
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Orthopedic Surgeon",
    image: "doctor-4.png",
  },
  {
    name: "Dr. Olivia Wilson",
    specialty: "Pediatrician",
    image: "doctor-2.png",
  },
  {
    name: "Dr. James Anderson",
    specialty: "Dermatologist",
    image: "doctor-3.png",
  },
];

// Footer Social Icons (Stored as References)
export const socialIcons = [
  { icon: FaTwitter, name: "Twitter", link: "https://twitter.com" },
  { icon: FaFacebookF, name: "Facebook", link: "https://facebook.com" },
  { icon: FaLinkedinIn, name: "LinkedIn", link: "https://linkedin.com" },
  { icon: FaInstagram, name: "Instagram", link: "https://instagram.com" },
];

// Footer Links
export const footerLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Team", href: "/team" },
  { title: "Get in Touch", href: "/contact" },
];
