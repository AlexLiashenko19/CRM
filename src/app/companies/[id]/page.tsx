import Headers from '@/app/components/headers';
import React from 'react';

export interface PageProps {
    params: {id: string}
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Headers>({params.id})</Headers>
    </>
  );
}