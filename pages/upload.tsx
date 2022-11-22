import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import Papa from 'papaparse'
import { LeadCSVType, LeadType } from '../utils/types'
import { useRecoilState } from 'recoil'
import { leadsState } from '../atoms/leadsAtom'
import { useRouter } from 'next/router'

const UploadPage: NextPage = () => {
 const router = useRouter()
 const filePickerRef = useRef<HTMLInputElement | null>(null)
 const [leads, setLeads] = useRecoilState(leadsState)
 const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  Papa.parse(e.target.files![0], {
   header: true,
   skipEmptyLines: true,
   complete: function ({ data }: { data: LeadCSVType[] }) {
    const newLeads: LeadType[] = data.map((leadCSV) => ({
     phoneNumber: leadCSV.Teléfono,
     name: leadCSV.Nombre,
     value: leadCSV['Valor $'],
     earnings: leadCSV.Ganado,
     email: leadCSV.Correo,
     label: leadCSV.Etiquetas,
     businessName: leadCSV.Compañia,
     creationDate: leadCSV.Creado,
     creationTime: leadCSV['Hora de creación'],
     firstMessageDate: leadCSV['Fecha de primer mensaje'],
     firstMessageTime: leadCSV['Hora del primer mensaje'],
     firstMessageContent: leadCSV['Primer mensaje'],
     lastMessageDate: leadCSV['Fecha de último mensaje'],
     lastMessageTime: leadCSV['Hora del ultimo mensaje'],
     lastMessageContent: leadCSV['Último mensaje'],
     status: leadCSV.Status,
     leadStatus: leadCSV['Estado de Lead'],
     assignedTo: leadCSV['Asignado a'],
     funnel: leadCSV.Embudo,
     stage: leadCSV.Etapa,
     archived: leadCSV.Archivado,
     manuallyCreated: leadCSV['Creado Manualmente'],
    }))
    setLeads([...leads, ...newLeads])
    router.push('/')
   },
  })
 }
 return (
  <div className="flex min-h-[60vh] flex-col items-center justify-center">
   <Head>
    <title>Upload - LeadList</title>
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center gap-5">
    <h1 className="font-thin text-2xl">
     {!leads.length
      ? 'Start by selecting a .csv file'
      : 'Click to add more leads!'}
    </h1>
    <button
     className="p-3 bg-violet-600 rounded-full shadow-lg hover:shadow-2xl hover:bg-gradient-to-tr from-violet-700 via-purple-800 to-violet-700"
     onClick={() => filePickerRef.current?.click()}
    >
     <ArrowUpTrayIcon className="h-8 text-white" />
    </button>
    <input
     ref={filePickerRef}
     accept=".csv"
     type="file"
     hidden
     onChange={uploadFile}
    />
   </main>
  </div>
 )
}

export default UploadPage
