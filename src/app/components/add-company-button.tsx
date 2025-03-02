'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Button from './button';

export interface AddCompanyButtonProps {
    
}

export default function AddCompanyButton ({}) {
    const [show, setShow] = useState(false);
    return (
        <Button onClick={() => setShow(true)}>Add Company</Button>
    )
}