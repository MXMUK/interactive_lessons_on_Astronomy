import User1 from '@/public/assets/images/student1.jpg';
import User2 from '@/public/assets/images/student2.jpg';
import User3 from '@/public/assets/images/student3.jpg';
import User4 from '@/public/assets/images/student4.jpg';
import User5 from '@/public/assets/images/student5.jpg';
import User6 from '@/public/assets/images/student6.jpg';
import User7 from '@/public/assets/images/student7.jpg';
import User8 from '@/public/assets/images/student8.jpg';
import User9 from '@/public/assets/images/student9.jpg';

import { Student } from '@/types/Student';

export const students: Student[] = [
  {
      id: 1,
      email: "liam.smith@example.com",
      password_hash: "hash1",
      name: "Liam Smith",
      created_at: new Date("2023-01-01T10:00:00Z"),
      user_image: User1,
      rating: 4.5,
      age: 17,
      description: "Liam is a dedicated student with a passion for mathematics and science.",
      achievements: ["Math Olympiad Winner", "Science Fair 2nd Place", "History Bee Finalist", "Basketball Team Captain", "Art Contest Winner"]
  },
  {
      id: 2,
      email: "olivia.johnson@example.com",
      password_hash: "hash2",
      name: "Olivia Johnson",
      created_at: new Date("2023-01-02T10:00:00Z"),
      user_image: User2,
      rating: 4.7,
      age: 18,
      description: "Olivia excels in languages and has a keen interest in literature.",
      achievements: ["Debate Club President", "Essay Competition Winner"]
  },
  {
      id: 3,
      email: "noah.williams@example.com",
      password_hash: "hash3",
      name: "Noah Williams",
      created_at: new Date("2023-01-03T10:00:00Z"),
      user_image: User3,
      rating: 4.6,
      age: 16,
      description: "Noah is a sports enthusiast and a key player in the school's basketball team.",
      achievements: ["Basketball Team Captain", "Community Service Award"]
  },
  {
      id: 4,
      email: "emma.brown@example.com",
      password_hash: "hash4",
      name: "Emma Brown",
      created_at: new Date("2023-01-04T10:00:00Z"),
      user_image: User4,
      rating: 4.8,
      age: 17,
      description: "Emma is a top student with interests in robotics and engineering.",
      achievements: ["Valedictorian", "Robotics Competition Winner"]
  },
  {
      id: 5,
      email: "oliver.jones@example.com",
      password_hash: "hash5",
      name: "Oliver Jones",
      created_at: new Date("2023-01-05T10:00:00Z"),
      user_image: User5,
      rating: 4.4,
      age: 17,
      description: "Oliver is a strategic thinker who enjoys playing chess and solving puzzles.",
      achievements: ["Chess Club Champion", "Science Fair 3rd Place"]
  },
  {
      id: 6,
      email: "ava.garcia@example.com",
      password_hash: "hash6",
      name: "Ava Garcia",
      created_at: new Date("2023-01-06T10:00:00Z"),
      user_image: User6,
      rating: 4.9,
      age: 16,
      description: "Ava is an artist at heart, with a talent for painting and drawing.",
      achievements: ["Art Contest Winner", "National Honor Society Member", "Math Olympiad Winner"]
  },
  {
      id: 7,
      email: "elijah.martinez@example.com",
      password_hash: "hash7",
      name: "Elijah Martinez",
      created_at: new Date("2023-01-07T10:00:00Z"),
      user_image: User7,
      rating: 4.3,
      age: 18,
      description: "Elijah is an all-rounder with a particular interest in history and sports.",
      achievements: ["Football Team MVP", "History Bee Finalist"]
  },
  {
      id: 8,
      email: "sophia.rodriguez@example.com",
      password_hash: "hash8",
      name: "Sophia Rodriguez",
      created_at: new Date("2023-01-08T10:00:00Z"),
      user_image: User8,
      rating: 4.7,
      age: 17,
      description: "Sophia is a brilliant student with exceptional spelling and organizational skills.",
      achievements: ["Spelling Bee Champion", "Student Council Treasurer"]
  },
  {
      id: 9,
      email: "james.wilson@example.com",
      password_hash: "hash9",
      name: "James Wilson",
      created_at: new Date("2023-01-09T10:00:00Z"),
      user_image: User9,
      rating: 4.2,
      age: 16,
      description: "James is an athlete who excels in track and field and is a dedicated debater.",
      achievements: ["Track and Field Medalist", "Debate Club Member"]
  },
  {
      id: 10,
      email: "amelia.anderson@example.com",
      password_hash: "hash10",
      name: "Amelia Anderson",
      created_at: new Date("2023-01-10T10:00:00Z"),
      user_image: null,
      rating: 4.6,
      age: 17,
      description: "Amelia is a science enthusiast with leadership skills and a love for writing.",
      achievements: ["Science Club President", "Essay Competition Runner-Up"]
  },
  {
      id: 11,
      email: "william.thomas@example.com",
      password_hash: "hash11",
      name: "William Thomas",
      created_at: new Date("2023-01-11T10:00:00Z"),
      user_image: null,
      rating: 4.4,
      age: 18,
      description: "William is a creative individual with a passion for mathematics and the arts.",
      achievements: ["Mathematics League Member", "Art Exhibition Participant"]
  },
  {
      id: 12,
      email: "mia.taylor@example.com",
      password_hash: "hash12",
      name: "Mia Taylor",
      created_at: new Date("2023-01-12T10:00:00Z"),
      user_image: null,
      rating: 4.7,
      age: 16,
      description: "Mia is an excellent student with a strong interest in robotics and technology.",
      achievements: ["National Honor Society Member", "Robotics Club Secretary"]
  },
  {
      id: 13,
      email: "benjamin.moore@example.com",
      password_hash: "hash13",
      name: "Benjamin Moore",
      created_at: new Date("2023-01-13T10:00:00Z"),
      user_image: null,
      rating: 4.5,
      age: 17,
      description: "Benjamin is a talented actor and science enthusiast who enjoys exploring new ideas.",
      achievements: ["Drama Club Actor", "Science Olympiad Participant"]
  },
  {
      id: 14,
      email: "isabella.jackson@example.com",
      password_hash: "hash14",
      name: "Isabella Jackson",
      created_at: new Date("2023-01-14T10:00:00Z"),
      user_image: null,
      rating: 4.8,
      age: 18,
      description: "Isabella is a history buff and a diligent student with a flair for writing.",
      achievements: ["Yearbook Editor", "History Club Member"]
  },
  {
      id: 15,
      email: "lucas.white@example.com",
      password_hash: "hash15",
      name: "Lucas White",
      created_at: new Date("2023-01-15T10:00:00Z"),
      user_image: null,
      rating: 4.6,
      age: 16,
      description: "Lucas is a natural leader and musician who excels in student government and music.",
      achievements: ["Student Government Vice President", "Music Band Member"]
  },
  {
      id: 16,
      email: "charlotte.harris@example.com",
      password_hash: "hash16",
      name: "Charlotte Harris",
      created_at: new Date("2023-01-16T10:00:00Z"),
      user_image: null,
      rating: 4.9,
      age: 17,
      description: "Charlotte is a top-performing student with a passion for science and swimming.",
      achievements: ["Science Fair Winner", "Swimming Team Captain"]
  }
];




