import { Link } from "react-router-dom";
import {
  Scissors, Ruler, Sparkles, Layers, Minus, User, Sun, Waves,
  Droplets, Palette, Paintbrush, ShieldCheck, FlaskConical,
  AlignHorizontalJustifyCenter, Hand, Footprints, Bath, Brain,
  HeartPulse, CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, serviceCategories } from "@/lib/services";

const iconMap: Record<string, React.ReactNode> = {
  scissors: <Scissors className="h-6 w-6 text-primary-foreground" />,
  ruler: <Ruler className="h-6 w-6 text-primary-foreground" />,
  sparkles: <Sparkles className="h-6 w-6 text-primary-foreground" />,
  layers: <Layers className="h-6 w-6 text-primary-foreground" />,
  minus: <Minus className="h-6 w-6 text-primary-foreground" />,
  user: <User className="h-6 w-6 text-primary-foreground" />,
  sun: <Sun className="h-6 w-6 text-primary-foreground" />,
  waves: <Waves className="h-6 w-6 text-primary-foreground" />,
  droplets: <Droplets className="h-6 w-6 text-primary-foreground" />,
  palette: <Palette className="h-6 w-6 text-primary-foreground" />,
  paintbrush: <Paintbrush className="h-6 w-6 text-primary-foreground" />,
  "shield-check": <ShieldCheck className="h-6 w-6 text-primary-foreground" />,
  "flask-conical": <FlaskConical className="h-6 w-6 text-primary-foreground" />,
  "align-horizontal-justify-center": <AlignHorizontalJustifyCenter className="h-6 w-6 text-primary-foreground" />,
  hand: <Hand className="h-6 w-6 text-primary-foreground" />,
  footprints: <Footprints className="h-6 w-6 text-primary-foreground" />,
  bath: <Bath className="h-6 w-6 text-primary-foreground" />,
  brain: <Brain className="h-6 w-6 text-primary-foreground" />,
  "heart-pulse": <HeartPulse className="h-6 w-6 text-primary-foreground" />,
  "circle-dot": <CircleDot className="h-6 w-6 text-primary-foreground" />,
};

const Services = () => (
  <div className="min-h-screen pt-24">
    <div className="container mx-auto section-padding">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
          Our <span className="gold-text">Services</span>
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Premium grooming services crafted for the modern gentleman. Every visit is an experience.
        </p>
      </div>

      {serviceCategories.map((cat) => (
        <div key={cat} className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 gold-text">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter((s) => s.category === cat)
              .map((s) => (
                <div key={s.id} className="card-3d rounded-xl p-6 flex flex-col">
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-5">
                    {iconMap[s.icon] || <Scissors className="h-6 w-6 text-primary-foreground" />}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{s.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{s.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary font-bold text-lg">{s.price}</span>
                    <span className="text-muted-foreground text-sm">{s.duration}</span>
                  </div>
                  <Link to={`/booking?service=${s.id}`}>
                    <Button className="w-full gold-gradient text-primary-foreground font-semibold">
                      Book This Service
                    </Button>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
