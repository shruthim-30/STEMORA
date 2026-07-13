import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

export default function Contact() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="aurora aurora-dark relative overflow-hidden py-24 md:py-28 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
          <Reveal className="relative container mx-auto px-4 text-center">
            <div className="eyebrow eyebrow-dark mb-6 inline-flex">
              <Sparkles className="w-3.5 h-3.5" />
              We'd love to hear from you
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Have questions? We're here to help. Reach out to us for any
              inquiries about our programs.
            </p>
          </Reveal>
        </section>

        {/* Contact Info & CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              <Reveal>
                <div>
                  <h2 className="text-3xl font-extrabold mb-9 text-slate-900 tracking-tight">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, title: "Email Us", value: "stemoraeducation@gmail.com", href: "mailto:stemoraeducation@gmail.com" },
                      { icon: Phone, title: "Call Us", value: "+91 7090000417", href: "https://wa.me/917090000417?text=Hi%20Stemora" },
                      { icon: MapPin, title: "Visit Us", value: "HAL 3rd Stage, Bhoomi Reddy Colony, New Tippasandra, Bengaluru, Karnataka 560075", href: "https://www.google.com/maps/dir/?api=1&destination=1300,+1st+Cross+Rd,+Geethanjali+Layout,+HAL+3rd+Stage,+Bengaluru+560075" },
                      { icon: Clock, title: "Working Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM", href: null },
                    ].map((item) => {
                      const Icon = item.icon;
                      const inner = (
                        <>
                          <div className="icon-tile w-12 h-12 bg-gradient-to-br from-[#5CE1E6]/20 to-[#0A3D91]/10 rounded-2xl flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-[#0A3D91]" />
                          </div>
                          <div>
                            <h3 className="font-bold text-base text-slate-900 mb-0.5">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.value}</p>
                          </div>
                        </>
                      );
                      return item.href ? (
                        <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 group hover:opacity-80 transition-opacity">{inner}</a>
                      ) : (
                        <div key={item.title} className="flex items-start gap-4">{inner}</div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="card-premium border-glow bg-white border border-slate-100/80 rounded-2xl p-10 text-center shadow-[0_2px_12px_rgba(10,61,145,0.06)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5CE1E6]/40 via-[#5CE1E6] to-[#5CE1E6]/40" />
                  <div className="w-14 h-14 bg-gradient-to-br from-[#5CE1E6]/25 to-[#0A3D91]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-6 h-6 text-[#0A3D91]" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3 text-slate-900 tracking-tight">Ready to Start?</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                    Book a free trial class or inquire about our upcoming robotics workshops.
                  </p>
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="btn-premium w-full h-13 py-3.5 text-base font-bold rounded-full bg-[#0A3D91] hover:bg-[#0A3D91]/90 text-white"
                  >
                    Book Free Class
                  </Button>
                </div>
              </Reveal>
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
