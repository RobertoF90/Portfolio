import { React } from 'react';

import Header from './Components/Header/Header';
import LatestWorks from './Components/LatestWorks/LatestWorks';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Footer from './Components/Footer';
import axios from 'axios';

async function getData() {
  const response = await fetch('http://localhost:3000/api/projects');
  const data = await response.json();
  return data;
}

async function page() {
  const projects = await getData();
  return (
    <div>
      <Header />
      <LatestWorks projects={projects} />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default page;
