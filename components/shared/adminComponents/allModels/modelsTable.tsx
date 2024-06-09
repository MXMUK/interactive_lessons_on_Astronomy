import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { OfModel } from '@/types/OfModel';
import { ArrowDownUp, FileX, MoreVertical, Pencil } from 'lucide-react';
import React, { FC } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

interface Prop {
  models: OfModel[];
}

const ModelsTable: FC<Prop> = ({ models }) => {
  return (
    <Table>
      <TableHeader className="sticky top-0">
        <TableRow>
          <TableHead className="w-[100px]">
            <div className="flex gap-2 items-center">
              <ArrowDownUp size={15} color="#008CCF" cursor={'pointer'} /> id
            </div>
          </TableHead>

          <TableHead className="">
            <div className="flex gap-2 items-center">
              <ArrowDownUp size={15} color="#008CCF" cursor={'pointer'} /> of_nick
            </div>
          </TableHead>

          <TableHead>
            <div className="flex gap-2 items-center">
              <ArrowDownUp size={15} color="#008CCF" cursor={'pointer'} /> of_campaign_url
            </div>
          </TableHead>

          <TableHead>
            <div className="flex gap-2 items-center">
              <ArrowDownUp size={15} color="#008CCF" cursor={'pointer'} /> description
            </div>
          </TableHead>

          <TableHead>
            <div className="flex gap-2 items-center">
              <ArrowDownUp size={15} color="#008CCF" cursor={'pointer'} /> title
            </div>
          </TableHead>

          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {models.map((model) => {
          const { id, username, of_campaign_url, description, title } = model;

          return (
            <TableRow key={id}>
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell className="underline">{username}</TableCell>
              <TableCell>{of_campaign_url}</TableCell>
              <TableCell>{description}</TableCell>
              <TableCell>{title}</TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <Button variant="destructive" size="smIcon" className="rounded hover:border">
                      <MoreVertical />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="rounded w-auto p-0">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 hover:underline cursor-pointer px-4 pt-2">
                        <Pencil width={15} /> Edit
                      </div>
                      <div className="flex gap-2 hover:underline cursor-pointer px-4 pb-2">
                        <FileX width={15} /> Remove
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ModelsTable;
