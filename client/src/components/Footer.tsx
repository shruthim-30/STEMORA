import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Internships", href: "/internships" },
    { label: "Robotics Expo", href: "/robotics-expo" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const programs = [
    { label: "Young Innovators Course", href: "/courses" },
    { label: "Robotics Base Course", href: "/courses" },
    { label: "Robotics Circuit Course", href: "/courses" },
    { label: "Robotics Summer Camps", href: "/courses" },
    { label: "Robotics Exhibitions", href: "/courses" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Logo */}
          <div className="text-center sm:text-left">
            <a
              href="/"
              className="inline-flex justify-center sm:justify-start mb-5"
            >
              <img
                src="/logop.jpg"
                alt="STEMORA Logo"
                className="h-16 w-auto rounded-md object-contain"
              />
            </a>

            <p className="text-gray-400 text-sm leading-7 max-w-xs mx-auto sm:mx-0">
              Lighting young minds through innovative robotics and STEM
              education programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition"
                  >
                    {item.label}

                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="text-center sm:text-left">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Our Programs
            </h3>

            <ul className="space-y-3">
              {programs.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-yellow-400 transition"
                  >
                    {item.label}

                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:stemoraeducation@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>

                <span className="text-sm break-words">
                  stemoraeducation@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/917090000417?text=Hi%20Stemora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>

                <span className="text-sm">
                  +91 7090000417
                </span>
              </a>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1300,+1st+Cross+Rd,+Geethanjali+Layout,+HAL+3rd+Stage,+Bengaluru+560075"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-cyan-400 transition"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>

                <span className="text-sm leading-6 break-words">
                  HAL 3rd Stage,
                  <br />
                  Bhoomi Reddy Colony,
                  <br />
                  New Tippasandra,
                  <br />
                  Bengaluru,
                  Karnataka 560075,
                  India
                </span>
              </a>

            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">

          <div className="flex justify-center gap-2 mb-6">
            <a
              href="https://www.instagram.com/stemora_india"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-white/10 transition"
            >
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/stemora-india/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-white/10 transition"
            >
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          </div>

          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} STEMORA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}