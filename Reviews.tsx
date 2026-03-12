import { Star } from "lucide-react";

const reviews = [
  { name: "Ahmed K.", rating: 5, text: "Best barbershop in Al Barsha! The fade cuts here are unmatched. Clean, professional, and always on point.", date: "2 weeks ago" },
  { name: "Mohammed R.", rating: 5, text: "Premium service every time. The straight razor shave is incredible. Feel like a king walking out.", date: "1 month ago" },
  { name: "James L.", rating: 5, text: "Clean, professional, and the staff really know their craft. Highly recommend to anyone in Dubai!", date: "1 month ago" },
  { name: "Khalid A.", rating: 5, text: "Been coming here for 6 months now. Consistently excellent cuts. The attention to detail is amazing.", date: "2 months ago" },
  { name: "Raj P.", rating: 5, text: "My go-to barbershop. The beard trimming service is perfect. Always leave looking sharp.", date: "2 months ago" },
  { name: "David S.", rating: 5, text: "Found this gem in Al Barsha. Great atmosphere, skilled barbers, and very reasonable prices.", date: "3 months ago" },
  { name: "Omar M.", rating: 5, text: "Top notch grooming experience. The facial treatment is a must-try. Will keep coming back!", date: "3 months ago" },
  { name: "Ali H.", rating: 5, text: "Best value for money barbershop in Dubai. Quality is consistently high. Love this place.", date: "4 months ago" },
  { name: "Saif B.", rating: 5, text: "Excellent service from start to finish. The team is friendly and really talented at what they do.", date: "4 months ago" },
];

const Reviews = () => (
  <div className="min-h-screen pt-24">
    <div className="container mx-auto section-padding">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-8 w-8 fill-primary text-primary" />
          ))}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
          Customer <span className="gold-text">Reviews</span>
        </h1>
        <p className="text-muted-foreground text-lg">5.0 rating from 236+ verified reviews</p>
      </div>

      {/* Rating Summary */}
      <div className="glass-card rounded-2xl p-6 md:p-8 mb-10 max-w-md mx-auto text-center">
        <div className="text-5xl font-bold text-primary font-display mb-2">5.0</div>
        <div className="flex items-center justify-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-muted-foreground text-sm">Based on 236 reviews</p>
        <div className="mt-4 space-y-2">
          {[5, 4, 3, 2, 1].map((r) => (
            <div key={r} className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground w-3">{r}</span>
              <Star className="h-3 w-3 fill-primary text-primary" />
              <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full gold-gradient" style={{ width: r === 5 ? "100%" : "0%" }} />
              </div>
              <span className="text-xs text-muted-foreground w-8">{r === 5 ? "236" : "0"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="card-3d rounded-xl p-6">
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: r.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/80 text-sm mb-4 italic leading-relaxed">"{r.text}"</p>
            <div className="flex items-center justify-between">
              <span className="text-primary font-semibold text-sm">{r.name}</span>
              <span className="text-muted-foreground text-xs">{r.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Reviews;
