import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CalendarIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/services";
import { staff } from "@/lib/staff";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
  "21:00", "21:30", "22:00", "22:30", "23:00", "23:30",
  "00:00", "00:30",
];



const Booking = () => {
  const [params] = useSearchParams();
  const [service, setService] = useState(params.get("service") || "");
  const [barber, setBarber] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedService = services.find((s) => s.id === service);

  const whatsappMsg = encodeURIComponent(
    `Hi Bhaiber Gents Salon! I'd like to book:\nService: ${selectedService?.name || service}\nDate: ${date ? format(date, "PPP") : ""}\nTime: ${time}\nName: ${name}\nPhone: ${phone}${notes ? `\nNotes: ${notes}` : ""}`
  );

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="card-3d rounded-2xl p-8 md:p-12 text-center max-w-md mx-4">
          <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="font-display text-2xl font-bold mb-3">Booking Confirmed!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you, {name}! We've received your booking for {selectedService?.name || service} on{" "}
            {date ? format(date, "PPP") : ""} at {time}.
          </p>
          <a
            href={`https://wa.me/971556913050?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full gold-gradient text-primary-foreground font-semibold mb-3">
              Confirm via WhatsApp
            </Button>
          </a>
          <Button variant="outline" onClick={() => setSubmitted(false)} className="w-full border-primary/30 text-foreground">
            Book Another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto section-padding max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
            Book Your <span className="gold-text">Appointment</span>
          </h1>
          <p className="text-muted-foreground">Choose your service and preferred time</p>
        </div>

        <form onSubmit={handleSubmit} className="card-3d rounded-2xl p-6 md:p-8 space-y-6">
          {/* Service */}
          <div>
            <Label className="text-foreground mb-2 block">Service *</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {services.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setService(s.id)}
                  className={cn(
                    "p-3 rounded-lg border text-left text-sm transition-all",
                    service === s.id
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  )}
                >
                  <div className="font-medium">{s.name}</div>
                  <div className="text-xs text-primary mt-1">{s.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Barber */}
          <div>
            <Label className="text-foreground mb-2 block">Barber (optional)</Label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              <button
                type="button"
                onClick={() => setBarber("Any Barber")}
                className={cn(
                  "p-3 rounded-lg border text-center text-sm transition-all",
                  barber === "Any Barber"
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50"
                )}
              >
                <div className="w-12 h-12 rounded-full bg-secondary mx-auto mb-2 flex items-center justify-center text-muted-foreground text-lg">?</div>
                <div className="font-medium">Any Barber</div>
              </button>
              {staff.map((member) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setBarber(member.name)}
                  className={cn(
                    "p-3 rounded-lg border text-center text-sm transition-all",
                    barber === member.name
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  )}
                >
                  <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full object-cover mx-auto mb-2" />
                  <div className="font-medium">{member.name}</div>
                  <div className="text-xs text-primary">{member.role}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Date */}
          <div>
            <Label className="text-foreground mb-2 block">Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal border-border",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time */}
          <div>
            <Label className="text-foreground mb-2 block">Time *</Label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-48 overflow-y-auto pr-1">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTime(t)}
                  className={cn(
                    "py-2 rounded-lg border text-sm transition-all",
                    time === t
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-foreground mb-2 block">Name *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                placeholder="Your name"
                className="bg-secondary border-border"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground mb-2 block">Phone *</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                maxLength={20}
                placeholder="+971..."
                className="bg-secondary border-border"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <Label htmlFor="notes" className="text-foreground mb-2 block">Notes (optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              maxLength={500}
              placeholder="Any special requests..."
              className="bg-secondary border-border"
            />
          </div>

          <Button
            type="submit"
            disabled={!service || !date || !time || !name || !phone}
            className="w-full gold-gradient text-primary-foreground font-semibold text-lg py-6"
          >
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
