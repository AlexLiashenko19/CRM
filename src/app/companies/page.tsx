import React from 'react';
import SearchInput from '@/app/components/search-input';
import AddCompanyButton from '@/app/components/add-company-button';
// import CompanyTable from '@/app/components/company-table';
// import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';
import Headers from '@/app/components/header';
import ToolBar from '../components/toolbar';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Headers>Companies</Headers>
      <main>
        <ToolBar actions={<AddCompanyButton />}>
          <SearchInput />
        </ToolBar>
        {/* <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable> */}
      </main>
    </>
  );
}
