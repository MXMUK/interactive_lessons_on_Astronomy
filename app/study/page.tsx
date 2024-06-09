'use client';

import React, { useEffect } from 'react';
import ListOfLessons from '@/components/shared/lessonsComponents/ListOfLessons';
import ListOfQuizzes from '@/components/shared/QuizComponents/ListOfQuizzes';

const allLessons = [
  {
    additionalVideo: 'https://www.youtube.com/watch?v=DxL2HoqLbyA',
    author_id: 1,
    created_at: '2024-06-09T19:02:59.201Z',
    description: 'This lesson introduces the fundamental concepts and principles of physics.',
    explanation:
      "Physics is the study of matter, energy, and the interactions between them. In this lesson, we will cover key topics such as Newton's Laws of Motion, the principles of energy, and basic concepts like velocity, acceleration, and forces.",
    id: '18a4e52ae088',
    notes:
      'Physics is essential for understanding the natural world. Understanding physics can help in fields ranging from engineering to medicine.',
    priority: 2,
    rating: 5,
    selectedModels: ['Sun'],
    title: 'Lesson 1: Introduction to Physics',
    video: 'https://youtu.be/b1t41Q3xRM8',
  },
  {
    additionalVideo: 'https://www.youtube.com/watch?v=DxL2HoqLbyA',
    author_id: 2,
    created_at: '2024-06-09T19:03:59.201Z',
    description: 'This lesson covers the basics of chemistry.',
    explanation:
      'Chemistry is the study of substances, their properties, and how they interact with each other. This lesson will introduce atomic structure, chemical reactions, and the periodic table.',
    id: '28b5f53bf099',
    notes: 'Chemistry helps us understand the composition of everything around us.',
    priority: 3,
    rating: 4,
    selectedModels: ['Jupiter', 'Solar System'],
    title: 'Lesson 2: Introduction to Chemistry',
    video: 'https://youtu.be/b2t42Q4xRN9',
  },
  {
    additionalVideo: 'https://www.youtube.com/watch?v=DxL2HoqLbyA',
    author_id: 3,
    created_at: '2024-06-09T19:04:59.201Z',
    description: 'This lesson explores the fundamental concepts of biology.',
    explanation:
      'Biology is the study of living organisms and their interactions with the environment. We will cover cell structure, genetics, and evolution.',
    id: '38c6g64cg0aa',
    notes: 'Biology is crucial for understanding the complexity of life and the natural world.',
    priority: 1,
    rating: 5,
    selectedModels: ['Sun', 'Moon'],
    title: 'Lesson 3: Introduction to Biology',
    video: 'https://youtu.be/c3t53Q5xROA',
  },
  {
    additionalVideo: 'https://www.youtube.com/watch?v=DxL2HoqLbyA',
    author_id: 4,
    created_at: '2024-06-09T19:05:59.201Z',
    description: 'This lesson introduces the fundamental principles of geology.',
    explanation:
      'Geology is the study of the Earth, its materials, and the processes that shape it. This lesson covers topics such as plate tectonics, rock cycles, and geological formations.',
    id: '48d7h75dh0bb',
    notes:
      'Understanding geology is crucial for natural resource management and disaster preparedness.',
    priority: 4,
    rating: 4,
    selectedModels: ['Sun'],
    title: 'Lesson 4: Introduction to Geology',
    video: 'https://youtu.be/d4t64Q6xRPA',
  },
];

export default function ReelsPage() {
  useEffect(() => {
    localStorage.setItem('lessons', JSON.stringify(allLessons));
  }, []);
  return (
    <div className="w-full">
      <div className="pt-10">
        <h1 className="font-bold text-2xl pl-4 pb-2">All lessons:</h1>
        <ListOfLessons />
      </div>

      <div className="pt-5">
        <h1 className="font-bold text-2xl pl-4 pb-2">All quizzes:</h1>
        <ListOfQuizzes />
      </div>
    </div>
  );
}

