import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <div className="min-h-screen pt-24">
    <div className="container mx-auto section-padding">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
          Get in <span className="gold-text">Touch</span>
        </h1>
        <p className="text-muted-foreground">Visit us or reach out — we'd love to hear from you</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-6">
          <div className="card-3d rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Arabian Gulf Building, Al Barsha 1, Street 11, Dubai, UAE</p>
              </div>
            </div>
          </div>

          <div className="card-3d rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Working Hours</h3>
                <p className="text-muted-foreground text-sm">Daily: 9:00 AM – 1:00 AM</p>
              </div>
            </div>
          </div>

          <div className="card-3d rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Phone</h3>
                <a href="tel:+971556913050" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +971 55 691 3050
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/971556913050" target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-primary-foreground font-semibold py-6">
                <MessageCircle className="h-5 w-5 mr-2" /> WhatsApp Us
              </Button>
            </a>
            <a href="tel:+971556913050" className="flex-1">
              <Button className="w-full gold-gradient text-primary-foreground font-semibold py-6">
                <Phone className="h-5 w-5 mr-2" /> Call Now
              </Button>
            </a>
          </div>

          <a
            href="https://www.google.com/maps/search/Arabian+Gulf+Building+Al+Barsha+1+Dubai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="w-full border-primary/30 text-foreground hover:bg-primary/10 py-6 mt-2">
              <Navigation className="h-5 w-5 mr-2" /> Get Directions
            </Button>
          </a>
        </div>

        {/* Map */}
        <div className="card-3d rounded-xl overflow-hidden min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.168!2d55.19!3d25.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA2JzM2LjAiTiA1NcKwMTEnMjQuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhaiber Gents Salon location"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
