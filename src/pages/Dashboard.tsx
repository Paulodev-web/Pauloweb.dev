import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Phone, 
  Globe, 
  MessageSquare, 
  Trash2, 
  Eye,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react';
import { ContactService, Contact } from '../services/supabase';

const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const data = await ContactService.getContacts();
      setContacts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar contatos');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja deletar este contato?')) {
      return;
    }

    try {
      await ContactService.deleteContact(id);
      setContacts(contacts.filter(contact => contact.id !== id));
      if (selectedContact?.id === id) {
        setSelectedContact(null);
      }
    } catch (err) {
      alert('Erro ao deletar contato');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getSiteTypeLabel = (type: string) => {
    const types: Record<string, string> = {
      'landing-page': 'Landing Page Express',
      'site-institucional': 'Site Institucional',
      'loja-simples': 'Loja Simples',
      'outro': 'Outro'
    };
    return types[type] || type;
  };

  const stats = {
    total: contacts.length,
    thisMonth: contacts.filter(contact => {
      const contactDate = new Date(contact.created_at);
      const now = new Date();
      return contactDate.getMonth() === now.getMonth() && 
             contactDate.getFullYear() === now.getFullYear();
    }).length,
    landingPages: contacts.filter(contact => contact.site_type === 'landing-page').length,
    institutional: contacts.filter(contact => contact.site_type === 'site-institucional').length
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-neutral-600 dark:text-neutral-400">Carregando contatos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Dashboard de Contatos
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Gerencie todos os contatos recebidos através do seu site
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Total de Contatos</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{stats.total}</p>
              </div>
              <Users className="h-8 w-8 text-primary-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Este Mês</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{stats.thisMonth}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Landing Pages</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{stats.landingPages}</p>
              </div>
              <Globe className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Sites Institucionais</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{stats.institutional}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </motion.div>

        {error && (
          <motion.div 
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Contatos */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Contatos Recebidos ({contacts.length})
                </h2>
              </div>
              
              <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                {contacts.length === 0 ? (
                  <div className="p-8 text-center">
                    <MessageSquare className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                    <p className="text-neutral-500 dark:text-neutral-400">
                      Nenhum contato recebido ainda
                    </p>
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <motion.div
                      key={contact.id}
                      className={`p-6 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 cursor-pointer transition-colors ${
                        selectedContact?.id === contact.id ? 'bg-primary-50 dark:bg-primary-900/20' : ''
                      }`}
                      onClick={() => setSelectedContact(contact)}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">
                            {contact.name}
                          </h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                            {getSiteTypeLabel(contact.site_type)}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(contact.created_at)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              {contact.whatsapp}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedContact(contact);
                            }}
                            className="p-2 text-neutral-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(contact.id);
                            }}
                            className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </motion.div>

          {/* Detalhes do Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 sticky top-4">
              <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Detalhes do Contato
                </h2>
              </div>
              
              {selectedContact ? (
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Nome
                    </label>
                    <p className="text-neutral-900 dark:text-white font-medium">
                      {selectedContact.name}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      WhatsApp
                    </label>
                    <a 
                      href={`https://wa.me/55${selectedContact.whatsapp.replace(/\D/g, '')}`}
                      className="text-primary-500 hover:text-primary-600 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedContact.whatsapp}
                    </a>
                  </div>

                  {selectedContact.website_url && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                        Website/Instagram
                      </label>
                      <a 
                        href={selectedContact.website_url.startsWith('http') ? selectedContact.website_url : `https://${selectedContact.website_url}`}
                        className="text-primary-500 hover:text-primary-600 break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selectedContact.website_url}
                      </a>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Tipo de Site
                    </label>
                    <p className="text-neutral-900 dark:text-white">
                      {getSiteTypeLabel(selectedContact.site_type)}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Mensagem
                    </label>
                    <p className="text-neutral-900 dark:text-white whitespace-pre-wrap">
                      {selectedContact.message}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Data de Envio
                    </label>
                    <p className="text-neutral-900 dark:text-white">
                      {formatDate(selectedContact.created_at)}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <button
                      onClick={() => handleDelete(selectedContact.id)}
                      className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      Deletar Contato
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <MessageSquare className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
                  <p className="text-neutral-500 dark:text-neutral-400">
                    Selecione um contato para ver os detalhes
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 