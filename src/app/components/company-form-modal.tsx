'use client'

import React from "react"
import CompanyForm, { CompanyFormProps } from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';

export interface CompanyModalFormProps extends ModalProps {
    onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal ({onSubmit, ...rest}: CompanyModalFormProps) {
    return (
        <Modal {...rest}>
            <CompanyForm onSubmit={onSubmit} />
        </Modal>
    )
}