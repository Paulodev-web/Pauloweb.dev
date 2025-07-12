// Debug do Supabase - arquivo temporário para identificar o problema
import { createClient } from '@supabase/supabase-js'

// Hardcoded para teste (remover depois)
const SUPABASE_URL = 'https://brqtbvrzhsjoxdpgkbsw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycXRidnJ6aHNqb3hkcGdrYnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMzkwMDYsImV4cCI6MjA2NzgxNTAwNn0.4SBQ2mTvxhbE2ge4TOa3kkn0Z9TsW7WcSLmxcdWuw3Y'

console.log('🔍 Debug Supabase Config:')
console.log('URL from env:', import.meta.env.VITE_SUPABASE_URL)
console.log('Key from env:', import.meta.env.VITE_SUPABASE_ANON_KEY)
console.log('Hardcoded URL:', SUPABASE_URL)
console.log('Hardcoded Key length:', SUPABASE_ANON_KEY.length)

// Criar cliente com valores hardcoded
export const supabaseDebug = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export const testDirectInsert = async () => {
  console.log('🧪 Testando inserção direta...')
  
  const testData = {
    name: 'Teste Direto Frontend',
    whatsapp: '(11) 99999-9999',
    site_type: 'landing-page',
    message: 'Teste direto do frontend'
  }

  try {
    const { data, error } = await supabaseDebug
      .from('contacts')
      .insert([testData])
      .select()
      .single()

    if (error) {
      console.error('❌ Erro na inserção:', error)
      console.error('Detalhes do erro:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      })
      return { success: false, error }
    } else {
      console.log('✅ Inserção bem-sucedida:', data)
      return { success: true, data }
    }
  } catch (err) {
    console.error('❌ Erro inesperado:', err)
    return { success: false, error: err }
  }
} 