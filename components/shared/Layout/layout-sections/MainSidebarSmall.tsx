import Link from 'next/link';
import React, { memo } from 'react';
import SidebarComponents from '../../helpers/SidebarComponents';

const MainSidebarSmall = () => {
  return (
    <div className="relative dark:bg-black bg-white border-t w-full border-lightBorder dark:border-darkBorder">
      <ul className="w-full flex justify-around">
        {SidebarComponents.map(({ img, label, href }, i) =>
          label !== 'Search' && label !== 'Notifications' ? (
            <li key={i}>
              <Link
                href={href}
                aria-label={label}
                className="flex gap-4 p-3 my-1 dark:bg-white dark:bg-opacity-0 bg-black bg-opacity-0 hover:bg-opacity-10 rounded-xl transition-all">
                <div className="hover:scale-125 transition-all">{img}</div>

                <div className="lg:flex hidden">{label}</div>
              </Link>
            </li>
          ) : (
            ''
          )
        )}
      </ul>
    </div>
  );
};

export default memo(MainSidebarSmall);

