import { MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://wa.me/971556913050?text=Hi%20Bhaiber%20Gents%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment.";

const StickyBooking = () => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
    <Link
      to="/booking"
      className="flex items-center justify-center w-14 h-14 rounded-full gold-gradient text-primary-foreground shadow-lg animate-glow hover:scale-110 transition-transform"
      aria-label="Book appointment"
    >
      <Calendar className="h-6 w-6" />
    </Link>
  </div>
);

export default StickyBooking;
