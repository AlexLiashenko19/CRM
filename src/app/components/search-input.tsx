import React, { InputHTMLAttributes } from 'react';
import Image from 'next/image';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SearchInput({
  onSearchClick,
  ...rest
}: SearchInputProps) {
  return (
    <div className="relative w-96">
      <input {...rest} type="text" className='flex-1 py-3 px-3 w-full h-11 rounded border border-gray-300 text-sm bg-gray-50'/>
        <button type='button' className='absolute right-0 p-3' onClick={onSearchClick}>
            <Image 
            width={20}
            height={20}
            src="/icons/magnifying-glass.svg"
            alt='search icon'/>
        </button>
    </div>
  );
}
