import React, { useState } from 'react';
import { Briefcase, User, Rocket, Bell, Search, Heart, PlusCircle, CheckCircle, Star } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('crowdsupport');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-blue-600 text-white shadow-md px-4 py-3 flex justify-between items-center">
        <button className="p-1 hover:bg-blue-700 rounded-full transition">
          <Bell className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold tracking-wide">Mulai.my.id</h1>
        <button className="p-1 hover:bg-blue-700 rounded-full transition">
          <Search className="w-6 h-6" />
        </button>
      </header>

      {/* KONTEN UTAMA BERDASARKAN TAB */}
      <main className="max-w-md mx-auto p-4">
        
        {/* TAB 1: PASAR JASA */}
        {activeTab === 'market' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold text-blue-900 mb-1">Pasar Jasa & Gigs Harian</h2>
              <p className="text-sm text-slate-600 mb-3">Butuh bantuan cepat hari ini atau ingin tawarkan keahlianmu?</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow transition text-sm flex items-center justify-center gap-2">
                <PlusCircle className="w-4 h-4" /> Tawarkan Jasa / Buat Tugas Baru
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-slate-700 text-sm">Jasa Tersedia Hari Ini</h3>
              
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs bg-blue-100 text-blue-800 font-medium px-2 py-0.5 rounded-full">Bantuan Medis</span>
                    <h4 className="font-bold text-slate-800 mt-1">Jasa Antri & Urus Administrasi RS</h4>
                  </div>
                  <span className="font-bold text-blue-600 text-sm">Rp 75.000</span>
                </div>
                <p className="text-xs text-slate-500">Oleh: Budi Santoso (⭐ 4.9)</p>
                <button className="w-full bg-slate-100 hover:bg-blue-50 text-blue-700 font-medium py-1.5 rounded-lg text-xs transition">
                  Ambil / Pesan Jasa
                </button>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs bg-amber-100 text-amber-800 font-medium px-2 py-0.5 rounded-full">Konseling</span>
                    <h4 className="font-bold text-slate-800 mt-1">Teman Curhat & Pendengar Setia</h4>
                  </div>
                  <span className="font-bold text-blue-600 text-sm">Rp 40.000</span>
                </div>
                <p className="text-xs text-slate-500">Oleh: Siti Rahma (⭐ 5.0)</p>
                <button className="w-full bg-slate-100 hover:bg-blue-50 text-blue-700 font-medium py-1.5 rounded-lg text-xs transition">
                  Ambil / Pesan Jasa
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROFIL MY.ID */}
        {activeTab === 'profile' && (
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center space-y-3">
              <div className="w-20 h-20 bg-blue-600 text-white font-bold text-2xl rounded-full flex items-center justify-center mx-auto shadow-inner">
                FD
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Fariliyn Danisya</h2>
                <p className="text-xs text-blue-600 font-medium">@mulai.my.id/fariliyn</p>
                <p className="text-xs text-slate-500 mt-1">Inovator & Penggerak Ekosistem Sosial Indonesia</p>
              </div>
              <div className="flex justify-center gap-4 py-2 border-y border-slate-100 text-xs">
                <div>
                  <span className="block font-bold text-slate-800">12</span>
                  <span className="text-slate-500">Proyek</span>
                </div>
                <div className="border-r border-slate-100"></div>
                <div>
                  <span className="block font-bold text-slate-800">4.9</span>
                  <span className="text-slate-500">Rating</span>
                </div>
                <div className="border-r border-slate-100"></div>
                <div>
                  <span className="block font-bold text-slate-800">140+</span>
                  <span className="text-slate-500">Kolaborator</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow transition text-sm">
                Edit Profil & Tautan Saya
              </button>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 space-y-3">
              <h3 className="font-semibold text-slate-700 text-sm">Tautan & Portofolio</h3>
              <div className="p-3 bg-slate-50 rounded-lg text-xs font-medium text-blue-700 border border-slate-200 flex justify-between items-center cursor-pointer hover:bg-blue-50">
                <span>🌐 Website Resmi / Portofolio Riset</span>
                <span>→</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-xs font-medium text-blue-700 border border-slate-200 flex justify-between items-center cursor-pointer hover:bg-blue-50">
                <span>💬 Konsultasi Ide Inovasi (Jasa)</span>
                <span>→</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CROWDSUPPORT */}
        {activeTab === 'crowdsupport' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-lg font-bold text-blue-900 mb-1">CrowdSupport & Inovasi</h2>
              <p className="text-sm text-slate-600 mb-3">Dukung hilirisasi produk riset lokal untuk ciptakan lapangan kerja.</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow transition text-sm flex items-center justify-center gap-2">
                <Rocket className="w-4 h-4" /> Mulai Kampanyekan Proyekmu
              </button>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-full">Hilirisasi Riset</span>
                  <span className="text-xs text-slate-500 font-medium">15 Hari Lagi</span>
                </div>
                <h3 className="font-bold text-slate-800 text-base">Jaket Pendingin Anti-Karbon (Ciptakan 20 Lapangan Kerja)</h3>
                <p className="text-xs text-slate-600">Pengembangan produksi massal pakaian pelindung ramah lingkungan berbasis riset mandiri.</p>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-blue-600">Rp 15.000.000</span>
                    <span className="text-slate-500">Target: Rp 25.000.000</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-3/5"></div>
                  </div>
                </div>

                <div className="pt-2 flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl text-xs transition">
                    Beri Donasi/Modal
                  </button>
                  <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-blue-700 font-semibold py-2 rounded-xl text-xs transition">
                    Kolaborasi Keahlian
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* BOTTOM NAVIGATION BAR */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-2 px-6 flex justify-around items-center z-50 shadow-lg">
        <button 
          onClick={() => setActiveTab('market')}
          className={`flex flex-col items-center space-y-1 transition ${activeTab === 'market' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <Briefcase className="w-6 h-6" />
          <span className="text-xs font-medium">Pasar Jasa</span>
        </button>

        <button 
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center space-y-1 transition ${activeTab === 'profile' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs font-medium">Profil My.id</span>
        </button>

        <button 
          onClick={() => setActiveTab('crowdsupport')}
          className={`flex flex-col items-center space-y-1 transition ${activeTab === 'crowdsupport' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          <Rocket className="w-6 h-6" />
          <span className="text-xs font-medium">CrowdSupport</span>
        </button>
      </nav>
    </div>
  );
}
