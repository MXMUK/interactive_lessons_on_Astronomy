'use client';

import React, { useCallback, useEffect, useState } from 'react';
import ModelsTable from '@/components/shared/adminComponents/allModels/modelsTable';
import { OfModel } from '@/types/OfModel';
import { getAllModels } from '@/services/ofModels';

import { Input } from '@/components/ui/input';

import TablePagination from '@/components/shared/adminComponents/allModels/pagination';
import { Search } from 'lucide-react';
import AddModelDialog from '@/components/shared/adminComponents/allModels/addModelDialog';

const Models = () => {
  const [allModels, setAllModels] = useState<OfModel[]>([]);
  const [filteredModels, setFilteredModels] = useState<OfModel[]>([]);
  const [searchInput, setSearchInput] = useState('');

  const loadModels = useCallback(async () => {
    const response = await getAllModels();

    setAllModels(response.ofmodels);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    loadModels();
  }, [loadModels]);

  useEffect(() => {
    searchInput
      ? setFilteredModels(
          allModels.filter(
            (item) =>
              item.username.includes(searchInput) ||
              item.of_campaign_url.includes(searchInput) ||
              item.title.includes(searchInput)
          )
        )
      : setFilteredModels([...allModels]);
  }, [searchInput, allModels, loadModels]);

  return (
    <div className="h-screen px-4 flex flex-col mt-5">
      <div className="flex justify-between items-center">
        <div className="relative flex">
          <Search className="absolute top-1/2 -translate-y-1/2 ml-1" />

          <Input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
            className="w-60 px-8"
          />
        </div>

        <AddModelDialog />
      </div>

      <div className=" grow mt-5">
        <ModelsTable models={filteredModels} />

        <TablePagination />
      </div>
    </div>
  );
};

export default Models;
