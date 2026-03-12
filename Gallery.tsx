import heroImg from "@/assets/hero-barbershop.jpg";
import toolsImg from "@/assets/barber-tools.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const images = [
  { src: heroImg, alt: "Premium salon interior" },
  { src: gallery1, alt: "Modern fade haircut" },
  { src: gallery2, alt: "Professional beard grooming" },
  { src: gallery3, alt: "Luxury barbershop chairs" },
  { src: toolsImg, alt: "Professional barber tools" },
];

const Gallery = () => (
  <div className="min-h-screen pt-24">
    <div className="container mx-auto section-padding">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
          Our <span className="gold-text">Gallery</span>
        </h1>
        <p className="text-muted-foreground">A look inside Bhaiber Gents Salon</p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="card-3d rounded-xl overflow-hidden break-inside-avoid">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
