import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowRight, GraduationCap, Briefcase, Users, Lightbulb, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const perks = [
  { icon: GraduationCap, title: "Mentor-Led Training", desc: "Work directly with experienced R&D engineers on real projects." },
  { icon: Briefcase, title: "Industry Exposure", desc: "Get hands-on experience with tools and workflows used in the industry." },
  { icon: Lightbulb, title: "Project-Based Learning", desc: "Build and present real projects that go into your portfolio." },
  { icon: Star, title: "Certificate & Recognition", desc: "Earn an official Stemora internship certificate upon completion." },
];

const interns = [
  { name: "Aarav Singh", role: "Robotics Intern", initials: "AS", color: "cyan" },
  { name: "Meera Nair", role: "Electronics Intern", initials: "MN", color: "yellow" },
  { name: "Rohan Verma", role: "Coding Intern", initials: "RV", color: "cyan" },
  { name: "Ananya Iyer", role: "IoT Intern", initials: "AI", color: "yellow" },
  { name: "Karthik Raj", role: "AI & ML Intern", initials: "KR", color: "cyan" },
  { name: "Divya Menon", role: "Mechatronics Intern", initials: "DM", color: "yellow" },
];

export default function Internships() {
  const [enrollOpen, setEnrollOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">

        {/* Hero */}
        <section className="aurora aurora-dark relative overflow-hidden py-16 md:py-28 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
          <Reveal className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight">
              Internship Program
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Gain real-world experience, build your portfolio, and kickstart your STEM career with Stemora.
            </p>
            <Button
              onClick={() => setEnrollOpen(true)}
              className="btn-premium bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-[#0A3D91] font-bold px-10 h-13 rounded-full text-base"
            >
              Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Reveal>
        </section>

        {/* Why Intern */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <Reveal className="text-center mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Intern at Stemora?
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base leading-relaxed">
                Our internship is designed to give you real skills, real projects, and real recognition.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <Reveal key={perk.title} delay={i * 0.07}>
                    <div className="card-premium border-glow bg-white border border-slate-100/80 rounded-2xl p-7 h-full flex flex-col gap-4 shadow-[0_2px_12px_rgba(10,61,145,0.06)] relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5CE1E6]/40 via-[#5CE1E6] to-[#5CE1E6]/40" />
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#5CE1E6]/25 to-[#0A3D91]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0A3D91]" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">{perk.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{perk.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* What You'll Do */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A3D91]/5 via-[#5CE1E6]/8 to-[#FFDE59]/8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 tracking-tight">
                  What You'll Experience
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8 text-[0.95rem]">
                  Our internship program is structured to give you maximum exposure to real-world STEM workflows. You'll work alongside our engineers, contribute to live projects, and walk away with skills that matter.
                </p>
                <ul className="space-y-3">
                  {[
                    "Hands-on work with robotics, IoT, and electronics",
                    "Collaboration with experienced R&D engineers",
                    "Weekly project reviews and feedback sessions",
                    "Opportunity to present at Stemora exhibitions",
                    "Official internship certificate on completion",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-[#5CE1E6] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => setEnrollOpen(true)}
                  className="btn-premium mt-9 bg-[#0A3D91] hover:bg-[#0A3D91]/90 text-white font-semibold px-8 h-12 rounded-full"
                >
                  Apply for Internship <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="bg-white border border-slate-100/80 rounded-2xl p-8 shadow-[0_2px_12px_rgba(10,61,145,0.06)]">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-6">Program Details</h3>
                  <div className="space-y-5">
                    {[
                      { label: "Domains", value: "Robotics, Coding, IoT, AI & ML, Electronics" },
                      { label: "Certificate", value: "Yes, issued by Stemora" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                        <span className="text-sm text-slate-400 font-medium">{item.label}</span>
                        <span className="text-sm font-bold text-slate-800">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Our Interns */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <Reveal className="text-center mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Interns
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base leading-relaxed">
                Meet the talented students currently working with us at Stemora.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
              {interns.map((intern, i) => (
                <Reveal key={intern.name} delay={i * 0.06}>
                  <div className="card-premium bg-white border border-slate-100/80 rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_2px_12px_rgba(10,61,145,0.06)] group">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-extrabold mb-4 ${
                      intern.color === "yellow"
                        ? "bg-gradient-to-br from-[#FFDE59]/40 to-[#FFDE59]/15 text-[#7a5f00]"
                        : "bg-gradient-to-br from-[#5CE1E6]/25 to-[#0A3D91]/10 text-[#0A3D91]"
                    }`}>
                      {intern.initials}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">{intern.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{intern.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#0A3D91] to-[#0A3D91]/90 text-white text-center">
          <Reveal className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Ready to Start Your Journey?</h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Join Stemora's internship program and take your first step into the world of STEM.
            </p>
            <Button
              onClick={() => setEnrollOpen(true)}
              className="btn-premium bg-[#5CE1E6] hover:bg-[#5CE1E6]/90 text-[#0A3D91] font-bold px-10 h-13 rounded-full text-base"
            >
              Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Reveal>
        </section>

      </main>
      <Footer />
      <ContactFormModal
        isOpen={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        formType="book_expo_slot"
      />
    </div>
  );
}
