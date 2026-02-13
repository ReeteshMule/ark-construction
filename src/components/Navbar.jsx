import { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Calendar', href: '#calendar' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Our Services', href: '#services' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-ark-dark/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-ark-dark/90 py-6 shadow-md'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className="flex items-baseline gap-1 text-2xl font-heading font-bold tracking-tighter cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span className="text-white">ARK</span>
              <sup className="text-ark-red font-bold text-base leading-none">2</sup>
            </div>
            <div className="hidden sm:block text-xs uppercase tracking-widest text-white/80 border-l border-white/20 pl-2 ml-2">
              Construction Services
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-white/90 hover:text-white transition-colors uppercase tracking-wide relative after:content-[''] after:block after:h-[2px] after:bg-ark-red after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2 text-white">
              <Phone className="text-ark-red" size={16} />
              <span className="font-semibold">+1 (213) 345-6789</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden bg-ark-dark border-t border-gray-800">
          <Container className="py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/90 hover:text-ark-red py-2"
              >
                {link.name}
              </a>
            ))}
          </Container>
        </div>
      )}
    </nav>
  );
};
