import React, { useState } from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';

// URL de logo placeholder
const LOGO_PLACEHOLDER = 'https://placehold.co/150x60/8264be/ffffff?text=Loopy';

const LoginScreen = ({ onBackToHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Estilos base para o botão "Entrar" (consistente com o header)
  const loginBtnClasses = 'bg-[#8264be] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#a07cd6] transition-colors duration-300 ease-in-out w-full shadow-lg';
  
  // Estilos para o botão "Voltar" (com borda)
  const backBtnClasses = 'flex items-center justify-center border-2 border-[#8264be] text-[#8264be] font-semibold rounded-full px-6 py-3 hover:bg-[#f0f0f0] transition-colors duration-300 ease-in-out w-full';


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de lógica de login
    setTimeout(() => {
      setLoading(false);
      console.log('Tentativa de Login:', { email, password });
      alert(`Login de ${email} tentado com sucesso! (Simulado)`);
      // Aqui você faria a navegação real após o sucesso
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        
        {/* Card de Login */}
        <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-200">
            
            {/* Cabeçalho */}
            <div className="flex flex-col items-center mb-8">
                <img 
                    src={LOGO_PLACEHOLDER} 
                    className="h-10 md:h-12 mb-4" 
                    alt="Logo Loopy"
                />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Faça Login na sua Conta
                </h2>
                <p className="text-gray-500">
                    Bem-vindo(a) de volta!
                </p>
            </div>

            {/* Formulário de Login */}
            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Campo de Email */}
                <div>
                    <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-[#8264be] focus:border-[#8264be] transition duration-150"
                            placeholder="seu.email@exemplo.com"
                        />
                        <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                </div>

                {/* Campo de Senha */}
                <div>
                    <label 
                        htmlFor="password" 
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Senha
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-[#8264be] focus:border-[#8264be] transition duration-150"
                            placeholder="Sua senha"
                        />
                        <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                </div>

                {/* Opções (Lembrar e Esqueceu a Senha) */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-[#8264be] border-gray-300 rounded focus:ring-[#8264be]"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                            Lembrar de mim
                        </label>
                    </div>
                    <a href="#" className="font-medium text-[#8264be] hover:text-[#a07cd6]">
                        Esqueceu a senha?
                    </a>
                </div>

                {/* Botão de Login */}
                <button 
                    type="submit" 
                    className={loginBtnClasses}
                    disabled={loading}
                >
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Entrando...
                        </div>
                    ) : (
                        'Entrar'
                    )}
                </button>
            </form>
            
            {/* Link de Cadastro */}
            <div className="mt-6 text-center text-sm text-gray-600">
                Não tem uma conta?
                <a href="#" className="font-medium text-[#8264be] hover:text-[#a07cd6] ml-1">
                    Cadastre-se
                </a>
            </div>

             {/* Botão Voltar para Home */}
            <div className="mt-6">
                <button 
                    onClick={onBackToHome} 
                    className={backBtnClasses}
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Voltar para a Home
                </button>
            </div>
        </div>
    </div>
  );
};

export default LoginScreen;