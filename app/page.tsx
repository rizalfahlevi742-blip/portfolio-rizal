"use client";

import { useState, useEffect, useRef } from "react";
import { 
  FaInstagram, 
  FaBehance, 
  FaLinkedin, 
  FaTwitter,
  FaPaintBrush,
  FaPalette,
  FaGlobe
} from "react-icons/fa";

export default function Home() {
  const [lang, setLang] = useState("id");
  const [isLoaded, setIsLoaded] = useState(false);

  // Ref untuk setiap section
  const heroRef = useRef(null);
  const layananRef = useRef(null);
  const karyaRef = useRef(null);
  const kontakRef = useRef(null);

  // State untuk visibility setiap section
  const [heroVisible, setHeroVisible] = useState(false);
  const [layananVisible, setLayananVisible] = useState(false);
  const [karyaVisible, setKaryaVisible] = useState(false);
  const [kontakVisible, setKontakVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Observer untuk mendeteksi scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "hero") setHeroVisible(true);
            if (id === "layanan") setLayananVisible(true);
            if (id === "karya") setKaryaVisible(true);
            if (id === "kontak") setKontakVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // 20% elemen terlihat baru muncul
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observasi setiap section
    if (heroRef.current) observer.observe(heroRef.current);
    if (layananRef.current) observer.observe(layananRef.current);
    if (karyaRef.current) observer.observe(karyaRef.current);
    if (kontakRef.current) observer.observe(kontakRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (layananRef.current) observer.unobserve(layananRef.current);
      if (karyaRef.current) observer.unobserve(karyaRef.current);
      if (kontakRef.current) observer.unobserve(kontakRef.current);
    };
  }, []);

  const toggleLang = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  // ============================================================
  // KONTEN BAHASA
  // ============================================================
  const content = {
    id: {
      nav: { logo: "LOGO", tentang: "Tentang", layanan: "Layanan", karya: "Karya", kontak: "Kontak" },
      hero: {
        title: "01 — TENTANG SAYA",
        name1: "MUHAMMAD",
        name2: "RIZAL FAHLEVI",
        desc: "Desainer Grafis & Ilustrator dengan pengalaman 5+ tahun. Menggabungkan keahlian desain yang terstruktur dengan sentuhan ilustrasi yang imajinatif untuk menciptakan visual yang bermakna.",
        btnKarya: "LIHAT KARYA →",
        btnKontak: "HUBUNGI SAYA",
      },
      layanan: {
        title: "02 — LAYANAN",
        subtitle: "Layanan",
        subtitleBold: "Saya",
        services: [
          { title: "Social Media Design", desc: "Membuat konten visual yang menarik dan konsisten untuk media sosial, membantu membangun brand awareness dan engagement audiens." },
          { title: "Branding Design", desc: "Merancang identitas visual merek yang kuat dan berkarakter, mulai dari logo, palet warna, hingga panduan merek yang komprehensif." },
          { title: "Promotional Design", desc: "Menciptakan materi promosi yang efektif dan menarik, seperti poster, spanduk, flyer, dan konten kampanye pemasaran lainnya." },
          { title: "Advertising Design", desc: "Mendesain iklan digital dan cetak yang komunikatif dan persuasif, dengan pendekatan visual yang tepat sasaran untuk setiap kampanye." },
          { title: "Editorial Illustration", desc: "Menghadirkan ilustrasi yang mendukung dan memperkaya konten editorial, dengan gaya visual yang sesuai dengan narasi dan target audiens." },
        ],
        btn: "Hubungi Saya →",
      },
      karya: {
        title: "03 — KARYA",
        subtitle: "Karya",
        subtitleBold: "Pilihan",
        desc: "Beberapa proyek terbaik yang pernah saya kerjakan",
        projects: [
          { number: "01", category: "DESAIN", title: "Web Template Mock Up", desc: "Professional & Creative Web Design" },
          { number: "02", category: "DESAIN", title: "Mobile Application Design", desc: "UI/UX Design untuk Aplikasi Mobile" },
          { number: "03", category: "ILUSTRASI", title: "Editorial Illustration Series", desc: "Ilustrasi untuk Majalah & Editorial" },
          { number: "04", category: "DESAIN", title: "Brand Identity Design", desc: "Logo & Panduan Merek untuk Startup" },
        ],
        link: "🔗 Lihat semua karya di ",
        linkText: "Behance",
      },
      kontak: {
        title: "04 — KONTAK",
        subtitle: "Mari",
        subtitleBold: "Berkolaborasi",
        desc: "Tertarik untuk bekerja sama? Hubungi saya melalui email atau media sosial di bawah ini.",
        btn: "KIRIM EMAIL →",
        footer: "© 2026 Muhammad Rizal Fahlevi. Dibuat dengan Next.js.",
      },
    },
    en: {
      nav: { logo: "LOGO", tentang: "About", layanan: "Services", karya: "Portfolio", kontak: "Contact" },
      hero: {
        title: "01 — ABOUT ME",
        name1: "MUHAMMAD",
        name2: "RIZAL FAHLEVI",
        desc: "Graphic Designer & Illustrator with 5+ years of experience. Combining structured design expertise with imaginative illustration to create meaningful visuals.",
        btnKarya: "VIEW WORK →",
        btnKontak: "CONTACT ME",
      },
      layanan: {
        title: "02 — SERVICES",
        subtitle: "My",
        subtitleBold: "Services",
        services: [
          { title: "Social Media Design", desc: "Creating engaging and consistent visual content for social media, helping to build brand awareness and audience engagement." },
          { title: "Branding Design", desc: "Designing strong and distinctive visual brand identities, from logos and color palettes to comprehensive brand guidelines." },
          { title: "Promotional Design", desc: "Creating effective and attractive promotional materials, such as posters, banners, flyers, and marketing campaign content." },
          { title: "Advertising Design", desc: "Designing communicative and persuasive digital and print advertisements, with a targeted visual approach for each campaign." },
          { title: "Editorial Illustration", desc: "Providing illustrations that support and enrich editorial content, with visual styles that match the narrative and target audience." },
        ],
        btn: "Contact Me →",
      },
      karya: {
        title: "03 — PORTFOLIO",
        subtitle: "Featured",
        subtitleBold: "Projects",
        desc: "Some of the best projects I've worked on",
        projects: [
          { number: "01", category: "DESIGN", title: "Web Template Mock Up", desc: "Professional & Creative Web Design" },
          { number: "02", category: "DESIGN", title: "Mobile Application Design", desc: "UI/UX Design for Mobile Apps" },
          { number: "03", category: "ILLUSTRATION", title: "Editorial Illustration Series", desc: "Illustrations for Magazines & Editorial" },
          { number: "04", category: "DESIGN", title: "Brand Identity Design", desc: "Logo & Brand Guidelines for Startups" },
        ],
        link: "🔗 View all work on ",
        linkText: "Behance",
      },
      kontak: {
        title: "04 — CONTACT",
        subtitle: "Let's",
        subtitleBold: "Collaborate",
        desc: "Interested in working together? Reach out via email or social media below.",
        btn: "SEND EMAIL →",
        footer: "© 2026 Muhammad Rizal Fahlevi. Built with Next.js.",
      },
    },
  };

  const c = lang === "id" ? content.id : content.en;

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      {/* ============================================================ */}
      {/* NAVIGASI */}
      {/* ============================================================ */}
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-4 flex justify-between items-center bg-white border-b border-gray-200 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
        <div className="text-sm tracking-widest font-light text-gray-800">{c.nav.logo}</div>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-8 text-sm text-gray-600">
            <li><a href="#hero" className="hover:text-black transition">{c.nav.tentang}</a></li>
            <li><a href="#layanan" className="hover:text-black transition">{c.nav.layanan}</a></li>
            <li><a href="#karya" className="hover:text-black transition">{c.nav.karya}</a></li>
            <li><a href="#kontak" className="hover:text-black transition">{c.nav.kontak}</a></li>
          </ul>
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-full hover:border-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            <FaGlobe className="text-sm" />
            {lang === "id" ? "ID" : "EN"}
          </button>
        </div>
      </nav>

      {/* ============================================================ */}
      {/* SECTION 01 - HERO (Tentang) */}
      {/* ============================================================ */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center pt-28 px-6 md:px-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-left">
              <p className={`text-sm text-gray-400 tracking-widest mb-4 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                {c.hero.title}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className={`block transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  {c.hero.name1}
                </span>
                <span className={`block transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  {c.hero.name2}
                </span>
              </h1>
              <p className={`mt-6 text-gray-600 leading-relaxed max-w-lg text-sm md:text-base transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                {c.hero.desc}
              </p>
              <div className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-400 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <a href="#karya" className="px-8 py-3 bg-red-600 text-white text-sm tracking-wider hover:bg-red-700 transition">
                  {c.hero.btnKarya}
                </a>
                <a href="#kontak" className="px-8 py-3 border border-gray-300 text-gray-700 text-sm tracking-wider hover:border-gray-900 hover:text-gray-900 transition">
                  {c.hero.btnKontak}
                </a>
              </div>
            </div>

            <div className={`flex-1 flex justify-center md:justify-end transition-all duration-700 delay-200 ${heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
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
      <section
        id="layanan"
        ref={layananRef}
        className="py-24 px-6 md:px-20 border-t border-gray-200"
      >
        <div className="max-w-5xl mx-auto">
          <p className={`text-sm text-gray-400 tracking-widest mb-2 transition-all duration-700 ${layananVisible ? "opacity-100" : "opacity-0"}`}>
            {c.layanan.title}
          </p>
          <h2 className={`text-3xl md:text-5xl font-light text-gray-900 mb-12 transition-all duration-700 delay-100 ${layananVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {c.layanan.subtitle} <span className="font-medium">{c.layanan.subtitleBold}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.layanan.services.map((service, index) => (
              <div
                key={index}
                className={`group p-8 rounded-lg border border-gray-200 hover:bg-gray-900 hover:border-gray-900 transition-all duration-300 cursor-pointer ${index === 4 ? "md:col-span-2" : ""}`}
                style={{
                  opacity: layananVisible ? 1 : 0,
                  transform: layananVisible ? "translateY(0)" : "translateY(40px)",
                  transition: "all 0.7s ease",
                  transitionDelay: `${(index + 1) * 150}ms`,
                }}
              >
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-white transition">{service.title}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed group-hover:text-gray-300 transition">
                  {service.desc}
                </p>
                <a href="#kontak" className="inline-block mt-4 text-sm font-medium text-gray-500 group-hover:text-white transition">
                  {c.layanan.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 03 - KARYA */}
      {/* ============================================================ */}
      <section
        id="karya"
        ref={karyaRef}
        className="py-24 px-6 md:px-20 border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto">
          <p className={`text-sm text-gray-400 tracking-widest mb-2 transition-all duration-700 ${karyaVisible ? "opacity-100" : "opacity-0"}`}>
            {c.karya.title}
          </p>
          <h2 className={`text-3xl md:text-5xl font-light text-gray-900 mb-4 transition-all duration-700 delay-100 ${karyaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {c.karya.subtitle} <span className="font-medium">{c.karya.subtitleBold}</span>
          </h2>
          <p className={`text-gray-500 text-sm mb-12 transition-all duration-700 delay-150 ${karyaVisible ? "opacity-100" : "opacity-0"}`}>
            {c.karya.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.karya.projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-red-500"
                style={{
                  opacity: karyaVisible ? 1 : 0,
                  transform: karyaVisible ? "scale(1)" : "scale(0.9)",
                  transition: "all 0.7s ease",
                  transitionDelay: `${(index + 1) * 150}ms`,
                }}
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400 text-sm overflow-hidden">
                  <span>Gambar Proyek {index + 1}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 tracking-wider mb-1">{project.number} — {project.category}</p>
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-red-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={`text-center text-gray-500 text-sm mt-10 transition-all duration-700 delay-500 ${karyaVisible ? "opacity-100" : "opacity-0"}`}>
            {c.karya.link} <a href="https://www.behance.net/gallery/110230481/Design-Works-2026-Selected-Portfolio" target="_blank" className="underline hover:text-gray-900 transition">{c.karya.linkText}</a>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 04 - KONTAK */}
      {/* ============================================================ */}
      <section
        id="kontak"
        ref={kontakRef}
        className="py-24 px-6 md:px-20 border-t border-gray-200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className={`text-sm text-gray-400 tracking-widest mb-4 transition-all duration-700 ${kontakVisible ? "opacity-100" : "opacity-0"}`}>
            {c.kontak.title}
          </p>
          <h2 className={`text-3xl md:text-5xl font-light text-gray-900 mb-6 transition-all duration-700 delay-100 ${kontakVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {c.kontak.subtitle} <span className="font-medium">{c.kontak.subtitleBold}</span>
          </h2>
          <p className={`text-gray-600 max-w-lg mx-auto transition-all duration-700 delay-200 ${kontakVisible ? "opacity-100" : "opacity-0"}`}>
            {c.kontak.desc}
          </p>

          <a
            href="mailto:email@anda.com"
            className={`inline-block mt-8 px-10 py-4 bg-red-600 text-white hover:bg-red-700 transition text-sm tracking-wider transition-all duration-700 delay-300 ${kontakVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            {c.kontak.btn}
          </a>

          <div className={`mt-12 flex justify-center gap-8 text-2xl text-gray-500 transition-all duration-700 delay-400 ${kontakVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
      <footer className={`py-8 px-6 md:px-20 border-t border-gray-200 text-center text-sm text-gray-500 transition-all duration-700 delay-500 ${kontakVisible ? "opacity-100" : "opacity-0"}`}>
        <p>{c.kontak.footer}</p>
      </footer>
    </div>
  );
}