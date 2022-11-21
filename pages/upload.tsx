import { NextPage } from 'next'
import Head from 'next/head'

const UploadPage: NextPage = () => {
 return (
  <div className="flex min-h-screen flex-col items-center justify-center">
   <Head>
    <title>Upload - LeadList</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
    <h1>Upload</h1>
   </main>
  </div>
 )
}

export default UploadPage
