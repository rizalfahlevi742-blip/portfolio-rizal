"use client";

import Image from "next/image";
import { 
  FaInstagram, 
  FaBehance, 
  FaLinkedin, 
  FaTwitter,
  FaPaintBrush,
  FaPalette
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* ============================================================ */}
      {/* NAVIGASI */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-4 flex justify-between items-center bg-white border-b border-gray-200">
        <div className="text-sm tracking-widest font-light text-gray-800">LOGO</div>
        <ul className="hidden md:flex gap-8 text-sm text-gray-600">
          <li><a href="#tentang" className="hover:text-black transition">Tentang</a></li>
          <li><a href="#layanan" className="hover:text-black transition">Layanan</a></li>
          <li><a href="#karya" className="hover:text-black transition">Karya</a></li>
          <li><a href="#kontak" className="hover:text-black transition">Kontak</a></li>
        </ul>
      </nav>

      {/* ============================================================ */}
      {/* SECTION 01 - TENTANG */}
      {/* ============================================================ */}
      <section id="tentang" className="min-h-screen flex items-center pt-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-left">
              <p className="text-sm text-gray-400 tracking-widest mb-4">01 — TENTANG SAYA</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">MUHAMMAD</span>
                <span className="block">RIZAL FAHLEVI</span>
              </h1>
              <p className="mt-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
                Desainer Grafis & Ilustrator dengan pengalaman 5+ tahun. 
                Menggabungkan keahlian desain yang terstruktur dengan sentuhan 
                ilustrasi yang imajinatif untuk menciptakan visual yang bermakna.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#karya" className="px-8 py-3 bg-red-600 text-white text-sm tracking-wider hover:bg-red-700 transition">
                  LIHAT KARYA →
                </a>
                <a href="#kontak" className="px-8 py-3 border border-gray-300 text-gray-700 text-sm tracking-wider hover:border-gray-900 hover:text-gray-900 transition">
                  HUBUNGI SAYA
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-red-600"></div>
                <div className="relative w-64 h-80 md:w-72 md:h-96 bg-gray-200 flex items-center justify-center text-gray-400 text-sm overflow-hidden">
                  <span>Foto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 02 - LAYANAN */}
      {/* ============================================================ */}
      <section id="layanan" className="py-24 px-6 md:px-20 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-400 tracking-widest mb-2">02 — LAYANAN</p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-12">
            Layanan <span className="font-medium">Saya</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-8 rounded-lg border border-gray-200 hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-white transition">Social Media Design</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition">
                Membuat konten visual yang menarik dan konsisten untuk media sosial, 
                membantu membangun brand awareness dan engagement audiens.
              </p>
              <a href="#kontak" className="inline-block mt-4 text-sm font-medium text-gray-500 group-hover:text-white transition">
                Hubungi Saya →
              </a>
            </div>

            <div className="group p-8 rounded-lg border border-gray-200 hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-white transition">Branding Design</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition">
                Merancang identitas visual merek yang kuat dan berkarakter, 
                mulai dari logo, palet warna, hingga panduan merek yang komprehensif.
              </p>
              <a href="#kontak" className="inline-block mt-4 text-sm font-medium text-gray-500 group-hover:text-white transition">
                Hubungi Saya →
              </a>
            </div>

            <div className="group p-8 rounded-lg border border-gray-200 hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-white transition">Promotional Design</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition">
                Menciptakan materi promosi yang efektif dan menarik, 
                seperti poster, spanduk, flyer, dan konten kampanye pemasaran lainnya.
              </p>
              <a href="#kontak" className="inline-block mt-4 text-sm font-medium text-gray-500 group-hover:text-white transition">
                Hubungi Saya →
              </a>
            </div>

            <div className="group p-8 rounded-lg border border-gray-200 hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-white transition">Advertising Design</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition">
                Mendesain iklan digital dan cetak yang komunikatif dan persuasif, 
                dengan pendekatan visual yang tepat sasaran untuk setiap kampanye.
              </p>
              <a href="#kontak" className="inline-block mt-4 text-sm font-medium text-gray-500 group-hover:text-white transition">
                Hubungi Saya →
              </a>
            </div>

            <div className="md:col-span-2 group p-8 rounded-lg border border-gray-200 hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-medium text-gray-900 group-hover:text-white transition">Editorial Illustration</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition">
                Menghadirkan ilustrasi yang mendukung dan memperkaya konten editorial, 
                dengan gaya visual yang sesuai dengan narasi dan target audiens.
              </p>
              <a href="#kontak" className="inline-block mt-4 text-sm font-medium text-gray-500 group-hover:text-white transition">
                Hubungi Saya →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 03 - KARYA (Portfolio) */}
      {/* ============================================================ */}
      <section id="karya" className="py-24 px-6 md:px-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-400 tracking-widest mb-2">03 — KARYA</p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
            Karya <span className="font-medium">Pilihan</span>
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            Beberapa proyek terbaik yang pernah saya kerjakan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-red-500">
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400 text-sm overflow-hidden">
                <span>Gambar Proyek 1</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 tracking-wider mb-1">01 — DESAIN</p>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-red-600 transition">
                  Web Template Mock Up
                </h3>
                <p className="text-sm text-gray-500 mt-1">Professional & Creative Web Design</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-red-500">
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400 text-sm overflow-hidden">
                <span>Gambar Proyek 2</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 tracking-wider mb-1">02 — DESAIN</p>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-red-600 transition">
                  Mobile Application Design
                </h3>
                <p className="text-sm text-gray-500 mt-1">UI/UX Design untuk Aplikasi Mobile</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-red-500">
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400 text-sm overflow-hidden">
                <span>Gambar Proyek 3</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 tracking-wider mb-1">03 — ILUSTRASI</p>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-red-600 transition">
                  Editorial Illustration Series
                </h3>
                <p className="text-sm text-gray-500 mt-1">Ilustrasi untuk Majalah & Editorial</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-red-500">
              <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400 text-sm overflow-hidden">
                <span>Gambar Proyek 4</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 tracking-wider mb-1">04 — DESAIN</p>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-red-600 transition">
                  Brand Identity Design
                </h3>
                <p className="text-sm text-gray-500 mt-1">Logo & Panduan Merek untuk Startup</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            🔗 Lihat semua karya di <a href="https://www.behance.net/gallery/110230481/Design-Works-2026-Selected-Portfolio" target="_blank" className="underline hover:text-gray-900 transition">Behance</a>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 04 - KONTAK */}
      {/* ============================================================ */}
      <section id="kontak" className="py-24 px-6 md:px-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400 tracking-widest mb-4">04 — KONTAK</p>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
            Mari <span className="font-medium">Berkolaborasi</span>
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Tertarik untuk bekerja sama? Hubungi saya melalui email atau media sosial di bawah ini.
          </p>

          <a href="mailto:email@anda.com" className="inline-block mt-8 px-10 py-4 bg-red-600 text-white hover:bg-red-700 transition text-sm tracking-wider">
            KIRIM EMAIL →
          </a>

          <div className="mt-12 flex justify-center gap-8 text-2xl text-gray-500">
            <a href="https://www.behance.net/..." target="_blank" className="hover:text-gray-900 transition"><FaBehance /></a>
            <a href="https://instagram.com/..." target="_blank" className="hover:text-gray-900 transition"><FaInstagram /></a>
            <a href="https://linkedin.com/..." target="_blank" className="hover:text-gray-900 transition"><FaLinkedin /></a>
            <a href="https://twitter.com/..." target="_blank" className="hover:text-gray-900 transition"><FaTwitter /></a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER */}
      {/* ============================================================ */}
      <footer className="py-8 px-6 md:px-20 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>© 2026 Muhammad Rizal Fahlevi. Dibuat dengan Next.js.</p>
      </footer>
    </div>
  );
}