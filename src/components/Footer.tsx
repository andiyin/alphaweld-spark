import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import alphaweldLogo from "@/assets/alphaweld-logo-new.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-industrial text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={alphaweldLogo} 
                alt="Alphaweld GmbH" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Alphaweld GmbH</h3>
                <p className="text-white/80">Schweißtechnik & Arbeitsschutz</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Ihr kompetenter Partner für hochwertige Schweißtechnik, Schweißbrenner, 
              Schweißmaschinen und Arbeitsschutzausrüstung. Qualität, Innovation und 
              Zuverlässigkeit seit Jahren.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Newsletter abonnieren</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Ihre E-Mail-Adresse"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="hero" size="default">
                  Abonnieren
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-white/80 hover:text-primary transition-colors">Produkte</Link></li>
              <li><Link to="/news" className="text-white/80 hover:text-primary transition-colors">News</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-primary transition-colors">Über uns</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-primary transition-colors">Kontakt</Link></li>
              <li><Link to="/downloads" className="text-white/80 hover:text-primary transition-colors">Downloads</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-white/80">
                  <p>Geisweider Str. 130</p>
                  <p>D-57078 Siegen</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/80">Tel: +49 (0)271 317897-0</p>
                  <p className="text-white/80">Fax: +49 (0)271 317897-29</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:welding@alphaweld.de" 
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  welding@alphaweld.de
                </a>
              </div>
            </div>

            {/* Hotline */}
            <div className="mt-6 p-4 bg-primary/20 rounded-lg">
              <h5 className="font-semibold text-primary mb-2">Service Hotline</h5>
              <p className="text-lg font-bold">+49 (0)271 317897-0</p>
              <p className="text-sm text-white/80">Mo-Fr: 8:00 - 17:00 Uhr</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-white/80">
              <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
              <Link to="/agb" className="hover:text-primary transition-colors">AGB</Link>
              <Link to="/lieferkettengesetz" className="hover:text-primary transition-colors">Lieferkettengesetz</Link>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/80">Folgen Sie uns:</span>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/10 hover:bg-primary/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-white/60">
              © 2024 Alphaweld GmbH. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;