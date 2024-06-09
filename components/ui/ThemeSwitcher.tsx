'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={theme === 'dark' ? true : false}
          className="sr-only peer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <div className="w-9 h-6 bg-gray-200 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-1/2 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 hidden lg:flex">
          {(theme + '').replace(/^\w/, c => c.toUpperCase())}
        </span>
      </label>
    </button>
  );
};

