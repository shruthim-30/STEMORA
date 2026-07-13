import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactFormModal from "@/components/ContactFormModal";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Internships", href: "/internships" },
  { label: "Robotics Expo", href: "/robotics-expo" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const courseSubmenu = [
  { label: "Robotics Base Course", href: "#robotics-base" },
  { label: "Robo Circuits Course", href: "#robo-circuits" },
  { label: "Robotics Summer Camps", href: "#summer-camps" },
  { label: "Robotics Online Classes", href: "#online-classes" },
];

interface HeaderProps {
  onContactClick?: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileCoursesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleBookFreeClass = () => {
    onContactClick?.();
    setContactModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`glass-nav sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_1px_0_rgba(10,61,145,0.08),0_8px_24px_-16px_rgba(10,61,145,0.25)]"
            : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 gap-6">

            {/* LOGO */}
            <a href="/" className="logo-mark shrink-0 ml-2 md:ml-4" aria-label="Stemora home">
              <img
                src="/logop.jpg"
                alt="Stemora"
                className="h-16 md:h-20 w-auto object-contain rounded-md"
              />
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2.5 rounded-full text-[0.925rem] font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/[0.04] transition-colors duration-200"
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className="w-3.5 h-3.5 text-foreground/40 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>

                  {item.submenu && (
                    <div className="absolute left-1/2 -translate-x-1/2 pt-3 w-64 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
                      <div className="glass-panel rounded-2xl shadow-[0_20px_40px_-16px_rgba(10,61,145,0.25)] p-2 bg-white/95">
                        {courseSubmenu.map((course) => (
                          <a
                            key={course.label}
                            href={course.href}
                            className="block px-4 py-2.5 rounded-xl text-sm text-foreground/80 hover:bg-primary/10 hover:text-[#0A3D91] transition-colors"
                          >
                            {course.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT: CTA + MOBILE TOGGLE */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                onClick={handleBookFreeClass}
                className="btn-premium hidden lg:inline-flex bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-11 rounded-full"
              >
                Book Free Class
              </Button>

              <button
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
                className="lg:hidden p-2 -mr-2 rounded-full hover:bg-foreground/5 transition-colors"
                onClick={() => setMobileMenuOpen((o) => !o)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div
            id="mobile-nav"
            className={`lg:hidden grid transition-all duration-300 ease-out ${
              mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <nav className="overflow-hidden" aria-label="Mobile navigation">
              <div className="pb-6 pt-2 space-y-1 border-t border-border/60">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.submenu ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full py-2.5 px-2 text-foreground font-medium hover:text-primary transition-colors"
                          onClick={() => setMobileCoursesOpen((o) => !o)}
                          aria-expanded={mobileCoursesOpen}
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 text-foreground/40 transition-transform duration-200 ${
                              mobileCoursesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`grid transition-all duration-200 ${
                            mobileCoursesOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden pl-4 space-y-1 mb-1">
                            {courseSubmenu.map((course) => (
                              <a
                                key={course.label}
                                href={course.href}
                                className="block py-1.5 px-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {course.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-2.5 px-2 text-foreground font-medium hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}

                <Button
                  onClick={handleBookFreeClass}
                  className="btn-premium w-full mt-4 bg-primary hover:bg-primary/90 text-white font-semibold h-12 rounded-full"
                >
                  Book Free Class
                </Button>
              </div>
            </nav>
          </div>

        </div>
      </header>

      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        formType="book_free_class"
      />
    </>
  );
}
