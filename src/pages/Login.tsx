import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storageService } from '../services/storage';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'pauloadm' && password === 'adm451239') {
      storageService.setAdminLoggedIn(true);
      navigate('/dashboard');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl border border-blue-100">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Acesso Administrativo</h2>
        {error && (
          <div className="mb-6 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2">Usuário</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-blue-50 placeholder-blue-400"
              placeholder="Digite o usuário"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 bg-blue-50 placeholder-blue-400"
              placeholder="Digite a senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl bg-blue-700 text-white font-bold text-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
} 