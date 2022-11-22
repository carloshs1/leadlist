import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import React, { useCallback, useRef, useState } from 'react'
import { LeadType } from '../utils/types'
import useAddLeads from '../hooks/useAddLeads'
import Row from '../components/Row'
import { leadsState } from '../atoms/leadsAtom'
import { useRecoilValue } from 'recoil'

const Home: NextPage = () => {
 const fullLeads = useRecoilValue(leadsState)
 const observer: React.MutableRefObject<IntersectionObserver | undefined> =
  useRef()
 const [pageNumber, setPageNumber] = useState(1)
 const [query, setQuery] = useState('')
 const {
  loading,
  hasMore,
  leads,
  numberOfLeads,
 }: {
  loading: boolean
  hasMore: boolean
  leads: LeadType[]
  numberOfLeads: number
 } = useAddLeads(pageNumber, query)
 const lastLeadOnTableRef = useCallback(
  (node: Element) => {
   if (loading) return
   if (observer.current) observer.current.disconnect()
   observer.current = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && hasMore) {
     setPageNumber((prevPageNumber) => prevPageNumber + 1)
    }
   })
   if (node) observer.current.observe(node)
  },
  [loading, hasMore]
 )
 return (
  <div className="flex flex-col items-center">
   <Head>
    <title>LeadList</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <main className="flex w-full flex-col items-center justify-center text-center py-5 px-3">
    {!fullLeads?.length ? (
     <div className="flex gap-1">
      <h1>You have no leads.</h1>
      <Link href={'/upload'} className="hover:text-violet-600">
       Upload yor file to start
      </Link>
     </div>
    ) : (
     <div className="sm:rounded-lg w-full max-w-7xl mx-auto p-2">
      <div className="pb-4 bg-white">
       <label htmlFor="table-search" className="sr-only">
        Search
       </label>
       <div className="relative mt-1">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
         <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           fillRule="evenodd"
           d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
           clipRule="evenodd"
          ></path>
         </svg>
        </div>
        <input
         type="text"
         id="table-search"
         className="block p-2 pl-10 w-full max-w-md text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
         placeholder="Search by name or phone number"
         onChange={(e) => {
          setQuery(e.target.value)
          setPageNumber(1)
         }}
        />
       </div>
      </div>
      <p>Number Of Leads: {numberOfLeads}</p>
      <div className="overflow-auto relative h-[60vh]">
       <table className="w-full text-xs text-left text-gray-500">
        <thead className="sticky top-0 text-xs text-gray-700 bg-gray-50">
         <tr>
          <th scope="col" className="py-3 px-6">
           Leads
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Phone Number
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Name
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Value $
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Earnings
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           E-mail
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Label
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Business Name
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Creation Date
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Creation Time
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Date of the First Message
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Time of the First Message
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           <p className="w-[600px]">Content of the First Message</p>
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Date of the Last Message
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Time of the Last Message
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           <p className="w-[600px]">Content of the Last Message</p>
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Status
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Lead Status
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Assigned to:
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Funnel
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Stage
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Archived
          </th>
          <th scope="col" className="py-3 px-6 whitespace-nowrap">
           Manually Created
          </th>
         </tr>
        </thead>
        <tbody>
         {leads.map((lead, index) =>
          leads.length - index === 4 ? (
           <Row
            innerRef={lastLeadOnTableRef}
            key={uuid()}
            lead={lead}
            index={index + 1}
           />
          ) : (
           <Row key={uuid()} lead={lead} index={index + 1} />
          )
         )}
         {loading && (
          <tr>
           <td>Loading</td>
          </tr>
         )}
        </tbody>
       </table>
      </div>
     </div>
    )}
   </main>
  </div>
 )
}

export default Home
