'use client';

import SpinnerLoader from '@/components/shared/common/SpinnerLoader';
import LessonCanvas from '@/components/shared/lessonsComponents/LessonCanvas';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player";

const LessonPage = () => {
  const [currentLesson, setCurrentLesson] = useState<Lesson>();
  const params = useParams();

  useEffect(() => {
    const lessonsString = localStorage.getItem('lessons');
    const allLessons: Lesson[] = lessonsString ? JSON.parse(lessonsString) : [];

    setCurrentLesson(allLessons.find((lesson) => lesson.id === params.lessonId));
  }, [params.lessonId]);

  return currentLesson ? (
    <div className="flex justify-center mt-10 font-notoSans relative">
      <div className="max-w-3xl w-full">
        <h4 className="font-bold text-2xl text-center">{currentLesson.title}</h4>
        <div className="text-sm text-[#008CCF] absolute -top-10 left-2">
          Priority: {currentLesson.priority}
        </div>

        <div className="h-[600px]">
          <LessonCanvas models={currentLesson.selectedModels} />
        </div>

        <div className="font-bold">{currentLesson.description}</div>
        <br />

        <p>{currentLesson.explanation}</p>

        <div className="flex justify-center mt-4">
          <ReactPlayer
            width="100%"
            url={currentLesson.video}
            controls={true}
            light={false}
            pip={true}
          />
          <source src={currentLesson.video} type="video/mp4" />
        </div>

        <div className="flex mt-10 justify-between">
          Author: {currentLesson.author_id}

          <div className="">{new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }).format(new Date(currentLesson.created_at))}</div>
        </div>
      </div>
    </div>
  ) : (
    <SpinnerLoader />
  );
};

export default LessonPage;
