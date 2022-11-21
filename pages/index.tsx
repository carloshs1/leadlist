import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { leadsState } from '../atoms/leadsAtom'

const Home: NextPage = () => {
 const leads = useRecoilValue(leadsState)
 return (
  <div className="flex min-h-screen flex-col items-center justify-center">
   <Head>
    <title>LeadList</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
    {!leads?.length ? (
     <div className="flex gap-1">
      <h1>You have no leads.</h1>
      <Link href={'/upload'} className="hover:text-blue-700">
       Upload yor file to start
      </Link>
     </div>
    ) : (
     <>
      {leads.map((lead) => (
       <h1>{lead.name}</h1>
      ))}
     </>
    )}
   </main>
  </div>
 )
}

export default Home
