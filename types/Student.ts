import { StaticImageData } from "next/image";

export interface Student {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  created_at: Date;
  user_image: StaticImageData | null;
  rating: number;
  achievements: string[];
  age: number;
  description: string;
}
