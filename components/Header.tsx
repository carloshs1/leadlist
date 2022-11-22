import Link from 'next/link'
import React from 'react'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'

const Header: React.FC = () => {
 return (
  <header className="flex sticky top-0 z-50 bg-white px-4 py-2 shadow-sm items-center w-full justify-between">
   <div className="cursor-pointer">
    <Link href={'/'} passHref className="flex items-center gap-3">
     <ChatBubbleOvalLeftIcon className="h-9 text-violet-600" />
     <h1 className="hidden sm:inline-block text-4xl font-thin">LeadList</h1>
    </Link>
   </div>
   <div className="cursor-pointer hover:text-gray-600">
    <Link href={'/upload'} passHref className="flex items-center gap-3">
     <p className="font-thin">Upload your leads</p>
    </Link>
   </div>
  </header>
 )
}

export default Header
