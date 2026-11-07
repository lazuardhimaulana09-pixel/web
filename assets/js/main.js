/**
 * Portofolio Lazuardhi Akbar Maulana Tsani
 * Ultra-fast Vanilla JavaScript (Zero Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. CERTIFICATES DATA ---
  const certificatesData = [
    {
      id: 'IDN-1782374906-182-66733',
      title: 'Mikrotik Dasar',
      issuer: 'ID-Networkers (IDN.ID)',
      category: 'net',
      categoryName: 'Jaringan',
      badgeClass: 'tag-net',
      date: 'Berlaku s.d 25 Jun 2029',
      verifyUrl: 'https://lms.idn.id/cert-verification',
      pdfUrl: 'Lazuardhi-Akbar-Maulana-Tsani-Mikrotik-Dasar-Sertifikat-Mikrotik-Dasar-LMS-ID-Networkers.pdf',
      thumb: 'assets/certificates/lazuardhi_akbar_maulana_tsani_mikrotik_dasar_sertifikat_mikrotik_dasar_lms_id_networkers_thumb.webp',
      full: 'assets/certificates/lazuardhi_akbar_maulana_tsani_mikrotik_dasar_sertifikat_mikrotik_dasar_lms_id_networkers_full.webp',
      description: 'Konfigurasi MikroTik RouterOS, DHCP Server/Client, NAT Masquerade, Firewall Filter, Simple Queue Bandwidth Limiter, Wireless Access Point.'
    },
    {
      id: 'IDN-1762353350-184-66733',
      title: 'Cisco Dasar',
      issuer: 'ID-Networkers (IDN.ID)',
      category: 'net',
      categoryName: 'Jaringan',
      badgeClass: 'tag-net',
      date: 'Berlaku s.d 05 Nov 2028',
      verifyUrl: 'https://lms.idn.id/cert-verification',
      pdfUrl: 'Lazuardhi-Akbar-Maulana-Tsani-Cisco-Dasar-Sertifikat-Cisco-Dasar-LMS-ID-Networkers.pdf',
      thumb: 'assets/certificates/lazuardhi_akbar_maulana_tsani_cisco_dasar_sertifikat_cisco_dasar_lms_id_networkers_thumb.webp',
      full: 'assets/certificates/lazuardhi_akbar_maulana_tsani_cisco_dasar_sertifikat_cisco_dasar_lms_id_networkers_full.webp',
      description: 'Cisco IOS CLI, VLAN 802.1Q, Inter-VLAN Routing (Router on a Stick), Trunking, Static Routing, dan Switching dasar.'
    },
    {
      id: 'IDN-1762423718-180-66733',
      title: 'Jaringan Komputer Dasar',
      issuer: 'ID-Networkers (IDN.ID)',
      category: 'net',
      categoryName: 'Jaringan',
      badgeClass: 'tag-net',
      date: 'Berlaku s.d 06 Nov 2028',
      verifyUrl: 'https://lms.idn.id/cert-verification',
      pdfUrl: 'Lazuardhi-Akbar-Maulana-Tsani-Jaringan-Dasar-Sertifikat-Jaringan-Komputer-Dasar-LMS-ID-Networkers.pdf',
      thumb: 'assets/certificates/lazuardhi_akbar_maulana_tsani_jaringan_dasar_sertifikat_jaringan_komputer_dasar_lms_id_networkers_thumb.webp',
      full: 'assets/certificates/lazuardhi_akbar_maulana_tsani_jaringan_dasar_sertifikat_jaringan_komputer_dasar_lms_id_networkers_full.webp',
      description: 'Konsep OSI 7 Layer, TCP/IP Model, Subnetting IPv4 (CIDR & VLSM), DNS, DHCP, Topologi LAN/WAN, Pengkabelan UTP T568A/B.'
    },
    {
      id: '350165853',
      title: 'MTCNA Quiz Questions (95/100)',
      issuer: 'ProProfs Quiz Assessment',
      category: 'net',
      categoryName: 'Jaringan',
      badgeClass: 'tag-net',
      date: '26 Oktober 2026',
      verifyUrl: 'Lazuardhi Akbar Maulana Tsani-350165853.pdf',
      pdfUrl: 'Lazuardhi Akbar Maulana Tsani-350165853.pdf',
      thumb: 'assets/certificates/lazuardhi_akbar_maulana_tsani_350165853_thumb.webp',
      full: 'assets/certificates/lazuardhi_akbar_maulana_tsani_350165853_full.webp',
      description: 'Lulus uji kompetensi materi resmi kurikulum MTCNA (MikroTik Certified Network Associate) dengan perolehan skor sempurna 95 dari 100.'
    },
    {
      id: '350286451',
      title: 'MTCNA Quiz Questions (94/100)',
      issuer: 'ProProfs Quiz Assessment',
      category: 'net',
      categoryName: 'Jaringan',
      badgeClass: 'tag-net',
      date: '05 November 2026',
      verifyUrl: 'Lazuardhi Akbar Maulana Tsani-350286451.pdf',
      pdfUrl: 'Lazuardhi Akbar Maulana Tsani-350286451.pdf',
      thumb: 'assets/certificates/lazuardhi_akbar_maulana_tsani_350286451_thumb.webp',
      full: 'assets/certificates/lazuardhi_akbar_maulana_tsani_350286451_full.webp',
      description: 'Uji kompetensi materi kurikulum resmi MTCNA (MikroTik Certified Network Associate) dengan skor 94 dari 100.'
    },
    {
      id: 'IDN-1762251503-11033-66733',
      title: 'Belajar Linux dari Nol',
      issuer: 'ID-Networkers (IDN.ID)',
      category: 'lin',
      categoryName: 'Linux',
      badgeClass: 'tag-lin',
      date: 'Berlaku s.d 04 Nov 2028',
      verifyUrl: 'https://lms.idn.id/cert-verification',
      pdfUrl: 'Lazuardhi-Akbar-Maulana-Tsani-Belajar-Linux-dari-Nol-Sertifikat-Belajar-Linux-dari-Nol-LMS-ID-Networkers-2.pdf',
      thumb: 'assets/certificates/lazuardhi_akbar_maulana_tsani_belajar_linux_dari_nol_sertifikat_belajar_linux_dari_nol_lms_id_networkers_2_thumb.webp',
      full: 'assets/certificates/lazuardhi_akbar_maulana_tsani_belajar_linux_dari_nol_sertifikat_belajar_linux_dari_nol_lms_id_networkers_2_full.webp',
      description: 'Administrasi Linux Debian/Ubuntu Server, struktur direktori FHS, manajemen izin file chmod/chown, user/group, dan remote SSH.'
    },
    {
      id: 'AC-963-67991148-12',
      title: 'Linux Fundamental',
      issuer: 'Aguna Course',
      category: 'lin',
      categoryName: 'Linux',
      badgeClass: 'tag-lin',
      date: '04 November 2025',
      verifyUrl: 'https://agunacourse.com/cek-sertifikat',
      pdfUrl: 'AC-963-67991148-12.pdf',
      thumb: 'assets/certificates/ac_963_67991148_12_thumb.webp',
      full: 'assets/certificates/ac_963_67991148_12_full.webp',
      description: 'Fundamental CLI terminal Linux, manajemen paket APT, pemantauan sistem (htop, ps, systemctl), serta konfigurasi jaringan Linux.'
    },
    {
      id: 'IDN-1771683787-13888-66733',
      title: 'Belajar Cyber Security dari Nol',
      issuer: 'ID-Networkers (IDN.ID)',
      category: 'sec',
      categoryName: 'Cyber Sec',
      badgeClass: 'tag-sec',
      date: 'Berlaku s.d 21 Feb 2029',
      verifyUrl: 'https://lms.idn.id/cert-verification',
      pdfUrl: 'Lazuardhi-Akbar-Maulana-Tsani-Belajar-Cyber-Security-dari-Nol-Sertifikat-Cyber-Security-Dasar-LMS-ID-Networkers.pdf',
      thumb: 'assets/certificates/lazuardhi_akbar_maulana_tsani_belajar_cyber_security_dari_nol_sertifikat_cyber_security_dasar_lms_id_networkers_thumb.webp',
      full: 'assets/certificates/lazuardhi_akbar_maulana_tsani_belajar_cyber_security_dari_nol_sertifikat_cyber_security_dasar_lms_id_networkers_full.webp',
      description: 'Fondasi Keamanan Siber, CIA Triad, pemindaian kerentanan jaringan, analisis ancaman, sistem hardening, dan proteksi kredensial.'
    },
    {
      id: 'AC-647-66819669-44',
      title: 'Python Fundamental',
      issuer: 'Aguna Course',
      category: 'code',
      categoryName: 'Python',
      badgeClass: 'tag-code',
      date: '30 Maret 2026',
      verifyUrl: 'https://agunacourse.com/cek-sertifikat',
      pdfUrl: 'AC-647-66819669-44.pdf',
      thumb: 'assets/certificates/ac_647_66819669_44_thumb.webp',
      full: 'assets/certificates/ac_647_66819669_44_full.webp',
      description: 'Sintaks Python 3, tipe data, logika percabangan, perulangan, fungsi modular, manipulasi struktur data, dan otomasi skrip dasar.'
    },
    {
      id: '12202611021483',
      title: 'Tutorial Dasar Menggunakan Github',
      issuer: 'Getskill.id',
      category: 'code',
      categoryName: 'Git / GitHub',
      badgeClass: 'tag-code',
      date: 'Berlaku s.d 02 Nov 2029',
      verifyUrl: 'https://getskill.id/certificate/12202611021483',
      pdfUrl: 'sertifikat-12202611021483.pdf',
      thumb: 'assets/certificates/sertifikat_12202611021483_thumb.webp',
      full: 'assets/certificates/sertifikat_12202611021483_full.webp',
      description: 'Version Control System menggunakan Git, branching, commit standard, pull request, kolaborasi repository, dan deployment GitHub Pages.'
    },
    {
      id: '416033169-171984096',
      title: 'Intermediate Typing (46 WPM - 97%)',
      issuer: 'Typing.com Assessment',
      category: 'type',
      categoryName: 'Mengetik',
      badgeClass: 'tag-type',
      date: '16 Agustus 2026',
      verifyUrl: 'https://www.typing.com/student/verify#416033169-171984096',
      pdfUrl: 'typingcom.pdf',
      thumb: 'assets/certificates/typingcom_thumb.webp',
      full: 'assets/certificates/typingcom_full.webp',
      description: 'Sertifikasi Kecepatan Mengetik 10 Jari (Touch Typing) dengan kecepatan 46 Kata Per Menit (WPM) dan akurasi tinggi 97%.'
    }
  ];

  // --- 2. OPTIMIZED THROTTLED SCROLL LISTENER (RAF Sync for 60/120 FPS) ---
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-drawer .nav-link');
  const backToTopBtn = document.getElementById('back-to-top');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const sections = document.querySelectorAll('section[id]');

  let isScrolling = false;
  function onScrollTick() {
    const scrollPos = window.scrollY;

    // Header state
    if (header) {
      if (scrollPos > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollPos > 400) backToTopBtn.classList.add('visible');
      else backToTopBtn.classList.remove('visible');
    }

    // Scrollspy active indicator
    let currentId = '';
    const spyPos = scrollPos + 220;
    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (spyPos >= top && spyPos < top + height) {
        currentId = sec.getAttribute('id');
        break;
      }
    }

    if (currentId) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }

    isScrolling = false;
  }

  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(onScrollTick);
      isScrolling = true;
    }
  }, { passive: true });

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 3. DYNAMIC TYPING EFFECT ---
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    const roles = [
      'Siswa TKJ @ SMKN 1 Kota Mojokerto',
      'Network Engineer (MikroTik & Cisco)',
      'Linux Server Administrator',
      'Cyber Security & Hardening Learner',
      'Python Automation & Scripting Enthusiast'
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function typeLoop() {
      const currentText = roles[roleIdx];
      if (isDeleting) {
        typedEl.textContent = currentText.substring(0, charIdx - 1);
        charIdx--;
        typingSpeed = 40;
      } else {
        typedEl.textContent = currentText.substring(0, charIdx + 1);
        charIdx++;
        typingSpeed = 75;
      }

      if (!isDeleting && charIdx === currentText.length) {
        typingSpeed = 2000; // Hold at end
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typingSpeed = 400; // Pause before next
      }

      setTimeout(typeLoop, typingSpeed);
    }
    typeLoop();
  }

  // --- 4. INTERACTIVE TERMINAL TABS ---
  const terminalContent = document.getElementById('terminal-content');
  const termTabs = document.querySelectorAll('.term-tab');

  const tabContents = {
    profile: `<span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$ cat profile.json
{
  <span class="t-key">"name"</span>: <span class="t-str">"Lazuardhi Akbar Maulana Tsani"</span>,
  <span class="t-key">"school"</span>: <span class="t-str">"SMKN 1 Kota Mojokerto"</span>,
  <span class="t-key">"major"</span>: <span class="t-str">"Teknik Komputer & Jaringan (TKJ)"</span>,
  <span class="t-key">"location"</span>: <span class="t-str">"Kota Mojokerto, Jawa Timur"</span>,
  <span class="t-key">"status"</span>: <span class="t-str">"Ready for Internship / PKL & IT Collaboration"</span>,
  <span class="t-key">"typing_speed"</span>: <span class="t-str">"46 WPM (97% Accuracy)"</span>,
  <span class="t-key">"motto"</span>: <span class="t-str">"Belajar dari nol, praktik sampai ahli."</span>
}
<span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$ <span class="typing-cursor"></span>`,

    skills: `<span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$ ./check-capabilities.sh
<span class="t-comment"># Loading verified technical competencies...</span>
[✓] MikroTik RouterOS   : Routing, Firewall NAT/Filter, Hotspot, Queues
[✓] Cisco IOS           : VLAN 802.1Q, Inter-VLAN Routing, Trunking
[✓] Linux Administration: Debian/Ubuntu, SSH, Systemd, Permissions, Shell
[✓] Cyber Security      : Reconnaissance, Hardening, CIA Triad, OWASP
[✓] Automation          : Python 3, Git, Bash Scripting, Web3Forms
<span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$ <span class="typing-cursor"></span>`,

    network: `<span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$ ip a show dev eth0
2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc mq state UP
    inet <span class="t-str">192.168.88.10/24</span> brd 192.168.88.255 scope global dynamic eth0
    valid_lft 86320sec preferred_lft 86320sec
<span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$ ping -c 3 idn.id
PING idn.id (103.28.12.12): 56 data bytes
64 bytes from 103.28.12.12: icmp_seq=0 ttl=58 time=<span class="t-num">12.4 ms</span>
64 bytes from 103.28.12.12: icmp_seq=1 ttl=58 time=<span class="t-num">11.8 ms</span>
64 bytes from 103.28.12.12: icmp_seq=2 ttl=58 time=<span class="t-num">12.1 ms</span>
--- idn.id ping statistics: 0% packet loss ---
<span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$ <span class="typing-cursor"></span>`,

    neofetch: [
      '<span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$ neofetch',
      '       _,met$$$$$gg.          <span class="t-cmd">lazuardhi@portfolio</span>',
      '    ,g$$$$$$$$$$$$$$$P.       -------------------',
      '  ,g$$P"     """Y$$.".        <span class="t-key">OS</span>: Debian GNU/Linux 12 (bookworm) x86_64',
      ' ,$$P\'              \'$$$.     <span class="t-key">Host</span>: Custom Lab Server',
      '\',$$P       ,ggs.     \'$$b:   <span class="t-key">Kernel</span>: 6.1.0-21-amd64',
      '\'d$$\'     ,$P"\'   .    $$$    <span class="t-key">Uptime</span>: 42 days, 7 hours',
      ' $$P      d$\'     ,    $$P    <span class="t-key">Shell</span>: bash 5.2.15',
      ' $$:      $$.   -    ,d$$\'    <span class="t-key">Terminal</span>: Portfolio-CLI v2.0',
      ' $$;      Y$b._   _,d$P\'      <span class="t-key">CPU</span>: Intel Core i5 @ 3.40GHz',
      ' Y$$.    \'.\'"Y$$$$P"\'         <span class="t-key">Memory</span>: 3140MiB / 16384MiB',
      '  \'$$b      "-.__             <span class="t-key">Network</span>: Gigabit Ethernet Full-Duplex',
      '   \'Y$$                       <span class="t-key">Certificates</span>: 11 Verified Badges',
      '<span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$ <span class="typing-cursor"></span>'
    ].join('\n')
  };

  termTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      termTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      if (tabContents[target] && terminalContent) {
        terminalContent.innerHTML = tabContents[target];
      }
    });
  });

  // --- 5. CERTIFICATES RENDER, FILTER & SEARCH ---
  const certGrid = document.getElementById('cert-grid');
  const certEmptyState = document.getElementById('cert-empty-state');
  const searchInput = document.getElementById('cert-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const certCountBadge = document.getElementById('cert-count-badge');

  let currentCategory = 'all';
  let currentSearch = '';

  function renderCertificates() {
    if (!certGrid) return;
    certGrid.innerHTML = '';

    const filtered = certificatesData.filter(cert => {
      const matchCat = currentCategory === 'all' || cert.category === currentCategory;
      const q = currentSearch.toLowerCase().trim();
      const matchSearch = !q || 
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.id.toLowerCase().includes(q) ||
        cert.description.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    if (certCountBadge) {
      certCountBadge.textContent = `${filtered.length} dari ${certificatesData.length} Sertifikat`;
    }

    if (filtered.length === 0) {
      certGrid.style.display = 'none';
      if (certEmptyState) certEmptyState.style.display = 'block';
      return;
    }

    certGrid.style.display = 'grid';
    if (certEmptyState) certEmptyState.style.display = 'none';

    filtered.forEach((cert, idx) => {
      const card = document.createElement('article');
      card.className = 'glass-card cert-card';
      card.setAttribute('data-category', cert.category);

      card.innerHTML = `
        <div class="cert-preview-box" data-idx="${idx}" title="Klik untuk memperbesar sertifikat">
          <img src="${cert.thumb}" alt="Sertifikat ${cert.title}" class="cert-thumb-img" loading="lazy" decoding="async" width="600" height="400">
          <div class="cert-preview-overlay">
            <span class="btn btn-primary btn-sm">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
              Perbesar
            </span>
          </div>
        </div>

        <div class="cert-info">
          <div class="cert-badge-row">
            <span class="cert-cat-tag ${cert.badgeClass}">${cert.categoryName}</span>
            <span class="cert-date">${cert.date}</span>
          </div>

          <h3 class="cert-title">${cert.title}</h3>
          <p class="cert-issuer">${cert.issuer}</p>
          <p style="font-size:0.82rem; color:var(--text-muted); line-height:1.55; margin-bottom:0.75rem;">${cert.description}</p>

          <div class="cert-id-box">
            <span style="font-size:0.7rem; color:var(--text-dim);">ID:</span>
            <code class="cert-id-code" title="${cert.id}">${cert.id}</code>
            <button class="copy-btn" data-copy="${cert.id}" title="Salin ID Sertifikat" aria-label="Salin ID Sertifikat ${cert.title}">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            </button>
          </div>

          <div class="cert-action-bar">
            <a href="${cert.pdfUrl}" target="_blank" class="cert-link-verify" title="Buka PDF Asli">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              File PDF
            </a>
            <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-link-verify" title="Periksa validitas di platform resmi">
              Verifikasi Online
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      `;

      // Click to open modal
      const previewBox = card.querySelector('.cert-preview-box');
      previewBox.addEventListener('click', () => {
        openModal(cert);
      });

      certGrid.appendChild(card);
    });

    // Attach copy listeners
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.getAttribute('data-copy');
        copyToClipboard(text);
      });
    });
  }

  // Auto-sync filter pill count badges with current certificatesData
  function updateFilterPills() {
    const counts = { all: certificatesData.length };
    certificatesData.forEach(c => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    filterBtns.forEach(btn => {
      const cat = btn.getAttribute('data-filter');
      const baseLabel = btn.getAttribute('data-label') || btn.textContent.replace(/\s*\(\d+\)/, '').trim();
      btn.setAttribute('data-label', baseLabel);
      const count = counts[cat] || 0;
      btn.textContent = `${baseLabel} (${count})`;
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      renderCertificates();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderCertificates();
    });
  }

  // --- 6. LIGHTBOX MODAL ---
  const modalBackdrop = document.getElementById('cert-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalPdfLink = document.getElementById('modal-pdf-link');
  const modalVerifyLink = document.getElementById('modal-verify-link');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openModal(cert) {
    if (!modalBackdrop) return;
    modalImg.src = cert.full;
    modalImg.alt = `Sertifikat ${cert.title} - ${cert.issuer}`;
    modalTitle.textContent = cert.title;
    modalPdfLink.href = cert.pdfUrl;
    modalVerifyLink.href = cert.verifyUrl;
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // --- 7. COPY TO CLIPBOARD & TOAST NOTIFICATION ---
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'success') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg width="16" height="16" fill="none" stroke="#10b981" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`ID disalin: ${text}`);
      }).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`ID disalin: ${text}`);
    } catch (err) {
      showToast('Gagal menyalin ID', 'error');
    }
    document.body.removeChild(tempInput);
  }

  // --- 8. CONTACT FORM SUBMISSION (Web3Forms) ---
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (btnSpinner) btnSpinner.style.display = 'inline-block';
      if (btnText) btnText.textContent = 'Mengirim Pesan...';
      if (submitBtn) submitBtn.disabled = true;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();

        if (data.success) {
          showToast('Pesan berhasil terkirim! Terima kasih.');
          contactForm.reset();
        } else {
          showToast(data.message || 'Gagal mengirim pesan.', 'error');
        }
      } catch (error) {
        showToast('Koneksi bermasalah. Silakan gunakan email langsung.', 'error');
      } finally {
        if (btnSpinner) btnSpinner.style.display = 'none';
        if (btnText) btnText.textContent = 'Kirim Pesan';
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // --- 9. SCROLL REVEAL OBSERVER ---
  document.documentElement.classList.add('js-ready');
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // Initial render
  updateFilterPills();
  renderCertificates();
});
