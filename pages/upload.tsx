import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import Papa from 'papaparse'
import { LeadCSVType, LeadType } from '../utils/types'
import { useSetRecoilState } from 'recoil'
import { leadsState } from '../atoms/leadsAtom'
import { useRouter } from 'next/router'

const UploadPage: NextPage = () => {
 const router = useRouter()
 const filePickerRef = useRef<HTMLInputElement | null>(null)
 // const [file, setFile] = useState<string | ArrayBuffer | null>(null)
 const setLeads = useSetRecoilState(leadsState)
 const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
  Papa.parse(e.target.files![0], {
   header: true,
   skipEmptyLines: true,
   complete: function ({ data }: { data: LeadCSVType[] }) {
    const leads: LeadType[] = data.map((leadCSV) => ({
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
    setLeads(leads)
    router.push('/')
   },
  })
 }
 // console.warn({ file })
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
