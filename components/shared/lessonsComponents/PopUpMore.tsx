import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import MoreIcon from '@/public/assets/icons/svg/MoreIcon';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import React from 'react';

type Checked = DropdownMenuCheckboxItemProps['checked'];

const PopUpMore = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none hover:scale-110">
          <MoreIcon className="pointer-events-none" width={24} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={10}
        align="start"
        side='top'
        className="min-w-72 mr-2 md:mr-0 outline-none rounded-lg p-1 bg-regularGray flex flex-col text-white text-sm">
        <a className="bg-white text-red-600 cursor-pointer bg-opacity-0 p-4 rounded-md hover:bg-opacity-20">Report</a>

        <a className="bg-white text-blue-600 cursor-pointer bg-opacity-0 p-4 rounded-md hover:bg-opacity-20">Follow</a>

        <a className="bg-white cursor-pointer bg-opacity-0 p-4 rounded-md hover:bg-opacity-20">Go to post</a>

        <a className="bg-white cursor-pointer bg-opacity-0 p-4 rounded-md hover:bg-opacity-20">Share to...</a>

        <a className="bg-white cursor-pointer bg-opacity-0 p-4 rounded-md hover:bg-opacity-20">Copy link</a>

        <a className="bg-white cursor-pointer bg-opacity-0 p-4 rounded-md hover:bg-opacity-20">Enabled</a>

        <a className="bg-white cursor-pointer bg-opacity-0 p-4 rounded-md hover:bg-opacity-20"> About this account</a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PopUpMore;

