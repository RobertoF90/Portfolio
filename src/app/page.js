import React from 'react';
import Header from './Components/Header/Header';
import LatestWorks from './Components/LatestWorks/LatestWorks';

function page({ user }) {
  return (
    <div>
      <Header />
      <LatestWorks />
    </div>
  );
}

export default page;
