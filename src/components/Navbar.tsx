
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
=======
import { ThemeToggle } from "@/components/ThemeToggle";
>>>>>>> 1f36983f5ea400c76f58f5216bf433352cb286fb

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
<<<<<<< HEAD
        isScrolled ? 'bg-white/80 shadow-sm backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg text-data-navy hover:text-data-blue transition-colors">
          AS
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/80 hover:text-data-blue transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button variant="outline" size="sm" asChild>
          <a href="#contact">Get In Touch</a>
        </Button>
=======
        isScrolled ? 'bg-background/80 shadow-sm backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg text-data-blue hover:text-data-blue/80 transition-colors">
          AS
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/80 hover:text-data-blue transition-colors"
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
>>>>>>> 1f36983f5ea400c76f58f5216bf433352cb286fb
      </div>
    </header>
  );
};

export default Navbar;
