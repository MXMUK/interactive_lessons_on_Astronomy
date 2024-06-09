import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { OfModel } from '@/types/OfModel';
import Image from 'next/image';
import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquareHeart } from 'lucide-react';

interface Props {
  model: OfModel;
}

const MiniProfile: FC<Props> = ({ model }) => {
  const { username, title, description } = model;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none flex items-center gap-3">
          <div className="overflow-hidden h-8 w-8 rounded-full pointer-events-none">
            <Image
              src="https://i.imgur.com/waaK1BK.png"
              width={32}
              height={32}
              alt="Picture of the author"
            />
          </div>

          {username}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={10}
        side="top"
        align="start"
        className="max-w-72 outline-none divide-y divide-darkBorder rounded-lg p-3 dark:bg-black bg-white flex flex-col border border-regularGray">
        <div className="flex gap-4 items-center pb-2">
          <div className="rounded-full h-14 w-14 overflow-hidden">
            <Image
              src="https://i.imgur.com/waaK1BK.png"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>

          <div>
            <div>{username}</div>

            <div className=" text-textGray">{title}</div>
          </div>
        </div>

        <div className="pt-2">
            <div className="pb-3 text-sm">{description}</div>

            <Button className='flex w-full gap-2 font-bold mx-auto text-white'><MessageSquareHeart /> Chat with me</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MiniProfile;
