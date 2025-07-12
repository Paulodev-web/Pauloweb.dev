import { createClient } from '@supabase/supabase-js'
import { supabaseConfig } from '../config/supabase-config'

// Debug: verificar se variáveis estão carregando
console.log('🔍 Debug Supabase Config:')
console.log('ENV URL:', import.meta.env.VITE_SUPABASE_URL)
console.log('ENV KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'PRESENTE' : 'AUSENTE')
console.log('Config URL:', supabaseConfig.url)
console.log('Config KEY:', supabaseConfig.anonKey ? 'PRESENTE' : 'AUSENTE')

// Usar configuração do arquivo ou variáveis de ambiente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || supabaseConfig.url
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || supabaseConfig.anonKey

console.log('🔧 Using URL:', supabaseUrl)
console.log('🔧 Using KEY:', supabaseAnonKey ? 'PRESENTE' : 'AUSENTE')

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase configuration!')
  throw new Error('Missing Supabase configuration')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para os dados do contato
export interface Contact {
  id: number
  name: string
  whatsapp: string
  website_url?: string
  site_type: string
  message: string
  created_at: string
  updated_at: string
}

// Interface para criar um novo contato
export interface CreateContactData {
  name: string
  whatsapp: string
  website_url?: string
  site_type: string
  message: string
}

// Funções para gerenciar contatos
export class ContactService {
  // Criar um novo contato
  static async createContact(data: CreateContactData): Promise<Contact> {
    console.log('🚀 Tentando criar contato:', data);
    
    const { data: contact, error } = await supabase
      .from('contacts')
      .insert([data])
      .select()
      .single()

    if (error) {
      console.error('❌ Erro ao criar contato:', error)
      console.error('Detalhes completos:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      });
      throw new Error('Erro ao enviar mensagem. Tente novamente.')
    }

    console.log('✅ Contato criado com sucesso:', contact);
    return contact
  }

  // Listar todos os contatos (ordenados por data de criação)
  static async getContacts(): Promise<Contact[]> {
    const { data: contacts, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Erro ao buscar contatos:', error)
      throw new Error('Erro ao carregar contatos.')
    }

    return contacts || []
  }

  // Buscar um contato específico por ID
  static async getContactById(id: number): Promise<Contact | null> {
    const { data: contact, error } = await supabase
      .from('contacts')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Erro ao buscar contato:', error)
      return null
    }

    return contact
  }

  // Deletar um contato
  static async deleteContact(id: number): Promise<void> {
    const { error } = await supabase
      .from('contacts')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Erro ao deletar contato:', error)
      throw new Error('Erro ao deletar contato.')
    }
  }
} 