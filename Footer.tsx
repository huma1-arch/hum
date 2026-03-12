import { Scissors, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Scissors className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold gold-text">Bhaiber Gents Salon</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium men's grooming in the heart of Al Barsha, Dubai. Experience luxury grooming at its finest.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/services", label: "Services" },
              { to: "/booking", label: "Book Now" },
              { to: "/reviews", label: "Reviews" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>Arabian Gulf Building, Al Barsha 1, Street 11, Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="tel:+971556913050" className="hover:text-primary transition-colors">+971 55 691 3050</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span>Daily 9:00 AM – 1:00 AM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bhaiber Gents Salon. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
