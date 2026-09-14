import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Users, Target, Award, BookOpen, Sparkles, Quote } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="aurora aurora-dark relative overflow-hidden py-16 md:py-28 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
          <Reveal className="relative container mx-auto px-4 text-center">
            <div className="eyebrow eyebrow-dark mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              About Stemora
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Building tomorrow's <br className="hidden md:block" />
              innovators, today.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Empowering the next generation of innovators through hands-on
              STEM and robotics education.
            </p>
          </Reveal>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/60">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Reveal>
                <div className="card-premium bg-white border border-slate-100/80 rounded-2xl p-10 h-full shadow-[0_2px_12px_rgba(10,61,145,0.06)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5CE1E6]/40 via-[#5CE1E6] to-[#5CE1E6]/40" />
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5CE1E6]/25 to-[#0A3D91]/10 rounded-xl flex items-center justify-center mb-7">
                    <Target className="w-6 h-6 text-[#0A3D91]" />
                  </div>
                  <h2 className="text-xl font-extrabold mb-4 text-slate-900 tracking-tight">
                    Our Mission
                  </h2>
                  <p className="text-slate-500 leading-relaxed text-[0.95rem]">
                    At Stemora, our mission is to deliver hands-on, project-based STEM learning experiences that spark curiosity, creativity, and critical thinking. Through robotics, electronics, coding, AI, IoT, and emerging technologies, we empower students with practical skills, innovation, and confidence, preparing them for the careers and challenges of tomorrow while aligning with the goals of NEP 2020.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="card-premium bg-white border border-slate-100/80 rounded-2xl p-10 h-full shadow-[0_2px_12px_rgba(10,61,145,0.06)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFDE59]/40 via-[#FFDE59] to-[#FFDE59]/40" />
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFDE59]/40 to-[#FFDE59]/15 rounded-xl flex items-center justify-center mb-7">
                    <Award className="w-6 h-6 text-[#8a6d00]" />
                  </div>
                  <h2 className="text-xl font-extrabold mb-4 text-slate-900 tracking-tight">
                    Our Vision
                  </h2>
                  <p className="text-slate-500 leading-relaxed text-[0.95rem]">
                    To inspire the next generation of innovators, creators, and problem-solvers by making world-class STEM education accessible to every student. We envision a future where young minds confidently use science, technology, engineering, and mathematics to build innovative solutions that create a better world.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A3D91]/5 via-[#5CE1E6]/10 to-[#FFDE59]/10">
          <div className="container mx-auto px-4">
            <Reveal className="flex flex-col items-center text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Choose Stemora?
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7">
              {[
                {
                  icon: Users,
                  title: "Well Trained R&D Engineers",
                  desc: "Our programs are led by well-trained R&D engineers who bring real-world expertise into every session.",
                },
                {
                  icon: BookOpen,
                  title: "Practical Learning",
                  desc: "Every concept is taught through practical application, ensuring students understand by doing, not just listening.",
                },
                {
                  icon: Award,
                  title: "Hands-On Experience",
                  desc: "Students build, test, and iterate on real projects — gaining genuine hands-on experience with cutting-edge technology.",
                },
                {
                  icon: Sparkles,
                  title: "Innovation",
                  desc: "We cultivate an innovation mindset, encouraging students to think creatively and develop solutions to real-world problems.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="card-premium bg-white border border-slate-100/80 rounded-2xl p-5 md:p-8 text-center h-full shadow-[0_2px_12px_rgba(10,61,145,0.06)] flex flex-col items-center">
                      <div className="w-11 h-11 md:w-14 md:h-14 bg-gradient-to-br from-[#5CE1E6]/20 to-[#0A3D91]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-5 h-5 md:w-7 md:h-7 text-[#0A3D91]" />
                      </div>
                      <h3 className="text-base font-bold mb-2 text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Message from the Leaders */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/40">
          <div className="container mx-auto px-4">
            <Reveal className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Message from the Leaders
              </h2>
              <p className="text-slate-500 mt-3 text-base md:text-lg">
                The people behind Stemora's mission
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Praveen S K",
                  role: "Founder & CEO",
                  color: "cyan",
                  message:
                    "At STEMORA, we don’t just teach technology — we inspire students to create it. We believe innovation begins with curiosity and grows through hands-on experience. Our mission is to build future-ready minds through STEM, robotics, coding, and AI. We empower students to think boldly, solve real problems, and turn ideas into reality. We are not preparing students for the future; we are preparing them to shape it.",
                },
                {
                  name: "Calvin Anthony",
                  role: "Co-Founder & Director",
                  color: "yellow",
                  message:
                    "STEMORA is built on one belief — learning should lead to creating. We give students the freedom to explore, experiment, and build with technology. Our programs turn classrooms into spaces of innovation and discovery. We focus on developing creativity, confidence, and problem-solving alongside technical skills. Together, we are building the thinkers, makers, and innovators of tomorrow.",
                },
              ].map(
                (
                  leader: {
                    name: string;
                    role: string;
                    color: string;
                    message: string;
                  },
                  i,
                ) => (
                  <Reveal key={leader.name} delay={i * 0.08}>
                    <div className="card-premium bg-white border border-slate-100/80 rounded-2xl p-6 md:p-9 h-full shadow-[0_2px_12px_rgba(10,61,145,0.06)] relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                      leader.color === "yellow"
                        ? "bg-gradient-to-r from-[#FFDE59]/50 via-[#FFDE59] to-[#FFDE59]/50"
                        : "bg-gradient-to-r from-[#5CE1E6]/50 via-[#5CE1E6] to-[#5CE1E6]/50"
                    }`} />
                    <Quote className={`w-9 h-9 mb-5 ${
                      leader.color === "yellow" ? "text-[#8a6d00]/45" : "text-[#0A3D91]/45"
                    }`} />
                    <p className="text-slate-600 leading-relaxed text-[0.95rem] mb-7">
                      {leader.message}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                        leader.color === "yellow"
                          ? "bg-[#FFDE59]/25 border-[#FFDE59]/30"
                          : "bg-[#5CE1E6]/20 border-[#5CE1E6]/30"
                      }`}>
                        <Users className={`w-5 h-5 ${
                          leader.color === "yellow" ? "text-[#8a6d00]/70" : "text-[#0A3D91]/70"
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{leader.name}</h3>
                        <span className={`text-xs font-semibold ${
                          leader.color === "yellow" ? "text-[#8a6d00]" : "text-[#0A3D91]"
                        }`}>
                          {leader.role}
                        </span>
                      </div>
                    </div>
                    </div>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
