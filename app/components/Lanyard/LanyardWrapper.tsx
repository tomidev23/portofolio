'use client';

import dynamic from 'next/dynamic';

// dynamic import agar Canvas tidak dirender di server
const Lanyard = dynamic(() => import('./Lanyard'), {
  ssr: false,
  loading: () => <div>Loading 3D scene...</div>,
});

export default function LanyardWrapper() {
  return <Lanyard />;
}
