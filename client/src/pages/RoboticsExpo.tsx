import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowRight, Trophy, Zap, Users, Star, CheckCircle, Calendar, MapPin, Cpu, Rocket, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const highlights = [
  { icon: Trophy, title: "Competitions", desc: "Head-to-head robot battles and timed challenge rounds across multiple categories.", color: "cyan" },
  { icon: Cpu, title: "Live Demos", desc: "Watch cutting-edge robotics and IoT projects built by students come to life on stage.", color: "yellow" },
  { icon: Users, title: "Team Challenges", desc: "Collaborative team events that test creativity, engineering, and problem-solving under pressure.", color: "cyan" },
  { icon: Medal, title: "Awards & Recognition", desc: "Winners receive trophies, certificates, and recognition from industry professionals.", color: "yellow" },
];

const categories = [
  { name: "Line Follower", color: "cyan", desc: "Autonomous robots that navigate a track using sensors." },
  { name: "Obstacle Avoidance", color: "blue", desc: "Robots that detect and avoid obstacles in real time." },
  { name: "Sumo Bot", color: "yellow", desc: "Head-to-head battles to push opponents out of the ring." },
  { name: "IoT Showcase", color: "cyan", desc: "Smart connected devices solving real-world problems." },
  { name: "Creative Build", color: "yellow", desc: "Open category — build anything that wows the judges." },
  { name: "Speed Challenge", color: "blue", desc: "Fastest robot to complete the course wins." },
];

const eligibility = [
  "School students (Grade 5 and above)",
  "College students and engineering teams",
  "Stemora course alumni and current students",
  "Open to all schools and institutions",
  "Teams of 1–4 members per entry",
];

export default function RoboticsExpo() {
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

        {/* Hero */}
        <section className="aurora aurora-dark relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
          <Reveal className="relative container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-[#5CE1E6]/10 border border-[#5CE1E6]/20 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-[#5CE1E6]" />
              <span className="text-xs font-semibold text-[#5CE1E6] tracking-widest uppercase">Annual Event · 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight leading-tight">
              Stemora<br className="hidden sm:block" /> Robotics Expo
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              The biggest student robotics competition in the region. Build, compete, and showcase your innovation on the grandest stage.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300">
                <Calendar className="w-3.5 h-3.5 text-[#5CE1E6]" /> Coming Soon — 2025
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-[#5CE1E6]" /> Bengaluru, India
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300">
                <Trophy className="w-3.5 h-3.5 text-[#FFDE59]" /> Trophies + Cash Prizes
              </span>
            </div>
            <Button
              onClick={() => setRegisterOpen(true)}
              className="btn-premium bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-[#0A3D91] font-bold px-10 h-13 rounded-full text-base"
            >
              Register Your Team <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Reveal>
        </section>

        {/* What to Expect */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <Reveal className="text-center mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">What to Expect</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base leading-relaxed">
                A full day of high-energy robotics action, innovation, and celebration.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <Reveal key={h.title} delay={i * 0.07}>
                    <div className="card-premium border-glow bg-white border border-slate-100/80 rounded-2xl p-7 h-full flex flex-col gap-4 shadow-[0_2px_12px_rgba(10,61,145,0.06)] relative overflow-hidden">
                      <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                        h.color === "yellow"
                          ? "bg-gradient-to-r from-[#FFDE59]/50 via-[#FFDE59] to-[#FFDE59]/50"
                          : "bg-gradient-to-r from-[#5CE1E6]/40 via-[#5CE1E6] to-[#5CE1E6]/40"
                      }`} />
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        h.color === "yellow"
                          ? "bg-gradient-to-br from-[#FFDE59]/40 to-[#FFDE59]/15"
                          : "bg-gradient-to-br from-[#5CE1E6]/25 to-[#0A3D91]/10"
                      }`}>
                        <Icon className={`w-5 h-5 ${h.color === "yellow" ? "text-[#8a6d00]" : "text-[#0A3D91]"}`} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">{h.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Categories + Eligibility */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A3D91]/5 via-[#5CE1E6]/8 to-[#FFDE59]/8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">

              {/* Categories */}
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Competition Categories</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">Six tracks for all skill levels — from beginners to advanced builders.</p>
                <div className="grid grid-cols-1 gap-3">
                  {categories.map((cat, i) => (
                    <Reveal key={cat.name} delay={i * 0.05}>
                      <div className="flex items-start gap-4 bg-white border border-slate-100/80 rounded-2xl p-5 shadow-[0_2px_12px_rgba(10,61,145,0.06)] hover:shadow-[0_4px_20px_rgba(10,61,145,0.1)] transition-shadow">
                        <span className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ${
                          cat.color === "yellow" ? "bg-[#FFDE59]" : cat.color === "blue" ? "bg-[#0A3D91]" : "bg-[#5CE1E6]"
                        }`} />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{cat.name}</h4>
                          <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{cat.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>

              {/* Who Can Participate */}
              <Reveal delay={0.08}>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Who Can Participate?</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">
                  Open to all students with a passion for robotics. No prior competition experience needed.
                </p>
                <div className="bg-white border border-slate-100/80 rounded-2xl p-8 shadow-[0_2px_12px_rgba(10,61,145,0.06)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5CE1E6]/40 via-[#5CE1E6] to-[#5CE1E6]/40" />
                  <ul className="space-y-4">
                    {eligibility.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-[#5CE1E6] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setRegisterOpen(true)}
                    className="btn-premium mt-8 bg-[#0A3D91] hover:bg-[#0A3D91]/90 text-white font-semibold px-8 h-12 rounded-full w-full"
                  >
                    Register Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#0A3D91] to-[#0A3D91]/90 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#5CE1E6]/5 blur-3xl" />
          </div>
          <Reveal className="relative container mx-auto px-4 max-w-2xl">
            <div className="w-14 h-14 rounded-2xl bg-[#5CE1E6]/15 border border-[#5CE1E6]/20 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-7 h-7 text-[#5CE1E6]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Ready to Compete?</h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-lg mx-auto">
              Register your team today and get ready to showcase your robotics skills at Stemora's biggest event of the year.
            </p>
            <Button
              onClick={() => setRegisterOpen(true)}
              className="btn-premium bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-[#0A3D91] font-bold px-10 h-13 rounded-full text-base"
            >
              Register Your Team <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Reveal>
        </section>

      </main>
      <Footer />
      <ContactFormModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        formType="book_expo_slot"
      />
    </div>
  );
}
