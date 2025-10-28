import React from "react";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import {
  Users,
  CalendarDays,
  Lightbulb,
  ShoppingBag,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StudyGroups from "./StudyGroups";




function Dashboard() {
  const features = [
    {
      icon: <Users className="text-[#ff5e5b] w-6 h-6" />,
      title: "Study Groups",
      description: "Join or create study groups to collaborate with peers.",
    },
    {
      icon: <CalendarDays className="text-[#ff5e5b] w-6 h-6" />,
      title: "Campus Events",
      description:
        "Discover and register for workshops, fests, and hackathons.",
    },
    {
      icon: <Lightbulb className="text-[#ff5e5b] w-6 h-6" />,
      title: "Projects",
      description:
        "Find team members and contribute to exciting student projects.",
    },
    {
      icon: <ShoppingBag className="text-[#ff5e5b] w-6 h-6" />,
      title: "Marketplace",
      description:
        "Buy, sell, or exchange study materials and gadgets securely.",
    },
    {
      icon: <BookOpen className="text-[#ff5e5b] w-6 h-6" />,
      title: "Resources",
      description:
        "Access curated notes, tutorials, and guides from your campus.",
    },
    {
      icon: <MessageSquare className="text-[#ff5e5b] w-6 h-6" />,
      title: "Discussions",
      description:
        "Ask questions, share ideas, and connect with your community.",
    },
  ];

  const navigate = useNavigate();

  const goToStudyGroups = () =>{

    navigate("/StudyGroups")
  }

  return (
    <div className="bg-[#e8d8f3] min-h-screen">
      <Header />

      {/* Feature Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-[Poppins] font-semibold text-[#ff5e5b] mb-8 text-center">
          Explore Campus Connect Features
        </h2>

        <div onClick={goToStudyGroups} className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
