"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Zap, Shield, Cpu, Code2, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="relative w-8 h-8">
              <Image 
                src="/logo.svg" 
                alt="Racoongate Logo" 
                fill 
                className="object-contain" // Logonun oranını bozmadan sığdırır
              />
            </div>
            <span className="font-bold text-xl tracking-tighter">Racoongate</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">Modeller</a>
              <a href="#" className="hover:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">Fiyatlandırma</a>
              <a href="#" className="hover:text-purple-400 transition-colors px-3 py-2 text-sm font-medium">Dokümantasyon</a>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-white text-black hover:bg-purple-400 hover:text-white transition-all px-4 py-2 rounded-full font-semibold text-sm">
              Giriş Yap
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900">Modeller</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900">Fiyatlandırma</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-900 text-purple-400">Giriş Yap</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Arkaplan Efektleri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-medium mb-6">
            🚀 Racoongate Public Beta Yayında
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Tüm Yapay Zeka Modelleri.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500">
              Tek Bir Kapı.
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            GPT-4, Claude 3, Llama 3 ve daha fazlası. En düşük gecikme süresi ve en iyi fiyatlarla tek bir API üzerinden erişin.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-lg font-bold text-lg hover:bg-purple-100 transition-all flex items-center justify-center gap-2 group">
              Hemen Başla <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Terminal size={20} /> Dokümantasyonu Oku
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ModelTicker = () => {
  const models = ["GPT-4o", "Claude 3.5 Sonnet", "Llama 3 70B", "Mistral Large", "Gemini 1.5 Pro", "Grok-1", "DALL-E 3"];
  
  return (
    <div className="w-full bg-white/5 border-y border-white/5 overflow-hidden py-4">
      <div className="max-w-7xl mx-auto relative flex overflow-x-hidden">
        <motion.div 
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...models, ...models, ...models].map((model, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400 font-mono text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              {model}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all hover:bg-white/[0.07] group">
    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/10">
      <Icon className="text-purple-400" size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Neden Racoongate?</h2>
          <p className="text-gray-400">Geliştiriciler için geliştiriciler tarafından tasarlandı.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap}
            title="Sıfır Gecikme"
            desc="Optimize edilmiş routing algoritmamız ile isteğinizi en hızlı yanıt veren sunucuya yönlendiriyoruz."
          />
          <FeatureCard 
            icon={Shield}
            title="Birleşik Faturalandırma"
            desc="Her model için ayrı kart girmeyin. Tek bir kredi bakiyesi ile tüm modellere anında erişim sağlayın."
          />
          <FeatureCard 
            icon={Cpu}
            title="OpenAI Uyumlu API"
            desc="Mevcut kodunuzu değiştirmeden sadece 'base_url' ve 'api_key' değiştirerek saniyeler içinde geçiş yapın."
          />
        </div>
      </div>
    </section>
  );
};

const CodeDemo = () => {
  return (
    <section className="py-24 bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Kodunuzu Değiştirmeden<br />Entegre Olun</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Racoongate, endüstri standardı olan OpenAI API formatını kullanır. Bu sayede LangChain, Vercel AI SDK veya herhangi bir kütüphane ile %100 uyumludur.
          </p>
          <ul className="space-y-4">
            {['Tek bir API Key', 'Tüm büyük LLM\'ler', 'Gerçek zamanlı kullanım takibi'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <ChevronRight size={14} />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-white/10 shadow-2xl">
            <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-white/5 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 text-xs text-gray-500 font-mono">example.py</span>
            </div>
            <div className="p-6 overflow-x-auto code-scroll">
              <pre className="font-mono text-sm leading-relaxed">
                <code className="text-gray-300">
                  <span className="text-purple-400">import</span> openai{"\n\n"}
                  
                  client = openai.OpenAI({" \n"}
                  {"  "}base_url=<span className="text-green-400">"https://api.racoongate.com/v1"</span>,{" \n"}
                  {"  "}api_key=<span className="text-green-400">"sk-racoongate-..."</span>,{" \n"}
                  ){"\n\n"}

                  response = client.chat.completions.create({" \n"}
                  {"  "}model=<span className="text-green-400">"meta-llama/llama-3-70b-instruct"</span>,{" \n"}
                  {"  "}messages=[{" \n"}
                  {"    "}{"{"} <span className="text-amber-500">"role"</span>: <span className="text-green-400">"user"</span>, <span className="text-amber-500">"content"</span>: <span className="text-green-400">"Selam Rakun!"</span> {"}"}{" \n"}
                  {"  "}]{" \n"}
                  ){"\n\n"}
                  <span className="text-blue-400">print</span>(response.choices[0].message.content)
                </code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-amber-500 rounded flex items-center justify-center text-white text-xs font-bold">
              R
            </div>
            <span className="font-bold text-lg tracking-tighter">Racoongate</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Gizlilik</a>
            <a href="#" className="hover:text-white transition-colors">Şartlar</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-600">
          © 2024 Racoongate Inc. All rights reserved. Made with 🦝 power.
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-grid">
      <Navbar />
      <HeroSection />
      <ModelTicker />
      <Features />
      <CodeDemo />
      <Footer />
    </main>
  );
}