import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { leadsState } from '../atoms/leadsAtom'
import { LeadType } from '../utils/types'

const useAddLeads = (pageNumber: number) => {
 const fullLeads = useRecoilValue(leadsState)
 const [loading, setLoading] = useState(true)
 const [leads, setLeads] = useState<LeadType[]>([])
 const [hasMore, setHasMore] = useState(false)
 const numberOfLeads = fullLeads.length
 useEffect(() => {
  setLoading(true)
  const newLeads = fullLeads.slice((pageNumber - 1) * 15, pageNumber * 15)
  setLeads((prevLeads) => [...prevLeads, ...newLeads])
  setHasMore(leads.length <= fullLeads.length)
  setLoading(false)
 }, [pageNumber])
 return { loading, leads, hasMore, numberOfLeads }
}

export default useAddLeads
