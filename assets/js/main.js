/**
 * PORTOFOLIO LAZUARDHI AKBAR MAULANA TSANI
 * SISWA TKJ @ SMKN 1 KOTA MOJOKERTO
 * THEME: MODEL 2 — THE NOC & TERMINAL CYBER-OPS
 * Ultra-Fast Native Static Architecture · Zero-Dependency
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. SOUND SYSTEM (WEB AUDIO API SYNTHESIZER — ZERO NETWORK ASSETS)
  // ==========================================================================
  class SoundEngine {
    constructor() {
      this.enabled = localStorage.getItem('sfx_enabled') !== 'false';
      this.ctx = null;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem('sfx_enabled', this.enabled);
      if (this.enabled) {
        this.playBeep(880, 0.08, 'sine');
      }
      return this.enabled;
    }

    // Mechanical keypress click
    playKey() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime;
        const freq = 1600 + Math.random() * 400;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.exponentialRampToValueAtTime(240, t + 0.022);

        gain.gain.setValueAtTime(0.035, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.022);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.023);
      } catch (e) {}
    }

    // Command enter / execute sound
    playEnter() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, t);
        osc.frequency.exponentialRampToValueAtTime(840, t + 0.05);

        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.055);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.06);
      } catch (e) {}
    }

    // Terminal alert / notification beep
    playBeep(freq = 750, dur = 0.08, type = 'sine') {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime;

        osc.type = type;
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.06, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + dur);
      } catch (e) {}
    }

    // Success chord (copy ID, message sent)
    playSuccess() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const t = this.ctx.currentTime;
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const startTime = t + idx * 0.055;

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, startTime);

          gain.gain.setValueAtTime(0.05, startTime);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.09);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(startTime);
          osc.stop(startTime + 0.1);
        });
      } catch (e) {}
    }
  }

  const sfx = new SoundEngine();

  // Setup SFX Toggle Buttons
  const sfxToggleBtn = document.getElementById('sfx-toggle');
  const sfxStatusText = document.getElementById('sfx-status-text');
  const mobileSfxToggle = document.getElementById('mobile-sfx-toggle');

  function updateSfxUI() {
    if (sfx.enabled) {
      if (sfxToggleBtn) sfxToggleBtn.classList.add('active');
      if (sfxStatusText) sfxStatusText.textContent = 'SFX: ON';
      if (mobileSfxToggle) mobileSfxToggle.textContent = '🔊 SFX: ON';
    } else {
      if (sfxToggleBtn) sfxToggleBtn.classList.remove('active');
      if (sfxStatusText) sfxStatusText.textContent = 'SFX: OFF';
      if (mobileSfxToggle) mobileSfxToggle.textContent = '🔇 SFX: OFF';
    }
  }
  updateSfxUI();

  if (sfxToggleBtn) {
    sfxToggleBtn.addEventListener('click', () => {
      sfx.toggle();
      updateSfxUI();
      showToast(sfx.enabled ? 'Efek Suara Terminal Aktif' : 'Efek Suara Terminal Dinonaktifkan', 'info');
    });
  }

  if (mobileSfxToggle) {
    mobileSfxToggle.addEventListener('click', () => {
      sfx.toggle();
      updateSfxUI();
      showToast(sfx.enabled ? 'Efek Suara Terminal Aktif' : 'Efek Suara Terminal Dinonaktifkan', 'info');
    });
  }

  // ==========================================================================
  // 2. CERTIFICATES DATA (11 VERIFIED CREDENTIALS)
  // ==========================================================================
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
      description: 'Lulus uji kompetensi materi kurikulum resmi MTCNA (MikroTik Certified Network Associate) dengan skor 95 dari 100.'
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
      description: 'Perintah dasar terminal Linux, manajemen berkas & izin (chmod/chown), manajemen paket APT Debian/Ubuntu, dan administrasi server CLI.'
    },
    {
      id: 'AC-963-67991148-12',
      title: 'Linux Fundamental',
      issuer: 'Aguna Course',
      category: 'lin',
      categoryName: 'Linux',
      badgeClass: 'tag-lin',
      date: '10 November 2026',
      verifyUrl: 'https://agunacourse.com/certificate/AC-963-67991148-12',
      pdfUrl: 'AC-963-67991148-12.pdf',
      thumb: 'assets/certificates/ac_963_67991148_12_thumb.webp',
      full: 'assets/certificates/ac_963_67991148_12_full.webp',
      description: 'Pengenalan kernel Linux, navigasi direktori FHS, proses background/foreground, shell scripting dasar, dan remote server SSH.'
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
      description: 'Konsep dasar CIA Triad, identifikasi kerentanan jaringan, analisis serangan umum, pengamanan password, dan dasar firewall.'
    },
    {
      id: 'AC-647-66819669-44',
      title: 'Python Fundamental',
      issuer: 'Aguna Course',
      category: 'code',
      categoryName: 'Python & Git',
      badgeClass: 'tag-code',
      date: '10 November 2026',
      verifyUrl: 'https://agunacourse.com/certificate/AC-647-66819669-44',
      pdfUrl: 'AC-647-66819669-44.pdf',
      thumb: 'assets/certificates/ac_647_66819669_44_thumb.webp',
      full: 'assets/certificates/ac_647_66819669_44_full.webp',
      description: 'Sintaks dasar Python 3, tipe data, struktur kontrol alur (if/else, looping), fungsi modular, manipulasi string, dan logika skrip otomatisasi.'
    },
    {
      id: '12202611021483',
      title: 'Tutorial Dasar Menggunakan Github',
      issuer: 'Getskill.id',
      category: 'code',
      categoryName: 'Python & Git',
      badgeClass: 'tag-code',
      date: '02 November 2026',
      verifyUrl: 'https://getskill.id/certificate/12202611021483',
      pdfUrl: 'sertifikat-12202611021483.pdf',
      thumb: 'assets/certificates/sertifikat_12202611021483_thumb.webp',
      full: 'assets/certificates/sertifikat_12202611021483_full.webp',
      description: 'Dasar version control Git, inisialisasi repositori, commit, branching, remote repository GitHub, push/pull, dan GitHub Pages static deployment.'
    },
    {
      id: '416033169-171984096',
      title: 'Intermediate Typing Certificate (46 WPM - 97%)',
      issuer: 'Typing.com',
      category: 'type',
      categoryName: 'Mengetik',
      badgeClass: 'tag-type',
      date: '28 Oktober 2026',
      verifyUrl: 'https://www.typing.com/student/verify#416033169-171984096',
      pdfUrl: 'typingcom.pdf',
      thumb: 'assets/certificates/typingcom_thumb.webp',
      full: 'assets/certificates/typingcom_full.webp',
      description: 'Uji sertifikasi mengetik 10 jari resmi Typing.com dengan kecepatan rata-rata 46 Words Per Minute (WPM) dan tingkat akurasi 97%.'
    }
  ];

  // ==========================================================================
  // 3. TYPING EFFECT IN HERO SECTION
  // ==========================================================================
  const typedTextEl = document.getElementById('typed-text');
  const typingPhrases = [
    'Siswa TKJ @ SMKN 1 Kota Mojokerto',
    'Spesialisasi MikroTik RouterOS & Cisco',
    'Administrasi Server Linux Debian & Ubuntu',
    'Cyber Security & Network Defense Dasar',
    'Siap Magang / PKL Industri IT 2026'
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function typeLoop() {
    if (!typedTextEl) return;
    const currentPhrase = typingPhrases[phraseIdx];

    if (isDeleting) {
      typedTextEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      typedTextEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 65;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1600; // Pause at end of phrase
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % typingPhrases.length;
      typingSpeed = 350; // Pause before typing new phrase
    }

    setTimeout(typeLoop, typingSpeed);
  }
  typeLoop();

  // ==========================================================================
  // 4. INTERACTIVE LIVE TERMINAL 2.0 ENGINE
  // ==========================================================================
  const termContainer = document.getElementById('terminal-container');
  const termScreen = document.getElementById('terminal-screen');
  const termHistory = document.getElementById('term-history');
  const termInput = document.getElementById('term-cli-input');
  const termTabs = document.querySelectorAll('.term-tab');
  const heroTermBtn = document.getElementById('hero-term-btn');

  let activeTab = 'live';
  const commandHistory = [];
  let historyIndex = -1;

  // Preset Tab Content
  const tabContents = {
    profile: `{\n  "name": "Lazuardhi Akbar Maulana Tsani",\n  "school": "SMKN 1 Kota Mojokerto",\n  "major": "Teknik Komputer & Jaringan (TKJ)",\n  "location": "Kota Mojokerto, Jawa Timur, Indonesia",\n  "status": "Ready for Internship / PKL & IT Collaboration",\n  "typing_speed": "46 WPM (97% Accuracy Certified)",\n  "motto": "Belajar dari nol, praktik sampai ahli.",\n  "specialization": ["MikroTik RouterOS", "Cisco IOS", "Linux Debian", "Security"]\n}`,
    network: `[interface]\nname=ether1-gateway type=ether mac-address=D4:01:C3:XX:XX:01 status=UP speed=1000M\nname=ether2-lan-guru type=vlan vlan-id=10 ip=192.168.10.1/24 dhcp=enabled\nname=ether3-lan-siswa type=vlan vlan-id=20 ip=192.168.20.1/24 hotspot=enabled\nname=ether4-trunk type=ether 802.1Q=trunk-to-cisco2960\n\n[firewall_nat]\nrule=0 chain=srcnat out-interface=ether1 action=masquerade\n\n[queue_simple]\nname="hotspot-limit" target=192.168.20.0/24 max-limit=10M/10M`,
    skills: `#!/bin/bash\n# Matriks Keahlian Lazuardhi Akbar Maulana Tsani\necho "[1] Routing & Switching: MikroTik RouterOS v7, Cisco IOS, VLAN 802.1Q"\necho "[2] Linux Server: Debian 12 Headless, Systemd, SSH Ed25519, UFW Firewall"\necho "[3] Cyber Security: CIA Triad, Port Analysis, Password Policy Audit"\necho "[4] Automation: Python 3 Subnetting Script, Git & GitHub Pages"\necho "[5] Productivity: 46 WPM Touch Typing (97% akurasi di Typing.com)"\nexit 0`,
    neofetch: `        _,met$$$$$gg.          lazuardhi@smkn1-tkj\n     ,g$$$$$$$$$$$$$$$P.       -------------------\n   ,g$$P"           """Y$$.    OS: Debian GNU/Linux 12 (bookworm) x86_64\n  ,$$P'              \`$$$.   Host: SMKN 1 Mojokerto IT Lab Workstation\n',$$P       ,ggs.     \`$$b:  Kernel: 6.6.14-tkj-hardened\n\`d$$'     ,$P"'   .    $$$   Uptime: 99.98% (High Availability)\n $$P      d$'     ,    $$$P  Shell: bash 5.2.15\n $$:      $$.   -    ,d$$'   Terminal: Cyber-Ops Web Shell 2.0\n $$;      Y$b._   _,d$P'     CPU: Intel Core i5 (Virtual Router Core)\n Y$$.    \`."Y$$$$P"'         Memory: 2048MiB / 8192MiB\n \`$$b      "-.__             Status: SIAP MAGANG / PKL INDUSTRI IT\n  \`Y$$b                      Network: MikroTik RB750Gr3 + Cisco 2960\n   \`Y$$.                     Typing: 46 WPM (97% Accuracy)\n     \`$$b.\n       \`Y$$b.\n`
  };

  function appendToTerminal(htmlContent) {
    if (!termHistory) return;
    const row = document.createElement('div');
    row.className = 'term-row';
    row.innerHTML = htmlContent;
    termHistory.appendChild(row);
    if (termScreen) termScreen.scrollTop = termScreen.scrollHeight;
  }

  function handleCommand(cmd) {
    const rawCmd = cmd.trim();
    const parts = rawCmd.split(/\s+/);
    const action = parts[0].toLowerCase();

    sfx.playEnter();

    // Log user input
    appendToTerminal(`<span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$&nbsp;<strong>${escapeHtml(rawCmd)}</strong>`);

    if (rawCmd.length > 0) {
      commandHistory.push(rawCmd);
      historyIndex = commandHistory.length;
    }

    if (!action) return;

    switch (action) {
      case 'help':
        appendToTerminal(`
<div style="margin:0.35rem 0;">
  <span class="t-info">Daftar Perintah Tersedia:</span><br />
  • <span class="t-cmd">help</span>       : Menampilkan panduan perintah terminal<br />
  • <span class="t-cmd">cv</span>         : Membuka berkas Curriculum Vitae resmi (PDF/Print)<br />
  • <span class="t-cmd">certs</span>      : Menampilkan ringkasan 11 sertifikat kompetensi resmi<br />
  • <span class="t-cmd">skills</span>     : Menampilkan protokol jaringan &amp; matriks keahlian<br />
  • <span class="t-cmd">ping [host]</span>: Menjalankan simulasi pengujian latensi ICMP<br />
  • <span class="t-cmd">neofetch</span>   : Menampilkan informasi sistem &amp; ASCII art<br />
  • <span class="t-cmd">status</span>     : Memeriksa status port router &amp; koneksi jaringan<br />
  • <span class="t-cmd">whoami</span>     : Identitas lengkap &amp; profil Lazuardhi<br />
  • <span class="t-cmd">contact</span>    : Informasi kontak langsung &amp; tawaran PKL<br />
  • <span class="t-cmd">clear</span>      : Membersihkan layar terminal
</div>`);
        break;

      case 'cv':
        appendToTerminal(`<span class="t-success">Membuka berkas Curriculum Vitae resmi Lazuardhi di tab baru...</span>`);
        sfx.playSuccess();
        setTimeout(() => {
          window.open('cv.html', '_blank');
        }, 300);
        break;

      case 'certs':
        let certsList = `<div style="margin:0.35rem 0;"><span class="t-info">11 Sertifikasi Resmi Terverifikasi:</span><br />`;
        certificatesData.forEach((c, idx) => {
          certsList += `[${idx + 1}] <span class="t-key">${c.title}</span> — ${c.issuer} (ID: ${c.id})<br />`;
        });
        certsList += `<span style="color:var(--text-dim);">Gunakan bagian Sertifikasi di halaman ini untuk pratinjau gambar &amp; unduh PDF.</span></div>`;
        appendToTerminal(certsList);
        break;

      case 'skills':
        appendToTerminal(`
<div style="margin:0.35rem 0;">
  <span class="t-info">Matriks Penguasaan Protokol &amp; CLI:</span><br />
  • <span class="t-key">Jaringan</span>: MikroTik RouterOS v7, Cisco IOS, VLAN 802.1Q, NAT, Simple Queue, CIDR/VLSM<br />
  • <span class="t-key">Linux SysAdmin</span>: Debian 12 Headless, Systemd, SSH Ed25519, UFW Firewall, Bash CLI<br />
  • <span class="t-key">Cyber Security</span>: CIA Triad Model, Port Scanning, Default Credential Hardening<br />
  • <span class="t-key">Otomasi</span>: Python 3 Subnet Calculator, Git Commit &amp; GitHub Pages Deployment<br />
  • <span class="t-key">Produktivitas</span>: 46 WPM Touch Typing (97% Akurasi di Typing.com), Crimping UTP T568A/B
</div>`);
        break;

      case 'ping':
        const targetHost = parts[1] || 'smkn1mojokerto.sch.id';
        appendToTerminal(`<span class="t-info">PING ${escapeHtml(targetHost)} (103.119.82.20) 56(84) bytes of data.</span>`);
        let count = 1;
        const pingInterval = setInterval(() => {
          if (count > 4) {
            clearInterval(pingInterval);
            appendToTerminal(`
<span class="t-success">--- ${escapeHtml(targetHost)} ping statistics ---</span><br />
4 packets transmitted, 4 received, 0% packet loss, time 3006ms<br />
rtt min/avg/max/mdev = 10.912/11.540/12.231/0.480 ms
`);
            sfx.playSuccess();
            return;
          }
          const ms = (10.5 + Math.random() * 2.2).toFixed(1);
          appendToTerminal(`64 bytes from 103.119.82.20: icmp_seq=${count} ttl=58 time=${ms} ms`);
          sfx.playKey();
          count++;
        }, 320);
        break;

      case 'neofetch':
        appendToTerminal(`<pre style="font-family:var(--font-mono); font-size:0.75rem; color:#a7f3d0; margin:0.35rem 0; overflow-x:auto;">${escapeHtml(tabContents.neofetch)}</pre>`);
        break;

      case 'status':
      case 'netstat':
        appendToTerminal(`
<div style="margin:0.35rem 0;">
  <span class="t-info">Router Interfaces Status:</span><br />
  ether1 (WAN)      : <span class="t-success">[UP]</span> 1000M Full-Duplex • IP 192.168.1.50/24 (GW)<br />
  ether2 (LAN_GURU) : <span class="t-success">[UP]</span> VLAN 10 • 192.168.10.1/24 (DHCP Active)<br />
  ether3 (LAN_SISWA): <span class="t-warn">[UP]</span> VLAN 20 • Hotspot Server (Simple Queue Active)<br />
  ether4 (TRUNK_SW) : <span class="t-success">[UP]</span> 802.1Q Trunk Link to Cisco Catalyst 2960<br />
  wlan1 (AP_LAB)    : <span class="t-info">[UP]</span> 5GHz 802.11ac WPA2-Enterprise Active
</div>`);
        break;

      case 'whoami':
        appendToTerminal(`
<div style="margin:0.35rem 0;">
  <span class="t-success">Lazuardhi Akbar Maulana Tsani</span><br />
  Siswa Teknik Komputer dan Jaringan (TKJ) — SMKN 1 Kota Mojokerto.<br />
  Fokus: MikroTik, Cisco, Administrasi Server Linux, &amp; Keamanan Siber.<br />
  Status: <span class="t-info">Terbuka untuk Program Magang / PKL Industri IT</span>.
</div>`);
        break;

      case 'contact':
        appendToTerminal(`
<div style="margin:0.35rem 0;">
  <span class="t-info">Saluran Komunikasi:</span><br />
  • Email   : <a href="mailto:lazuardhimaulana09@gmail.com" style="color:var(--cyan);">lazuardhimaulana09@gmail.com</a><br />
  • GitHub  : <a href="https://github.com/lazuardhimaulana09-pixel" target="_blank" style="color:var(--cyan);">github.com/lazuardhimaulana09-pixel</a><br />
  • LinkedIn: <a href="https://www.linkedin.com/in/lazuardhiamt" target="_blank" style="color:var(--cyan);">linkedin.com/in/lazuardhiamt</a><br />
  • Lokasi  : Kota Mojokerto, Jawa Timur, Indonesia
</div>`);
        break;

      case 'clear':
        if (termHistory) termHistory.innerHTML = '';
        break;

      default:
        appendToTerminal(`<span style="color:#ef4444;">bash: ${escapeHtml(action)}: command not found. Ketik <span class="t-cmd">help</span> untuk melihat daftar perintah.</span>`);
        sfx.playBeep(320, 0.1, 'sawtooth');
        break;
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // CLI Input Listeners
  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      sfx.playKey();

      if (e.key === 'Enter') {
        e.preventDefault();
        const cmd = termInput.value;
        termInput.value = '';
        handleCommand(cmd);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0 && historyIndex > 0) {
          historyIndex--;
          termInput.value = commandHistory[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          termInput.value = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          termInput.value = '';
        }
      }
    });
  }

  // Tab Switching Handler
  termTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      termTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.getAttribute('data-tab');
      sfx.playBeep(640, 0.05);

      const promptLine = document.getElementById('term-prompt-line');

      if (activeTab === 'live') {
        if (promptLine) promptLine.style.display = 'flex';
        if (termHistory) {
          termHistory.innerHTML = `
            <div class="term-row">
              <span class="t-info">Mode Terminal CLI Interaktif Aktif.</span><br />
              <span style="color:var(--text-dim);">Ketik <span class="t-cmd">help</span> untuk daftar perintah, atau gunakan tombol bantuan di bawah.</span>
            </div>
          `;
        }
        if (termInput) termInput.focus();
      } else {
        if (promptLine) promptLine.style.display = 'none';
        const content = tabContents[activeTab] || '';
        if (termHistory) {
          termHistory.innerHTML = `
            <div class="term-row">
              <span class="t-prompt">lazuardhi@smkn1</span>:<span class="t-path">~</span>$ cat ${activeTab}
            </div>
            <pre style="font-family:var(--font-mono); font-size:0.84rem; color:#e2e8f0; margin-top:0.4rem; white-space:pre-wrap;">${escapeHtml(content)}</pre>
          `;
        }
      }
    });
  });

  // Terminal Chips Quick Action
  const termChips = document.querySelectorAll('.term-chip');
  termChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (activeTab !== 'live') {
        const liveTab = document.querySelector('.term-tab[data-tab="live"]');
        if (liveTab) liveTab.click();
      }
      if (termInput) {
        termInput.value = cmd;
        handleCommand(cmd);
        termInput.value = '';
      }
    });
  });

  // Hero Terminal Button shortcut
  if (heroTermBtn) {
    heroTermBtn.addEventListener('click', () => {
      const liveTab = document.querySelector('.term-tab[data-tab="live"]');
      if (liveTab) liveTab.click();
      if (termContainer) {
        termContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setTimeout(() => {
        if (termInput) termInput.focus();
      }, 500);
    });
  }

  // ==========================================================================
  // 5. COMMAND PALETTE (CTRL+K / QUICK JUMP)
  // ==========================================================================
  const cmdPalette = document.getElementById('cmd-palette');
  const cmdPaletteTrigger = document.getElementById('cmd-palette-trigger');
  const cmdInput = document.getElementById('cmd-input');
  const cmdList = document.getElementById('cmd-list');

  function openCommandPalette() {
    if (!cmdPalette) return;
    cmdPalette.classList.add('active');
    sfx.playBeep(720, 0.06);
    if (cmdInput) {
      cmdInput.value = '';
      filterCommandPalette('');
      setTimeout(() => cmdInput.focus(), 50);
    }
  }

  function closeCommandPalette() {
    if (!cmdPalette) return;
    cmdPalette.classList.remove('active');
  }

  if (cmdPaletteTrigger) {
    cmdPaletteTrigger.addEventListener('click', openCommandPalette);
  }

  // Global Keyboard Listener for Ctrl+K, Cmd+K, and Slash (/)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (cmdPalette && cmdPalette.classList.contains('active')) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    } else if (e.key === 'Escape') {
      if (cmdPalette && cmdPalette.classList.contains('active')) {
        closeCommandPalette();
      }
      closeModal();
    }
  });

  if (cmdPalette) {
    cmdPalette.addEventListener('click', (e) => {
      if (e.target === cmdPalette) {
        closeCommandPalette();
      }
    });
  }

  function filterCommandPalette(query) {
    if (!cmdList) return;
    const q = query.toLowerCase().trim();
    const items = cmdList.querySelectorAll('.cmd-item');

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      sfx.playKey();
      filterCommandPalette(e.target.value);
    });
  }

  const cmdActionTerm = document.getElementById('cmd-action-term');
  if (cmdActionTerm) {
    cmdActionTerm.addEventListener('click', () => {
      closeCommandPalette();
      if (heroTermBtn) heroTermBtn.click();
    });
  }

  // ==========================================================================
  // 6. CERTIFICATES RENDER WITH SHIMMER SKELETON SCREEN
  // ==========================================================================
  const certGrid = document.getElementById('cert-grid');
  const certSearch = document.getElementById('cert-search');
  const certCountBadge = document.getElementById('cert-count-badge');
  const emptyState = document.getElementById('cert-empty-state');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let currentFilter = 'all';
  let searchQuery = '';

  function renderSkeleton(count = 6) {
    if (!certGrid) return;
    let skeletonHTML = '';
    for (let i = 0; i < count; i++) {
      skeletonHTML += `
        <div class="glass-card cert-card skeleton-card">
          <div class="skeleton-thumb skeleton-shimmer"></div>
          <div class="skeleton-content">
            <div class="skeleton-row">
              <div class="skeleton-pill skeleton-shimmer"></div>
              <div class="skeleton-date skeleton-shimmer"></div>
            </div>
            <div class="skeleton-title skeleton-shimmer"></div>
            <div class="skeleton-issuer skeleton-shimmer"></div>
            <div class="skeleton-desc skeleton-shimmer"></div>
            <div class="skeleton-id skeleton-shimmer"></div>
          </div>
        </div>
      `;
    }
    certGrid.innerHTML = skeletonHTML;
  }

  function renderCertificates(withSkeleton = false) {
    if (!certGrid) return;

    if (withSkeleton) {
      renderSkeleton(6);
      setTimeout(doRender, 180);
    } else {
      doRender();
    }
  }

  function doRender() {
    const filtered = certificatesData.filter(cert => {
      const matchCat = currentFilter === 'all' || cert.category === currentFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.id.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.description.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    if (certCountBadge) {
      certCountBadge.textContent = `${filtered.length} dari ${certificatesData.length} Sertifikat`;
    }

    if (filtered.length === 0) {
      certGrid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    let html = '';
    filtered.forEach((cert, idx) => {
      html += `
        <div class="glass-card cert-card" data-idx="${idx}">
          <div class="cert-thumb-wrap" onclick="openCertModalById('${cert.id}')">
            <img src="${cert.thumb}" alt="Sertifikat ${escapeHtml(cert.title)}" class="cert-thumb" loading="lazy" />
            <div class="cert-overlay-action">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              <span>Klik untuk Pratinjau</span>
            </div>
          </div>

          <div class="cert-body">
            <div class="cert-meta-row">
              <span class="cert-badge ${cert.badgeClass}">${cert.categoryName}</span>
              <span class="cert-date">${cert.date}</span>
            </div>

            <h3 class="cert-title">${cert.title}</h3>
            <div class="cert-issuer">${cert.issuer}</div>
            <p class="cert-desc">${cert.description}</p>

            <div class="cert-id-box">
              <span class="cert-id-text" title="${cert.id}">ID: ${cert.id}</span>
              <button class="copy-id-btn" data-id="${cert.id}" title="Salin ID Sertifikat">
                <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <span>Salin</span>
              </button>
            </div>

            <div class="cert-actions">
              <a href="${cert.pdfUrl}" target="_blank" class="btn btn-outline cert-btn" title="Buka berkas PDF resmi">
                <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                PDF
              </a>
              <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary cert-btn" title="Validasi online">
                Verifikasi &rarr;
              </a>
            </div>
          </div>
        </div>
      `;
    });

    certGrid.innerHTML = html;

    // Attach copy button listeners
    const copyBtns = certGrid.querySelectorAll('.copy-id-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idToCopy = btn.getAttribute('data-id');
        copyToClipboard(idToCopy, btn);
      });
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      sfx.playBeep(580, 0.05);
      renderCertificates(true);
    });
  });

  // Search Input
  if (certSearch) {
    let debounceTimer;
    certSearch.addEventListener('input', (e) => {
      sfx.playKey();
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchQuery = e.target.value;
        renderCertificates(false);
      }, 180);
    });
  }

  // Initial Certificates Render
  renderCertificates(false);

  // ==========================================================================
  // 7. LIGHTBOX CERTIFICATE MODAL
  // ==========================================================================
  const certModal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalPdfLink = document.getElementById('modal-pdf-link');
  const modalVerifyLink = document.getElementById('modal-verify-link');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  window.openCertModalById = function(id) {
    const cert = certificatesData.find(c => c.id === id);
    if (!cert || !certModal) return;

    if (modalImg) {
      modalImg.src = cert.full;
      modalImg.alt = cert.title;
    }
    if (modalTitle) modalTitle.textContent = `${cert.title} — ${cert.issuer}`;
    if (modalPdfLink) modalPdfLink.href = cert.pdfUrl;
    if (modalVerifyLink) modalVerifyLink.href = cert.verifyUrl;

    certModal.classList.add('active');
    sfx.playBeep(840, 0.06);
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!certModal) return;
    certModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeModal();
    });
  }

  // ==========================================================================
  // 8. COPY TO CLIPBOARD & TOAST NOTIFICATION
  // ==========================================================================
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="color:var(--primary);"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
      <span>${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  function copyToClipboard(text, btnElement) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        handleCopySuccess(text, btnElement);
      }).catch(() => {
        fallbackCopy(text, btnElement);
      });
    } else {
      fallbackCopy(text, btnElement);
    }
  }

  function fallbackCopy(text, btnElement) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      handleCopySuccess(text, btnElement);
    } catch (e) {
      showToast('Gagal menyalin ID.', 'error');
    }
    document.body.removeChild(ta);
  }

  function handleCopySuccess(text, btnElement) {
    sfx.playSuccess();
    showToast(`ID Sertifikat [${text}] berhasil disalin!`);
    if (btnElement) {
      const originalText = btnElement.innerHTML;
      btnElement.innerHTML = `
        <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        <span>Tersalin!</span>
      `;
      setTimeout(() => {
        btnElement.innerHTML = originalText;
      }, 2000);
    }
  }

  // ==========================================================================
  // 9. ANIMATED NUMBER COUNTERS
  // ==========================================================================
  const statCards = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  function runCounters() {
    statCards.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      if (isNaN(target)) return;

      const duration = 1400;
      const start = 0;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const currentVal = Math.floor(easeOutQuad * target);

        el.textContent = `${currentVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = `${target}${suffix}`;
        }
      }
      requestAnimationFrame(update);
    });
  }

  // Intersection Observer for Stats Counter
  const statsSection = document.querySelector('.stats-bar');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          runCounters();
        }
      });
    }, { threshold: 0.25 });
    observer.observe(statsSection);
  }

  // ==========================================================================
  // 10. CONTACT FORM SUBMISSION (Web3Forms API)
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      sfx.playKey();

      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.textContent = 'Mengirim Pesan...';
      if (btnSpinner) btnSpinner.style.display = 'inline-block';

      const formData = new FormData(contactForm);

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();

        if (data.success) {
          sfx.playSuccess();
          showToast('Pesan berhasil terkirim! Saya akan segera merespons.');
          contactForm.reset();
        } else {
          showToast(data.message || 'Gagal mengirim pesan, silakan hubungi langsung via email.', 'error');
        }
      } catch (err) {
        showToast('Terjadi kesalahan koneksi. Silakan kirim via email langsung.', 'error');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = 'Kirim Pesan';
        if (btnSpinner) btnSpinner.style.display = 'none';
      }
    });
  }

  // ==========================================================================
  // 11. NAVIGATION & MOBILE DRAWER
  // ==========================================================================
  const hamburger = document.getElementById('hamburger');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const drawerLinks = document.querySelectorAll('.mobile-drawer .nav-link');
  const mobileCmdTrigger = document.getElementById('mobile-cmd-trigger');
  const backToTop = document.getElementById('back-to-top');

  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      const expanded = mobileDrawer.classList.contains('active');
      hamburger.setAttribute('aria-expanded', expanded);
      document.body.style.overflow = expanded ? 'hidden' : '';
      sfx.playBeep(640, 0.05);
    });

    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (mobileCmdTrigger) {
    mobileCmdTrigger.addEventListener('click', () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      }
      openCommandPalette();
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Back to top visibility
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Scroll spy
    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute('id');

      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      sfx.playBeep(780, 0.06);
    });
  }

});
