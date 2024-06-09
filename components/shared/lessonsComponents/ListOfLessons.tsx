'use client';

import React, { FC, memo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import LessonImage from '@/public/assets/lesson.jpg';

SwiperCore.use([Keyboard, Mousewheel]);

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import SpinnerLoader from '../common/SpinnerLoader';
import { useRouter } from 'next/navigation';

const ListOfLessons = () => {
  const [allLessons, setAllLessons] = useState<Lesson[]>([]);
  const router = useRouter();

  useEffect(() => {
    const lessonsString = localStorage.getItem('lessons');
    const allLessons = lessonsString ? JSON.parse(lessonsString) : [];

    setAllLessons(allLessons);
  }, [setAllLessons]);

  return (
    <div className="flex justify-center items-center px-5">
      <Swiper
        className="w-full h-80"
        slidesPerView={4} // Adjust this number according to your design needs
        spaceBetween={30} // Adjust this for space between slides
        keyboard={{ enabled: true }}
        mousewheel={{ enabled: true }}>
        {allLessons ? (
          allLessons.map((lesson) => (
            <SwiperSlide
              onClick={() => router.push('study/lesson/' + lesson.id)}
              key={lesson.id}
              className="relative rounded-md overflow-hidden border cursor-pointer h-full">
              <div className="relative">
                <div className="absolute top-2 right-2 text-sm">Lesson</div>

                <Image src={LessonImage} alt="astronomy lesson" className="border-b" />
              </div>

              <div className="p-2">
                <h3 className="text-center font-bold">{lesson.title}</h3>

                <div className="mt-2 line-clamp-2 mb-5 text-sm">{lesson.description}</div>

                <div className="flex justify-between mt-2 absolute bg-white dark:bg-black left-1 right-1 bottom-1">
                  <div className="flex items-center">
                    {Array.from(Array(5).keys()).map((item) =>
                      item < lesson.rating ? (
                        <svg
                          key={item}
                          className="w-4 h-4 text-yellow-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ) : (
                        <svg
                          key={item}
                          className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      )
                    )}
                  </div>

                  <div className=" text-sm">
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    }).format(new Date(lesson.created_at))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SpinnerLoader />
        )}
      </Swiper>
    </div>
  );
};

export default memo(ListOfLessons);
