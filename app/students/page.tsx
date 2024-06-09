'use client'

import { students } from '@/__mock/students';
import Image from 'next/image';
import React from 'react';

import BlankProfile from '@/public/assets/images/blank_profile.png';
import { useRouter } from 'next/navigation';

const StudentsList = () => {
  const router = useRouter()

  return (
    <div className="flex justify-center mt-10 font-notoSans">
      <div className="max-w-3xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {students.map((student) => (
          <div onClick={() => router.push('students/' + student.id)} key={student.id} className="rounded-lg border-2 border-[#008CCF] p-2 cursor-pointer hover:bg-white hover:bg-opacity-10">
            <div className="flex gap-4">
              <div className="relative size-28 overflow-hidden rounded-full">
                <Image src={student.user_image || BlankProfile} alt="user image" />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-2xl text-[#008CCF] font-bold">{student.name}</div>

                  <div className="">{student.email}</div>
                </div>
                Created:
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }).format(student.created_at)}
                <br />
                id: {student.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
