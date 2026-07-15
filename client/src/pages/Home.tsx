import { useEffect, useState } from "react";
import {
  ArrowRight,
  Zap,
  Code,
  Cpu,
  Rocket,
  Wifi,
  Cog,
  Brain,
  Lightbulb,
  Trophy,
  Bot,
  GraduationCap,
  Camera,
  Sparkles,
  Users,
  School,
  Briefcase,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/ContactFormModal";
import Reveal from "@/components/Reveal";

const offerings = [
  { icon: Lightbulb, title: "Young Innovators Course", description: "A fun, beginner-friendly program sparking curiosity in science, technology, and creative problem-solving for young learners." },
  { icon: Rocket, title: "Robotics Base Course", description: "Foundational robotics training covering mechanics, sensors, and basic programming to build and control real robots." },
  { icon: Cpu, title: "Robotics Circuit Course", description: "Hands-on circuit design and electronics integration, bridging hardware and software in real-world robotics projects." },
  { icon: Star, title: "Robotics Summer Camps", description: "Immersive multi-day camps packed with team challenges, robot battles, and project showcases in a high-energy environment." },
  { icon: Trophy, title: "Robotics Exhibitions", description: "Competitive showcases where students present their builds, compete in challenges, and earn recognition on a national stage." },
];

const courses = [
  {
    title: "Robotics Base Course",
    description: "A beginner-friendly course introducing robotics principles, basic programming, and hands-on building experience.",
    tag: "Beginner",
  },
  {
    title: "Robo Circuits Course",
    description: "Dive deeper into circuit design and electronics integration with real-world robotics applications.",
    tag: "Intermediate",
  },
  {
    title: "Robotics Summer Camps",
    description: "Intensive programs offering immersive learning through projects, teamwork, and competitions.",
    tag: "All Levels",
  },
];

const galleryImages = [
  { id: 1, src: "/1.jpg", title: "Workshop" },
  { id: 2, src: "/C.jpg", title: "Classroom Learning" },
  { id: 3, src: "/E.jpg", title: "Student Success" },
];

const coreOfferings = [
  { icon: Rocket, title: "Robotics", description: "Build, program, and control real robots using sensors, actuators, and microcontrollers in hands-on sessions." },
  { icon: Code, title: "Coding", description: "Master programming from fundamentals to advanced logic, algorithms, and software development concepts." },
  { icon: Cog, title: "Mechatronics", description: "Combine mechanical engineering, electronics, and control systems to design intelligent machines." },
  { icon: Wifi, title: "Internet of Things", description: "Connect devices, collect data, and build smart systems using IoT platforms and real-world sensors." },
  { icon: Zap, title: "Advanced Electronics", description: "Deep dive into circuit theory, PCB design, and complex electronic systems used in modern technology." },
  { icon: Brain, title: "AI & Machine Learning", description: "Explore artificial intelligence, neural networks, and ML fundamentals applied to real-world problems." },
];

const partnerLogos = ["/arduino-logo.png", "/prr.png", "/microbit.png",
  "/Scratch.png", "/blix.jpg", "/lego.png",
  "/arduino-logo.png", "/prr.png", "/microbit.png",
  "/Scratch.png", "/blix.jpg", "/lego.png",
];

export default function Home() {
  const [counters, setCounters] = useState({ mentors: 0, schools: 0, internships: 0, exhibitions: 0 });
  const heroImages = ["/B.jpg", "/H.jpg", "/G.jpg", "/I.jpg", "/J.jpg"];
  const [currentImage, setCurrentImage] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [expoModalOpen, setExpoModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        mentors: prev.mentors < 30 ? prev.mentors + 1 : 30,
        schools: prev.schools < 18 ? prev.schools + 1 : 18,
        internships: prev.internships < 50 ? prev.internships + 1 : 50,
        exhibitions: prev.exhibitions < 25 ? prev.exhibitions + 1 : 25,
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section className="aurora relative overflow-hidden pt-14 pb-16 md:pt-28 md:pb-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT */}
            <div>
              <Reveal delay={0.05}>
                <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-extrabold mb-6 leading-[1.06] tracking-tight">
                  <span className="text-slate-900">Bridging </span>
                  <span className="bg-gradient-to-r from-[#E0C24A] via-[#2FAFC4] to-[#E0C24A] bg-clip-text text-transparent animate-gradient inline-block">
                    Imagination
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#E0C24A] via-[#2FAFC4] to-[#E0C24A] bg-clip-text text-transparent animate-gradient inline-block">
                    &amp; Innovation
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-lg md:text-xl text-slate-500 mb-9 leading-relaxed max-w-lg">
                  At <span className="font-semibold text-slate-700">Stemora</span>, we transform the way young minds experience technology — through immersive robotics, hands-on engineering, and real-world problem solving that builds the innovators of tomorrow.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-3 mb-10">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="btn-premium bg-[#0A3D91] hover:bg-[#0A3D91]/90 text-white font-semibold px-8 h-12 rounded-full text-base"
                  >
                    Get In Touch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById("cour")?.scrollIntoView({ behavior: "smooth" })}
                    className="rounded-full px-8 h-12 font-semibold border-slate-200 text-slate-700 hover:border-[#5CE1E6] hover:text-[#0A3D91] transition-colors"
                  >
                    Explore Courses
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-lg">
                  <Counter label="Mentors" value={counters.mentors} icon={Users} color="yellow" />
                  <Counter label="Schools" value={counters.schools} icon={School} color="blue" />
                  <Counter label="Internships" value={counters.internships} icon={Briefcase} color="blue" />
                  <Counter label="Exhibitions" value={counters.exhibitions} icon={Star} color="yellow" />
                </div>
              </Reveal>
            </div>

            {/* RIGHT: IMAGE */}
            <div>
              <Reveal y={32}>
                <div className="relative">
                  <div className="hero-panel media-tile relative rounded-2xl overflow-hidden border border-slate-200/70 bg-white aspect-[4/3] w-full">
                    <img
                      src={heroImages[currentImage]}
                      alt="STEM Robotics Learning"
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D91]/25 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="flex items-center gap-2 justify-center mt-5">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Show slide ${i + 1}`}
                        onClick={() => setCurrentImage(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentImage ? "w-8 bg-[#5CE1E6]" : "w-1.5 bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CORE OFFERINGS ===== */}
      <section id="cour" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <Reveal className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight max-w-2xl">
              Our Programs
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl text-base leading-relaxed">
              From first sparks of curiosity to competitive robotics — we have a program for every young mind.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.06}>
                  <div className="card-premium border-glow group bg-white border border-slate-100/80 rounded-2xl p-8 h-full flex flex-col gap-4 shadow-[0_2px_12px_rgba(10,61,145,0.06)]">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#5CE1E6]/20 to-[#0A3D91]/10 shrink-0">
                      <Icon className="w-5 h-5 text-[#0A3D91]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[0.95rem] font-bold text-slate-900 mb-2 group-hover:text-[#0A3D91] transition-colors leading-snug">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                    <div className="pt-1 border-t border-slate-100">
                      <a
                        href="/courses"
                        className="text-xs font-semibold text-[#0A3D91] hover:text-[#5CE1E6] transition-colors flex items-center gap-1"
                      >
                        Learn more <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CORE SUBJECTS ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A3D91]/5 via-[#5CE1E6]/8 to-[#FFDE59]/8 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <Reveal className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight max-w-2xl">
              Our Core Offerings
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl text-base leading-relaxed">
              Deep-dive disciplines that power every program we offer.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreOfferings.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.06}>
                  <div className="card-premium border-glow group bg-white border border-slate-100/80 rounded-2xl p-8 h-full flex flex-col gap-4 shadow-[0_2px_12px_rgba(10,61,145,0.06)]">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FFDE59]/30 to-[#FFDE59]/10 shrink-0">
                      <Icon className="w-5 h-5 text-[#0A3D91]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[0.95rem] font-bold text-slate-900 mb-2 group-hover:text-[#0A3D91] transition-colors leading-snug">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INTERNSHIP ===== */}
      <section id="internships" className="aurora py-16 md:py-24 bg-gradient-to-br from-[#5CE1E6]/[0.07] via-white to-[#FFDE59]/[0.07]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                <GraduationCap className="inline w-9 h-9 text-[#0A3D91] mr-3 -mt-1" />
                Internship Opportunities
              </h2>
              <p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
                Gain real-world experience through mentor-led guidance, hands-on projects,
                and exposure to industry-level workflows.
              </p>
              <Button
                onClick={() => window.location.href = "/internships"}
                className="btn-premium bg-[#0A3D91] hover:bg-[#0A3D91]/90 text-white font-semibold px-8 h-13 py-3 rounded-full"
              >
                Participate in Internship
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#5CE1E6]/20 to-[#5CE1E6]/5 flex items-center justify-center border border-[#5CE1E6]/20">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#5CE1E6]/15 to-transparent border border-[#5CE1E6]/15" />
                <Rocket className="w-24 h-24 text-[#5CE1E6] drop-shadow-[0_0_24px_rgba(92,225,230,0.5)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <Reveal className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Snapshots with Our Children
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl text-base leading-relaxed">
              Real moments from our workshops, camps, and competitions.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {galleryImages.map((img, i) => (
              <Reveal key={img.id} delay={(i % 3) * 0.06}>
                <div className="media-tile group relative h-64 md:h-72 rounded-2xl overflow-hidden bg-white border border-slate-200/70">
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="py-14 md:py-20 overflow-hidden bg-gradient-to-r from-[#E6FAFD] via-[#ECFEFF] to-[#FFF6D5]">
        <Reveal className="container mx-auto px-4 text-center mb-12">
          <span className="eyebrow mb-4 mx-auto">
            <span className="eyebrow-dot" />
            Trusted Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
            Our Partners
          </h2>
          <p className="text-slate-500 mt-3 text-base">
            We are proud to collaborate with these amazing technologies.
          </p>
        </Reveal>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#E6FAFD] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFF6D5] to-transparent z-10" />
          <div className="marquee">
            <div className="marquee__track">
              {partnerLogos.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="Partner logo"
                  className="partner-logo h-14 w-auto object-contain mx-10"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="aurora aurora-dark relative overflow-hidden py-28 text-center bg-[#0A3D91]">
        <Reveal className="relative max-w-2xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#5CE1E6]" />
            Enroll Today
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-white leading-tight">
            Ready to Start Your<br />STEM Journey?
          </h2>

          <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            Inspire curiosity, creativity, and confidence through hands-on robotics and STEM learning.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => setContactModalOpen(true)}
              className="btn-premium bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-[#0A3D91] px-10 h-14 rounded-full font-bold text-base"
            >
              Book Free Class
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => setExpoModalOpen(true)}
              className="rounded-full px-10 h-14 font-semibold border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Book a Slot
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ===== MODALS ===== */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        formType="book_free_class"
      />
      <ContactFormModal
        isOpen={expoModalOpen}
        onClose={() => setExpoModalOpen(false)}
        formType="book_expo_slot"
      />

      <Footer />
    </>
  );
}

// ===== COUNTER =====
function Counter({
  label, value, icon: Icon, color,
}: {
  label: string;
  value: number;
  icon: React.ElementType;
  color: "yellow" | "blue";
}) {
  const styles =
    color === "yellow"
      ? "border-[#FFDE59]/60 text-[#8a6d00] hover:border-[#FFDE59] hover:shadow-[0_10px_24px_-12px_rgba(255,222,89,0.5)]"
      : "border-[#5CE1E6]/60 text-[#0A3D91] hover:border-[#5CE1E6] hover:shadow-[0_10px_24px_-12px_rgba(92,225,230,0.5)]";

  return (
    <div className={`stat-chip bg-white border ${styles} rounded-2xl px-2 py-4 text-center transition-all`}>
      <Icon className={`w-4 h-4 mx-auto mb-1 ${color === "yellow" ? "text-[#E0C24A]" : "text-[#5CE1E6]"}`} />
      <div className="text-xl md:text-2xl font-extrabold leading-none mb-1">{value}+</div>
      <div className="text-[0.65rem] text-slate-500 font-medium">{label}</div>
    </div>
  );
}
