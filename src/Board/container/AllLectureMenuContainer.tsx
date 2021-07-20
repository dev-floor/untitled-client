import React, { useState, useEffect } from 'react';

import { allLectureApi } from 'api/api';
import { AllLectureDetailApi } from 'api/ApiProps';
import AllLectureMenu from '../presentational/AllLectureMenu';

const AllLectureMenuContainer = () => {
  const [allLectureData, setAllLectureData] = useState<AllLectureDetailApi[]>(
    []
  );

  const loadData = async () => {
    const totalLectureInfo = await allLectureApi.get();
    setAllLectureData(totalLectureInfo);
  };

  useEffect(() => {
    loadData();
  }, []);

  return <AllLectureMenu allLectureData={allLectureData} />;
};

export default AllLectureMenuContainer;
