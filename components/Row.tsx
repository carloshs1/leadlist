import React from 'react'
import { LeadType } from '../utils/types'

const Row: React.FC<{ lead: LeadType }> = ({ lead }) => {
 return (
  <tr className="bg-white border-b hover:bg-gray-50">
   <td className="p-4">{lead.phoneNumber}</td>
   <td className="p-4">{lead.name}</td>
   <td className="p-4">{lead.value}</td>
   <td className="p-4">{lead.earnings}</td>
   <td className="p-4">{lead.email}</td>
   <td className="p-4">{lead.label}</td>
   <td className="p-4">{lead.businessName}</td>
   <td className="p-4">{lead.creationDate}</td>
   <td className="p-4">{lead.creationTime}</td>
   <td className="p-4">{lead.firstMessageDate}</td>
   <td className="p-4">{lead.firstMessageTime}</td>
   <td className="p-4">{lead.firstMessageContent}</td>
   <td className="p-4">{lead.lastMessageDate}</td>
   <td className="p-4">{lead.lastMessageTime}</td>
   <td className="p-4">{lead.lastMessageContent}</td>
   <td className="p-4">{lead.status}</td>
   <td className="p-4">{lead.leadStatus}</td>
   <td className="p-4">{lead.assignedTo}</td>
   <td className="p-4">{lead.funnel}</td>
   <td className="p-4">{lead.stage}</td>
   <td className="p-4">{lead.archived}</td>
   <td className="p-4">{lead.manuallyCreated}</td>
  </tr>
 )
}

export default Row
