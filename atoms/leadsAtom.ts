import { atom } from 'recoil'
import { LeadType } from '../utils/types'

export const leadsState = atom<LeadType[]>({
 key: 'leadsState',
 default: [],
})
