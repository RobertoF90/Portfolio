import React from 'react';

import { NEXT_URL } from '@/lib/utils/nextUrl';

import Admin from '../ui/admin/Admin';
async function getData() {
  const res = await fetch(`${NEXT_URL}/api/projects`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

export default async function page() {
  const projects = await getData();

  return <Admin projects={projects.reverse()} />;
}
