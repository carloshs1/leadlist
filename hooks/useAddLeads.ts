import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { leadsState } from '../atoms/leadsAtom'
import { LeadType } from '../utils/types'

const useAddLeads = (pageNumber: number, query: string) => {
 const fullLeads = useRecoilValue(leadsState)
 const [loading, setLoading] = useState(true)
 const [leads, setLeads] = useState<LeadType[]>([])
 const [hasMore, setHasMore] = useState(false)
 const filteredLeads = fullLeads.filter(
  (lead) =>
   lead.name.toLowerCase().includes(query.toLowerCase()) ||
   lead.phoneNumber.includes(query)
 )
 const numberOfLeads = !query ? fullLeads.length : filteredLeads.length
 useEffect(() => {
  setLeads([])
 }, [query])
 useEffect(() => {
  setLoading(true)
  const newLeads = !query
   ? fullLeads.slice((pageNumber - 1) * 15, pageNumber * 15)
   : filteredLeads.slice((pageNumber - 1) * 15, pageNumber * 15)
  setLeads((prevLeads) => [...prevLeads, ...newLeads])
  setHasMore(leads.length <= fullLeads.length)
  setLoading(false)
 }, [query, pageNumber])
 return { loading, leads, hasMore, numberOfLeads }
}

export default useAddLeads
