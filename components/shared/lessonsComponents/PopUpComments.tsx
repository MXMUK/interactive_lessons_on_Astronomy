import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import CommentsIcon from '@/public/assets/icons/svg/CommentsIcon';
import { Comment } from '@/types/Comment';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { FC, KeyboardEvent, useState } from 'react';

interface Props {
  comments: Comment[];
  setComments: (newComments: Comment[]) => void;
}

const PopUpComments: FC<Props> = ({ comments, setComments }) => {
  const [value, setValue] = useState('');

  const publishNewComment = () => {
    const newComment = {
      id: comments.length + 1,
      username: 'you',
      time: '1s.',
      text: value,
    };
    setComments([...comments, newComment]);
    setValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      publishNewComment();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none hover:scale-110">
          <CommentsIcon className="group-hover:scale-110 transition-all pointer-events-none" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={10}
        align="start"
        side="top"
        className=" w-80 mr-2 md:mr-0 outline-none rounded-l bg-regularGray flex flex-col text-white text-sm">
        <div className="p-6 font-bold relative flex justify-center text-base">
          <DropdownMenuItem className="absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer">
            <X height={24} strokeWidth={1} />
          </DropdownMenuItem>
          Comments
        </div>

        <div className="overflow-auto max-h-[30vh] w-full px-8">
          {comments &&
            comments.map((comment) => {
              const { id, username, text, time } = comment;
              return (
                <div key={id} className="flex gap-2 space-y-2">
                  <div className="size-8 bg-purple-700 rounded-full shrink-0 mt-2"></div>

                  <div>
                    <div className="text-textGray">
                      <span className="font-semibold text-white ">{username}</span> {time}
                    </div>

                    <div>{text}</div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="px-7">
          <div className="bg-black rounded-full p-1 border my-3 flex gap-3 justify-between items-center">
            <div className="overflow-hidden size-8 rounded-full bg-slate-400 shrink-0">
              <Image
                src="https://i.imgur.com/waaK1BK.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>

            <Input
              placeholder="Add a comment..."
              variant="comment"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            {value && (
              <div
                className="font-semibold text-blue-600 cursor-pointer pr-2"
                onClick={() => {
                  publishNewComment();
                }}>
                Publish
              </div>
            )}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PopUpComments;
