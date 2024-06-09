import SpinnerLoader from '@/components/shared/common/SpinnerLoader';
import ReelCardSkeleton from '@/components/shared/lessonsComponents/ReelCardSkeleton';
import React from 'react';

const loading = () => {
  return (
    <div className="h-full w-full flex py-[5%] justify-center">
      <SpinnerLoader />
    </div>
  );
};

export default loading;
