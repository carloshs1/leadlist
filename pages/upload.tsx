import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from 'react'

const UploadPage: NextPage = () => {
 const filePickerRef = useRef<HTMLInputElement | null>(null)
 const [file, setFile] = useState<string | ArrayBuffer | null>(null)
 const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  const reader = new FileReader()
  if (e.target.files![0]) {
   reader.readAsDataURL(e.target.files![0])
  }
  reader.onload = (readerEvent) => {
   setFile(readerEvent.target?.result!)
  }
 }
 console.warn({ file })
 return (
  <div className="flex min-h-screen flex-col items-center justify-center">
   <Head>
    <title>Upload - LeadList</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
    <button
     className="p-3 bg-violet-600 rounded-full shadow-lg"
     onClick={() => filePickerRef.current?.click()}
    >
     <ArrowUpTrayIcon className="h-8 text-white" />
    </button>
    <form>
     <input
      ref={filePickerRef}
      accept=".csv"
      type="file"
      hidden
      onChange={uploadFile}
     />
    </form>
   </main>
  </div>
 )
}

export default UploadPage
