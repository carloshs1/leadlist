export type LeadType = {
 phoneNumber: string
 name: string
 value?: string
 earnings?: string
 email?: string
 label?: string
 businessName?: string
 creationDate?: string
 creationTime?: string
 firstMessageDate?: string
 firstMessageTime?: string
 firstMessageContent?: string
 lastMessageDate?: string
 lastMessageTime?: string
 lastMessageContent?: string
 status?: string
 leadStatus?: string
 assignedTo?: string
 funnel?: string
 stage?: string
 archived?: string
 manuallyCreated?: string
}

export type LeadCSVType = {
 Archivado: string
 'Asignado a': string
 Compañia: string
 Correo: string
 Creado: string
 'Creado Manualmente': string
 Embudo: string
 'Estado de Lead': string
 Etapa: string
 Etiquetas: string
 'Fecha de primer mensaje': string
 'Fecha de último mensaje': string
 Ganado: string
 'Hora de creación': string
 'Hora del primer mensaje': string
 'Hora del ultimo mensaje': string
 Nombre: string
 'Primer mensaje': string
 Status: string
 Teléfono: string
 'Valor $': string
 'Último mensaje': string
}
