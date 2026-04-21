import { siteContent, navLinks } from "../../data/portfolioData";
import { FaGithub as Github, FaTwitter as Twitter, FaLinkedin as Linkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold glow-text mb-4">{siteContent.hero.name}</h3>
            <p className="text-gray-400 max-w-sm">
              Building premium, scalable, and beautiful web experiences. Let's create something stellar together.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/steveanterson" target="_blank" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all">
                <Github size={20} />
              </a>
              <a href="#" target="_blank" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/steve-anterson-4218312a6/" target="_blank" className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/10">
          © {new Date().getFullYear()} {siteContent.hero.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
