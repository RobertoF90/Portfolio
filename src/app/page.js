import { React } from 'react';

import Header from './Components/Header/Header';
// import LatestWorks from './Components/LatestWorks/LatestWorks';
import LatestWorksSection from './Components/LatestWorks/LatestWorksSection';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer';

async function page() {
  return (
    <div>
      <Header />
      <LatestWorksSection />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default page;
