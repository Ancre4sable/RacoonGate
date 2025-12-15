'use client';

import React from 'react';
import { Mail, Lock, Eye, EyeOff, Menu, X, Globe, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [language, setLanguage] = React.useState('TR');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Burası gerçek kimlik doğrulama mantığınızın olduğu yer olacaktır.
        console.log('Giriş bilgileri gönderildi.');
        // Örnek olarak başarılı giriş sonrası ana sayfaya yönlendirme
        // router.push('/dashboard'); 
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative bg-gray-900 overflow-hidden">
            
            {/* Arkaplan Gradyan Efekti - Racoongate stilini yansıtır */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
                <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-700/30 rounded-full blur-3xl animate-blob mix-blend-screen"></div>
                <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-screen"></div>
            </div>

            {/* Sağ Üst Köşe Kontrolleri - Ana Sayfadaki gibi sadece dil seçeneği bırakıldı */}
            <div className="absolute top-4 right-4 flex space-x-3 text-white z-20">
                {/* Dark/Light mode düğmeleri genellikle login sayfasında kaldırılır,
                   çünkü sayfa zaten koyu temayı zorlar. */}
                <button
                    className="p-2 rounded-full hover:bg-white/10 transition flex items-center"
                    title="Dili Değiştir"
                >
                    <Globe size={18} color="#fff" />
                    <span className="ml-1 text-sm font-bold text-gray-300">TR</span>
                </button>
            </div>

            {/* Giriş Kartı */}
            <div className="w-full max-w-sm p-8 space-y-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black/70 backdrop-blur-lg border border-purple-500/30 relative z-10">
                
                {/* Logo / Rakun İkonu (Basitleştirilmiş Racoongate Logosu) */}
                <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 border-4 border-black/20 shadow-xl">
                        {/* Racoongate 'R' harfi veya minimalist ikon */}
                        <Zap size={32} className="text-white transform rotate-45" />
                    </div>
                </div>

                {/* Başlık */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white tracking-tight">Racoongate Giriş</h1>
                    <p className="text-gray-400 text-sm mt-1">Rakun ailesine geri dönün</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    
                    {/* E-posta Alanı */}
                    <div>
                        <label htmlFor="email" className="text-xs font-medium text-gray-400 block mb-1">E-posta</label>
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="ornek@email.com"
                                className="w-full pl-10 pr-4 py-3 bg-gray-800/80 text-white rounded-lg border border-gray-700 focus:ring-purple-500 focus:border-purple-500 transition placeholder-gray-500 text-sm"
                            />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        </div>
                    </div>

                    {/* Şifre Alanı */}
                    <div>
                        <label htmlFor="password" className="text-xs font-medium text-gray-400 block mb-1">Şifre</label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={passwordVisible ? 'text' : 'password'}
                                required
                                placeholder="Şifrenizi girin"
                                className="w-full pl-10 pr-12 py-3 bg-gray-800/80 text-white rounded-lg border border-gray-700 focus:ring-purple-500 focus:border-purple-500 transition placeholder-gray-500 text-sm"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-purple-400 transition"
                                title={passwordVisible ? 'Şifreyi Gizle' : 'Şifreyi Göster'}
                            >
                                {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Giriş Yap Butonu */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-6 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-[1.01]
                                   bg-gradient-to-r from-purple-600 to-pink-500 shadow-xl shadow-purple-500/30 hover:shadow-purple-400/50 tracking-wide"
                    >
                        Giriş Yap
                    </button>
                </form>

                // app/login/page.tsx dosyasında, Kayıt Ol linkinin olduğu bölüm:

// ...

// Kayıt Ol Linki
<div className="text-center text-sm mt-6 pt-4 border-t border-white/5">
    <p className="text-gray-500">
        Hesabınız yok mu?{' '}
        {/* Yönlendirme butonu olarak güncellendi */}
        <a 
            onClick={() => router.push('/register')} // Yeni /register yoluna yönlendirme
            className="font-bold text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
        >
            Kayıt Olun
        </a>
    </p>
</div>

// ...
            </div>
        </div>
    );
};

export default Login;