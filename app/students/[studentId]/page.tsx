'use client';

import { students } from '@/__mock/students';
import SpinnerLoader from '@/components/shared/common/SpinnerLoader';
import { Student } from '@/types/Student';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import BlankProfile from '@/public/assets/images/blank_profile.png';
import React, { useEffect, useState } from 'react';
import { Award, Star } from 'lucide-react';

const Page = () => {
  const [currentStudent, setCurrentStudent] = useState<Student>();
  const params = useParams();

  useEffect(() => {
    setCurrentStudent(students.find((student) => student.id === +params.studentId));
  }, [params.studentId]);

  return currentStudent ? (
    <div className="flex justify-center mt-10 font-notoSans">
      <div className="max-w-3xl w-full border border-[#008CCF] rounded-lg p-5">
        <div className="flex gap-5">
          <Image
            src={currentStudent.user_image || BlankProfile}
            alt="user image"
            className="rounded size-48"
          />

          <div className="flex flex-col gap-2">
            <div className="font-bold text-2xl mt-2">
              {currentStudent.name} <br /> Age: {currentStudent.age}
            </div>

            <div className="">{currentStudent.description}</div>
            <div className="flex mt-5 gap-2"> Grade point average <span className='flex gap-1 items-center'>{currentStudent.rating} <Star fill='white' size={15} /></span></div>
          </div>
        </div>

        <div className="flex gap-4 mt-5 flex-wrap">
          {currentStudent.achievements.map((achievement, i) => (
            <div
              key={i}
              className="flex gap-2 flex-wrap border border-[#FFD700] rounded-md bg-[#B98436] font-bold p-2">
              <Award />
              {achievement}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <SpinnerLoader />
  );
};

export default Page;
