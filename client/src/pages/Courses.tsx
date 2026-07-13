import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowRight, Lightbulb, Rocket, Cpu, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const courses = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Young Innovators Course",
    tagline: "Where curiosity meets creativity",
    color: "cyan",
    description:
      "A fun, beginner-friendly program sparking curiosity in science, technology, and creative problem-solving for young learners. Students explore the basics of engineering and design through exciting hands-on activities.",
    highlights: ["Creative problem solving", "Basic science & tech concepts", "Project-based activities", "Builds curiosity & confidence"],
  },
  {
    icon: Rocket,
    number: "02",
    title: "Robotics Base Course",
    tagline: "Your first step into robotics",
    color: "blue",
    description:
      "Foundational robotics training covering mechanics, sensors, and basic programming to build and control real robots. The perfect starting point for students stepping into the world of robotics.",
    highlights: ["Robot assembly & mechanics", "Sensor integration", "Basic programming logic", "Real robot building"],
  },
  {
    icon: Cpu,
    number: "03",
    title: "Robotics Circuit Course",
    tagline: "Bridge hardware and software",
    color: "cyan",
    description:
      "Hands-on circuit design and electronics integration, bridging hardware and software in real-world robotics projects. Students learn to design, test, and troubleshoot electronic circuits.",
    highlights: ["Circuit design & PCB basics", "Electronics integration", "Hardware-software bridging", "Real-world robotics projects"],
  },
  {
    icon: Star,
    number: "04",
    title: "Robotics Summer Camps",
    tagline: "Immersive. Competitive. Unforgettable.",
    color: "yellow",
    description:
      "Immersive multi-day camps packed with team challenges, robot battles, and project showcases in a high-energy environment. A perfect blend of learning, competition, and fun.",
    highlights: ["Team-based challenges", "Robot battle competitions", "Project showcases", "High-energy immersive experience"],
  },
  {
    icon: Trophy,
    number: "05",
    title: "Robotics Exhibitions",
    tagline: "Compete. Present. Shine.",
    color: "yellow",
    description:
      "Competitive showcases where students present their builds, compete in challenges, and earn recognition on a national stage. A platform for young innovators to shine.",
    highlights: ["National-level competitions", "Student project presentations", "Recognition & awards", "Industry exposure"],
  },
];

export default function Courses() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

        {/* Hero */}
        <section className="aurora aurora-dark relative overflow-hidden py-24 md:py-28 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
          <Reveal className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight">Our Courses</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From first sparks of curiosity to competitive robotics — a program for every young mind.
            </p>
          </Reveal>
        </section>

        {/* Course Cards */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">

            {/* top 3 */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {courses.slice(0, 3).map((course, i) => (
                <CourseCard key={course.title} course={course} i={i} onBook={() => setContactModalOpen(true)} />
              ))}
            </div>

            {/* bottom 2 centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {courses.slice(3).map((course, i) => (
                <CourseCard key={course.title} course={course} i={i + 3} onBook={() => setContactModalOpen(true)} />
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        formType="book_free_class"
      />
    </div>
  );
}

function CourseCard({ course, i, onBook }: { course: typeof courses[0]; i: number; onBook: () => void }) {
  const Icon = course.icon;
  return (
    <Reveal delay={i * 0.07}>
      <div className="card-premium border-glow group bg-white border border-slate-100/80 rounded-2xl p-8 h-full flex flex-col shadow-[0_2px_12px_rgba(10,61,145,0.06)] relative overflow-hidden">

        {/* top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 ${
          course.color === "yellow"
            ? "bg-gradient-to-r from-[#FFDE59]/50 via-[#FFDE59] to-[#FFDE59]/50"
            : "bg-gradient-to-r from-[#5CE1E6]/50 via-[#5CE1E6] to-[#5CE1E6]/50"
        }`} />

        {/* header row */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            course.color === "yellow"
              ? "bg-gradient-to-br from-[#FFDE59]/40 to-[#FFDE59]/15"
              : course.color === "blue"
              ? "bg-gradient-to-br from-[#0A3D91]/10 to-[#5CE1E6]/15"
              : "bg-gradient-to-br from-[#5CE1E6]/25 to-[#0A3D91]/10"
          }`}>
            <Icon className={`w-6 h-6 ${course.color === "yellow" ? "text-[#8a6d00]" : "text-[#0A3D91]"}`} />
          </div>
          <span className="text-3xl font-black text-slate-100 select-none">{course.number}</span>
        </div>

        {/* title & tagline */}
        <h2 className="text-lg font-extrabold text-slate-900 mb-1 group-hover:text-[#0A3D91] transition-colors leading-snug">
          {course.title}
        </h2>
        <p className={`text-xs font-semibold mb-4 ${course.color === "yellow" ? "text-[#8a6d00]" : "text-[#0A3D91]"}`}>
          {course.tagline}
        </p>

        {/* description */}
        <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">{course.description}</p>

        {/* highlights */}
        <ul className="space-y-2 mb-7">
          {course.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5 text-sm text-slate-600">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${course.color === "yellow" ? "bg-[#FFDE59]" : "bg-[#5CE1E6]"}`} />
              {h}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          onClick={onBook}
          className="btn-premium bg-[#0A3D91] hover:bg-[#0A3D91]/90 text-white font-semibold px-6 h-10 rounded-full text-sm w-fit"
        >
          Book Free Class <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
        </Button>

      </div>
    </Reveal>
  );
}
