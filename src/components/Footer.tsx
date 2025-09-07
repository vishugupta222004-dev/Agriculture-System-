import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-foreground/20 rounded-lg">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SmartFarm</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Empowering farmers with AI-powered support, government scheme access, 
              and personalized agricultural solutions for sustainable farming.
            </p>
            <div className="text-sm text-primary-foreground/60">
              <p>Supporting commercial and domestic farmers</p>
              <p>Available in multiple regional languages</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#schemes" className="hover:text-primary-foreground transition-colors">Government Schemes</a></li>
              <li><a href="#climate" className="hover:text-primary-foreground transition-colors">Climate Predictions</a></li>
              <li><a href="#disease" className="hover:text-primary-foreground transition-colors">Disease Detection</a></li>
              <li><a href="#voice" className="hover:text-primary-foreground transition-colors">Voice Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@smartfarm.gov</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1800-FARM-HELP</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Agricultural Ministry, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 SmartFarm. All rights reserved. A Government of India Initiative.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;