import { Link } from "react-router-dom";
import { Star, Scissors, ChevronRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import OpenStatus from "@/components/OpenStatus";
import { services } from "@/lib/services";
import { staff } from "@/lib/staff";
import heroImg from "@/assets/hero-barbershop.jpg";
import toolsImg from "@/assets/barber-tools.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Bhaiber Gents Salon interior" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center py-32">
          <div className="flex justify-center mb-6">
            <OpenStatus />
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gold-text">Bhaiber</span> Gents Salon
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-4">
            Premium Grooming in Al Barsha, Dubai
          </p>
          <div className="flex items-center justify-center gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-foreground/80 text-sm font-medium">5.0 from 236+ reviews</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/booking">
              <Button size="lg" className="gold-gradient text-primary-foreground font-semibold text-lg px-8 py-6 hover:scale-105 transition-transform">
                Book Appointment
              </Button>
            </Link>
            <a href="https://wa.me/971556913050" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-6">
                WhatsApp Us
              </Button>
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Al Barsha 1, Dubai</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> Open until 1 AM</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Our <span className="gold-text">Services</span>
          </h2>
          <p className="text-muted-foreground">Premium grooming services for the modern gentleman</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((s, i) => (
            <div key={s.id} className="card-3d rounded-xl p-6" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4">
                <Scissors className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{s.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold">{s.price}</span>
                <span className="text-muted-foreground text-xs">{s.duration}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services">
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10 text-foreground">
              View All Services <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Our <span className="gold-text">Work</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[toolsImg, gallery1, gallery2].map((img, i) => (
            <div key={i} className="card-3d rounded-xl overflow-hidden aspect-square">
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery">
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10 text-foreground">
              View Gallery <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Meet Our <span className="gold-text">Barbers</span>
          </h2>
          <p className="text-muted-foreground">Skilled professionals dedicated to your perfect look</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {staff.map((member) => (
            <div key={member.id} className="card-3d rounded-xl overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs mb-1">{member.specialty}</p>
                <p className="text-muted-foreground text-xs">{member.experience} experience</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-padding container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            What Our <span className="gold-text">Clients</span> Say
          </h2>
          <p className="text-muted-foreground">5.0 rating from 236+ satisfied customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Ahmed K.", text: "Best barbershop in Al Barsha! The fade cuts here are unmatched." },
            { name: "Mohammed R.", text: "Premium service every time. The straight razor shave is incredible." },
            { name: "James L.", text: "Clean, professional, and the staff really know their craft. Highly recommend!" },
          ].map((r, i) => (
            <div key={i} className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm mb-4 italic">"{r.text}"</p>
              <p className="text-primary font-semibold text-sm">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="card-3d rounded-2xl p-8 md:p-12 text-center gold-gradient">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready for a Fresh Look?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
              Book your appointment today and experience premium grooming at Bhaiber Gents Salon.
            </p>
            <Link to="/booking">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold text-lg px-8 py-6">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
