import { Skeleton } from '@/components/ui/skeleton';
import React, { memo } from 'react';

const ReelCardSkeleton = () => {
  return (
    <div className="flex h-full w-full">
      <div className="grow flex p-4 flex-col justify-end">
        <div className="flex gap-3 items-center">
        <Skeleton className="h-8 w-8 rounded-full" />

        <Skeleton className='h-4 grow rounded' />
        </div>

        <div className="space-y-3 mt-3">
          <Skeleton className="h-4 w-3/4 rounded" />
          <Skeleton className="h-4 w-5/6 rounded" />
        </div>
      </div>

      <div className="w-12 md:mx-4"></div>
    </div>
  );
};

export default memo(ReelCardSkeleton);
