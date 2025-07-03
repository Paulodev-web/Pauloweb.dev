import { useNavigate } from 'react-router-dom';
import { storageService } from '../services/storage';

export default function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    storageService.setAdminLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Painel Administrativo</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Sair
            </button>
          </div>

          <div className="bg-white dark:bg-neutral-800 shadow overflow-hidden sm:rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300">
              Bem-vindo ao painel administrativo. Aqui você pode gerenciar as configurações do site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 