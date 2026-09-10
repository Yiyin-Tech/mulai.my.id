import React, { useState } from 'react';
import { Briefcase, User, Rocket, Bell, Search, PlusCircle, Star, Heart, ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('crowdsupport');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pb-24 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* HEADER GRADIENT HIDUP */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg px-4 py-3.5 flex justify-between items-center backdrop-blur-md bg-opacity-95">
        <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
          <Bell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          <h1 className="text-lg font-extrabold tracking-tight">Mulai<span className="text-amber-300">.my.id</span></h1>
        </div>
        <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
          <Search className="w-5 h-5" />
        </button>
      </header>

      {/* KONTEN UTAMA */}
      <main className="max-w-md mx-auto p-4 space-y-4">
        
        {/* TAB 1: PASAR JASA */}
        {activeTab === 'market' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Banner Atraktif */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-5 rounded-3xl shadow-xl relative overflow-hidden text-white border border-blue-400/30">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
              <span className="bg-amber-400 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Ekonomi Cepat</span>
              <h2 className="text-xl font-black mt-2 mb-1">Pasar Gigs & Jasa Harian</h2>
              <p className="text-xs text-blue-100 mb-4">Selesaikan tugas instan hari ini atau tawarkan keahlianmu untuk langsung dapat penghasilan.</p>
              <button className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold py-3 rounded-2xl shadow-lg transition text-sm flex items-center justify-center gap-2">
                <PlusCircle className="w-4 h-4" /> Tawarkan Jasa / Buat Tugas Baru
              </button>
            </div>

            {/* List Jasa */}
            <div className="space-y-3">
              <div className="flex justify-between items-center px-1">
                <h3 className="font-bold text-slate-200 text-sm">Peluang Tugas Terdekat</h3>
                <span className="text-xs text-blue-400 font-medium">Lihat Semua</span>
              </div>
              
              <div className="bg-slate-800/80 backdrop-blur p-4 rounded-2xl shadow-md border border-slate-700/60 space-y-3 hover:border-blue-500/50 transition">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold px-2.5 py-0.5 rounded-full">Bantuan Medis</span>
                    <h4 className="font-bold text-white mt-1.5 text-sm">Jasa Antri & Urus Administrasi RS</h4>
                  </div>
                  <span className="font-extrabold text-emerald-400 text-sm bg-emerald-500/10 px-2 py-1 rounded-xl border border-emerald-500/20">Rp 75rb</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-700/50">
                  <span>Oleh: Budi Santoso</span>
                  <span className="flex items-center gap-1 text-amber-300 font-bold"><Star className="w-3.5 h-3.5 fill-amber-300" /> 4.9</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs transition shadow-md shadow-blue-600/20">
                  Ambil Tugas Ini
                </button>
              </div>

              <div className="bg-slate-800/80 backdrop-blur p-4 rounded-2xl shadow-md border border-slate-700/60 space-y-3 hover:border-blue-500/50 transition">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold px-2.5 py-0.5 rounded-full">Konseling</span>
                    <h4 className="font-bold text-white mt-1.5 text-sm">Teman Curhat & Pendengar Setia</h4>
                  </div>
                  <span className="font-extrabold text-emerald-400 text-sm bg-emerald-500/10 px-2 py-1 rounded-xl border border-emerald-500/20">Rp 40rb</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-700/50">
                  <span>Oleh: Siti Rahma</span>
                  <span className="flex items-center gap-1 text-amber-300 font-bold"><Star className="w-3.5 h-3.5 fill-amber-300" /> 5.0</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded-xl text-xs transition shadow-md shadow-blue-600/20">
                  Ambil Tugas Ini
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROFIL MY.ID */}
        {activeTab === 'profile' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-slate-800/90 backdrop-blur p-6 rounded-3xl shadow-xl border border-slate-700/80 text-center space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30"></div>
              
              <div className="relative w-20 h-20 bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-black text-2xl rounded-2xl flex items-center justify-center mx-auto shadow-lg border-2 border-slate-800">
                FD
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-center gap-1.5">
                  <h2 className="text-xl font-black text-white">Fariliyn Danisya</h2>
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-xs text-cyan-400 font-semibold mt-0.5">mulai.my.id/fariliyn</p>
                <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">CEO & Inovator Sosial. Berdedikasi membangun ekonomi kerakyatan & hilirisasi riset.</p>
              </div>

              <div className="grid grid-cols-3 gap-2 py-3 bg-slate-900/60 rounded-2xl border border-slate-700/50 text-xs">
                <div>
                  <span className="block font-black text-white text-base">12</span>
                  <span className="text-slate-400">Proyek</span>
                </div>
                <div className="border-x border-slate-700">
                  <span className="block font-black text-amber-300 text-base">4.9</span>
                  <span className="text-slate-400">Rating</span>
                </div>
                <div>
                  <span className="block font-black text-cyan-400 text-base">140+</span>
                  <span className="text-slate-400">Kolaborator</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3 rounded-2xl shadow-lg transition text-sm">
                Edit Profil & Tautan Saya
              </button>
            </div>

            <div className="bg-slate-800/80 backdrop-blur p-4 rounded-2xl shadow-md border border-slate-700/60 space-y-3">
              <h3 className="font-bold text-slate-200 text-sm">Tautan & Portfolio Utama</h3>
              
              <div className="p-3.5 bg-slate-900/80 hover:bg-slate-900 rounded-xl text-xs font-semibold text-blue-300 border border-slate-700/80 flex justify-between items-center cursor-pointer transition group">
                <span className="flex items-center gap-2">🌐 Website Resmi & Portofolio Riset</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition" />
              </div>
              
              <div className="p-3.5 bg-slate-900/80 hover:bg-slate-900 rounded-xl text-xs font-semibold text-blue-300 border border-slate-700/80 flex justify-between items-center cursor-pointer transition group">
                <span className="flex items-center gap-2">💬 Konsultasi Ide Inovasi & Gigs</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CROWDSUPPORT */}
        {activeTab === 'crowdsupport' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Banner Utama */}
            <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-blue-800 p-5 rounded-3xl shadow-xl relative overflow-hidden text-white border border-emerald-400/30">
              <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl"></div>
              <span className="bg-cyan-400 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Makro & Produktif</span>
              <h2 className="text-xl font-black mt-2 mb-1">CrowdSupport Inovasi</h2>
              <p className="text-xs text-emerald-100 mb-4">Hilirisasi produk riset lokal menjadi perusahaan nyata yang menyerap lapangan kerja masif.</p>
              <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold py-3 rounded-2xl shadow-lg transition text-sm flex items-center justify-center gap-2">
                <Rocket className="w-4 h-4" /> Kampanyekan Proyekmu
              </button>
            </div>

            {/* List Kampanye */}
            <div className="space-y-4">
              <div className="bg-slate-800/90 backdrop-blur p-5 rounded-3xl shadow-xl border border-slate-700/80 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Hilirisasi Riset
                  </span>
                  <span className="text-xs text-slate-400 font-medium">15 Hari Lagi</span>
                </div>
                
                <div>
                  <h3 className="font-extrabold text-white text-base">Jaket Pendingin Anti-Karbon</h3>
                  <p className="text-xs text-cyan-300 font-medium mt-0.5">Target: Menciptakan 20 Lapangan Kerja Penjahit Lokal</p>
                  <p className="text-xs text-slate-400 mt-2">Pengembangan produksi massal pakaian pelindung ramah lingkungan berbasis riset mandiri.</p>
                </div>
                
                {/* Progress Bar Colorful */}
                <div className="space-y-1.5 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-700/50">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-cyan-400">Rp 15.000.000</span>
                    <span className="text-slate-400">Target: Rp 25.000.000</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 h-full rounded-full w-3/5 shadow-lg"></div>
                  </div>
                  <p className="text-[10px] text-slate-400 text-right">60% Tercapai</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-md shadow-emerald-600/20">
                    Beri Donasi/Modal
                  </button>
                  <button className="bg-slate-700 hover:bg-slate-600 text-cyan-300 font-bold py-2.5 rounded-xl text-xs transition border border-slate-600">
                    Kolaborasi Keahlian
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* BOTTOM NAVIGATION BAR (Gaya Aplikasi Modern) */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 py-2.5 px-6 flex justify-around items-center z-50 shadow-2xl">
        <button 
          onClick={() => setActiveTab('market')}
          className={`flex flex-col items-center space-y-1 transition ${activeTab === 'market' ? 'text-cyan-400 scale-105' : 'text-slate-400 hover:text-slate-200'}`}
        >
          <div className={`p-1.5 rounded-2xl transition ${activeTab === 'market' ? 'bg-cyan-500/10' : ''}`}>
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-bold">Pasar Jasa</span>
        </button>

        <button 
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center space-y-1 transition ${activeTab === 'profile' ? 'text-cyan-400 scale-105' : 'text-slate-400 hover:text-slate-200'}`}
        >
          <div className={`p-1.5 rounded-2xl transition ${activeTab === 'profile' ? 'bg-cyan-500/10' : ''}`}>
            <User className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-bold">Profil My.id</span>
        </button>

        <button 
          onClick={() => setActiveTab('crowdsupport')}
          className={`flex flex-col items-center space-y-1 transition ${activeTab === 'crowdsupport' ? 'text-cyan-400 scale-105' : 'text-slate-400 hover:text-slate-200'}`}
        >
          <div className={`p-1.5 rounded-2xl transition ${activeTab === 'crowdsupport' ? 'bg-cyan-500/10' : ''}`}>
            <Rocket className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-bold">CrowdSupport</span>
        </button>
      </nav>
    </div>
  );
}
