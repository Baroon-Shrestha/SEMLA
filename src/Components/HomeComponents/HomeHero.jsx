import React, { useState } from "react";
import {
  GraduationCap,
  FileText,
  Plane,
  BookOpen,
  Home,
  Compass,
} from "lucide-react";
import HeroSection from "./HeroSection";
import HomeIntro2 from "./HomeIntro2";
import HomeStudy from "./HomeStudy";

export default function HomeHero() {
  const [selectedTag, setSelectedTag] = useState(null);

  const tagParagraphs = {
    "Study in Japan Guide":
      "Discover the academic landscape of Japan, known for its technological advancement and research excellence.",
    "Colleges in Japan":
      "Explore top-ranked Japanese colleges offering diverse programs in science, arts, and technology.",
    "Unis in Japan":
      "Japanese universities blend tradition with innovation, offering globally recognized degrees.",
    "Eligibility Criteria":
      "Eligibility varies by course and university; typically includes academic transcripts and language proficiency.",
    "Study in Korea Guide":
      "Korea offers dynamic education in globally ranked universities, fostering cultural and academic growth.",
    "Colleges in Korea":
      "Korean colleges are known for their hands-on learning, innovation, and international exchange.",
    "Unis in Korea":
      "Top universities in Korea include Seoul National, KAIST, and Yonsei, with global programs.",
    "Study in Finland Guide":
      "Finland emphasizes student well-being and independent thinking in its highly respected education system.",
    "Study in Cyprus Guide":
      "Cyprus offers affordable yet globally recognized degrees, especially attractive for EU and Asian students.",
  };

  const destinations = [
    {
      title: "Study in Japan",
      description:
        "Explore high-quality education in a culture-rich environment with cutting-edge technology and innovative programs.",
      image: "/images/japan.jpg",
      tags: [
        "Study in Japan Guide",
        "Colleges in Japan",
        "Unis in Japan",
        "Eligibility Criteria",
      ],
    },
    {
      title: "Study in Korea",
      description:
        "World-class universities and vibrant student life await you in South Korea, a hub for innovation and culture.",
      image: "/images/Korea.jpg",
      tags: [
        "Study in Korea Guide",
        "Colleges in Korea",
        "Unis in Korea",
        "Eligibility Criteria",
      ],
    },
    {
      title: "Study in Finland",
      description:
        "Benefit from Finland’s progressive education system, known for research excellence and high living standards.",
      image: "/images/finland.jpg",
      tags: [
        "Study in Finland Guide",
        "Colleges in Finland",
        "Unis in Finland",
        "Eligibility Criteria",
      ],
    },
    {
      title: "Study in Cyprus",
      description:
        "Affordable education in the heart of the Mediterranean, with diverse cultural exposure and recognized degrees.",
      image: "/images/cyprus.jpg",
      tags: [
        "Study in Cyprus Guide",
        "Colleges in Cyprus",
        "Unis in Cyprus",
        "Eligibility Criteria",
      ],
    },
  ];

  const services = [
    {
      title: "University Guidance",
      description:
        "Personalized support in selecting universities and programs aligned with your goals and background.",
      icon: GraduationCap,
      bg: "bg-orange-50",
      border: "border-orange-200",
    },
    {
      title: "Application Help",
      description:
        "Full assistance with documentation, application preparation, and maximizing acceptance chances.",
      icon: FileText,
      bg: "bg-yellow-50",
      border: "border-yellow-200",
    },
    {
      title: "Visa Assistance",
      description:
        "Step-by-step support for your student visa process, including interview preparation and paperwork.",
      icon: Plane,
      bg: "bg-green-50",
      border: "border-green-200",
    },
    {
      title: "Pre-Departure Support",
      description:
        "Orientation on travel, housing, and cultural adaptation to make your transition smooth.",
      icon: Compass,
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      title: "Scholarship Guidance",
      description:
        "Expert advice on scholarships and financial aid to help you fund your international education.",
      icon: BookOpen,
      bg: "bg-indigo-50",
      border: "border-indigo-200",
    },
    {
      title: "Settlement Support",
      description:
        "Help with accommodation, banking, and local integration to settle comfortably abroad.",
      icon: Home,
      bg: "bg-rose-50",
      border: "border-rose-200",
    },
  ];

  return (
    <div>
      <HeroSection />
      <HomeIntro2 />
      <HomeStudy />
    </div>
  );
}
