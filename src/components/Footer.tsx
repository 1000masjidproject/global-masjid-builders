import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <div>
                <h3 className="font-bold text-lg">1000 Masjid</h3>
                <p className="text-xs opacity-80">Global Initiative</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Building places of worship, hope, and community across the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Project</Link></li>
              <li><Link to="/committee" className="hover:text-accent transition-colors">Global Committee</Link></li>
              <li><Link to="/progress" className="hover:text-accent transition-colors">Our Progress</Link></li>
              <li><Link to="/get-involved" className="hover:text-accent transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@1000masjid.org" className="hover:text-accent transition-colors">
                  info@1000masjid.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} 1000 Masjid Global Construction Project. All rights reserved.</p>
          <p className="mt-2 text-xs">A charitable initiative dedicated to building places of worship worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
