import React from 'react';

import Header from './Components/Header/Header';
import LatestWorks from './Components/LatestWorks/LatestWorks';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer';

async function page({ user }) {
  return (
    <div>
      <Header />
      <LatestWorks />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default page;
