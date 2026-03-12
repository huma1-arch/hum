import staff1 from "@/assets/staff-1.jpg";
import staff2 from "@/assets/staff-2.jpg";
import staff3 from "@/assets/staff-3.jpg";
import staff4 from "@/assets/staff-4.jpg";
import staff5 from "@/assets/staff-5.jpg";
import staff6 from "@/assets/staff-6.jpg";

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  experience: string;
}

export const staff: StaffMember[] = [
  {
    id: "barber-1",
    name: "JESS",
    role: "Senior Barber",
    specialty: "Fade Cuts & Hair Styling",
    image: staff6,
    experience: "8+ years",
  },
  {
    id: "barber-2",
    name: "SHAFEEQ",
    role: "Master Barber",
    specialty: "Classic Shaves & Beard Grooming",
    image: staff5,
    experience: "10+ years",
  },
  {
    id: "barber-3",
    name: "AGAMYRAT",
    role: "Barber & Stylist",
    specialty: "Modern Cuts & Facial Grooming",
    image: staff4,
    experience: "6+ years",
  },
  {
    id: "barber-4",
    name: "KHOOBY",
    role: "Barber",
    specialty: "Haircuts & Head Massage",
    image: staff3,
    experience: "7+ years",
  },
  {
    id: "barber-5",
    name: "AWAIS",
    role: "Senior Stylist",
    specialty: "Hair Colour & Keratin",
    image: staff2,
    experience: "9+ years",
  },
  {
    id: "barber-6",
    name: "KAIF",
    role: "Barber & Therapist",
    specialty: "Massage & Hijama Therapy",
    image: staff1,
    experience: "5+ years",
  },
];
