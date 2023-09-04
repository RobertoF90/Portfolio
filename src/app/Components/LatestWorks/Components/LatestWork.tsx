'use client'

import React, { use } from 'react'

import { useEffect, useState } from 'react';



 function LatestWork() {
  const [data, setData] = useState([])

  useEffect(() => {

    async function getData() {
      const res = await fetch('http://localhost:5000/api/v1/project');
    
      // if (!res.ok) {
      //   throw new Error('Failed to fetch resources');
      // }

     const data =  await res.json()
     setData(data);

    }
    getData();
    }, [])



  return (
    <div>
      {data.map(work => <div>{work.title} {work.description}
      {
        work.image && 
      <img src={`http://localhost:5000/${work.image}`} />
      
      }
      
       </div>)}
    </div>
  )
}


export default LatestWork