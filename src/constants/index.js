
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "track",
    title: "Layanan",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const navLinksAlt = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/formulir/orangpribadi",
    title: "Orang Pribadi",
  },
  {
    id: "/formulir/badan",
    title: "Badan",
  },

];

export const formulirCard = [
  {
    imgUrl: '/npwp.png',
    title: 'PENDAFTARAN NPWP',


    //modals
    modalTitle: 'SYARAT PENDAFTARAN NPWP ORANG PRIBADI :',
    syarats: ['Formulir Pendaftaran NPWP', 'Fotocopy KTP', 'Surat Pernyataan Usaha atau Pekerjaan Bebas (Jila Wajib Pajak Melakukan Usaha/Pekerjaan Bebas', 'Daftar online di https://ereg.pajak.go.id/login' ],
    download: '/file-npwp.pdf',
    downloadDesc: 'Download formulir pendaftaran NPWP',

    download1: '/file-bebasusaha.pdf',
    downloadDesc1: 'Download formulir surat pernyataan usaha atau pekerjaan bebas',

  },

  {
    imgUrl: '/printer.png',
    title: 'CETAK ULANG NPWP OP',
    //modals
    modalTitle: 'SYARAT CETAK ULANG NPWP ORANG PRIBADI :',
    syarats: ['Formulir CETAK ULANG NPWP', 'Fotocopy KTP',  ],
    download: '/file-cetakulangnpwp.pdf',
    downloadDesc: 'Download formulir cetak ulang NPWP',
  },

  {
    imgUrl: '/eraser.png',
    title: 'PENGHAPUSAN NPWP OP',
    //modals
    modalTitle: 'SYARAT Penghapusan NPWP :',
    syarats: ['Formulir Formulir Penghapusan NPWP', 'Fotocopy KTP', 'Fotocopy NPWP', 'Surat Pernyataan', 'Akta Kematian (Jika alasan meninggal)','FC Kartu Keluarga (Istri memilih gabung dengan suami)','FC NPWP Suami (Istri memilih gabung dengan suami)'  ],
    download: '/file-hapusNPWPOP',
    downloadDesc: 'Download formulir penghapusan NPWP',
    download1: '/file-NPWPOPWARIS',
    downloadDesc1: 'Download surat pernyataan (karena WP meninggal dunia)',
    download2: '/file-NPWPOPGABUNG',
    downloadDesc2: 'Download surat pernyataan (karena NPWP  dengan suami)',
    download3: '/file-NPWPOPGANDA',
    downloadDesc3: 'Download surat pernyataan (memiliki lebih dari satu NPWP)',
  },
  {
    imgUrl: '/disabled.png',
    title: 'PENETEPAN WP NON EFEKTIF',
    //modals
    modalTitle: 'SYARAT PENETAPAN WP NE ORANG PRIBADI :',
    syarats: ['Formulir Penetapan WP NE', 'Surat Pernyataan WP NE','FC KTP', 'FC Kartu Identitas Pensiun (khusus untuk Pensiunan)', 'FC Slip Gaji (khusus untuk Wajib Pajak dengan Penghasilan dibawah Penghasilan Tidak Kena Pajak (PTKP)'  ],
    download: '/file-OP_PENETAPAN-WP-NE.pdf',
    downloadDesc: 'Download formulir penetapan WP NE',
    download1: '/file-OP_SURAT-PERNYATAAN-WP-NE',
    downloadDesc1: 'Download surat pernyataan WP NE',
  },
  {
    imgUrl: '/position.png',
    title: 'PEMINDAHAN WP',
    //modals
    modalTitle: 'SYARAT PEMINDAHAN WP ORANG PRIBADI :',
    syarats: ['Formulir Pemindahan WP', 'FC KTP'   ],
    download: '/OP_PEMINDAHAN-WP',
    downloadDesc: 'Download formulir pemindahan WP',
  },
  {
    imgUrl: '/books.png',
    title: 'PEMINDAHBUKUAN (PBK)',
    //modals
    modalTitle: 'SYARAT PEMINDAHBUKUAN ORANG PRIBADI :',
    syarats: ['Surat Permohonan', 'Bukti Pembayaran Ber-NTPN', 'Surat Pernyataan Bermaterai jika Wajib Pajak yang Dipindahbukukan Berbeda'   ],
    linkCard: 'https://drive.google.com/drive/u/0/folders/1I0OEqiV_I3-OZMArJ7idpCXOmyMkdbRF',

    linkDesc: 'Download formulir Pemindahbukuan OP',
  },
  {
    imgUrl: '/edit.png',
    title: 'PERUBAHAN DATA',
    //modals
    modalTitle: 'SYARAT PERUBAHAN DATA WP ORANG PRIBADI :',
    syarats: ['Formulir Perubahan Data', 'FC KTP', 'Surat Keterangan Kerja dari Pemberi Kerja (Perubahan Sumber Penghasilan dari Usahawan ke Pegawai)', 'Surat Pernyataan Usaha atau Pekerjaan Bebas (Perubahan Sumber Penghasilan dari Pegawai ke Usahawan)'   ],
    download: '/file-Formulir Perubahan Data OP',
    downloadDesc: 'Download formulir perubahan Data WP OP',
  },
  {
    imgUrl: '/start-button.png',
    title: 'AKTIVASI EFIN',
    //modals
    modalTitle: 'SYARAT AKTIVASI EFIN ORANG PRIBADI :',
    syarats: ['Formulir Aktivasi E-FIN', 'FC KTP', 'FC NPWP', 'Aktivasi E-FIN dapat diajukan di KPP Terdekat' ],
    download: '/file-OP_AKTIVASI-EFIN',
    downloadDesc: 'Download formulir aktivasi E-FIN',
  },


]

export const formulirCardBadan = [
  {
    imgUrl: '/npwp.png',
    title: 'PENDAFTARAN NPWP',


    //modals
    modalTitle: 'SYARAT PENDAFTARAN NPWP BADAN :',
    syarats: ['Formulir Pendaftaran NPWP', 'Fotocopy KTP Direktur', 'FC Akta Pendirian', 'FC SK Domisili', 'FC NPWP Direktur','Surat Penunjukan Kepala Cabang (NPWP Cabang)    ','Daftar online di https://ereg.pajak.go.id/login' ],
    download: '/file-npwp.pdf',
    downloadDesc: 'Download formulir pendaftaran NPWP',


  },

  {
    imgUrl: '/printer.png',
    title: 'CETAK ULANG NPWP BADAN',
    //modals
    modalTitle: 'SYARAT CETAK ULANG NPWP BADAN :',
    syarats: ['Formulir cetak ulang NPWP', 'Fotocopy KTP Direktur', 'FC Akta Pendirian'  ],
    download: '/fileb-BADAN_FORM-CETAK-ULANG-NPWP',
    downloadDesc: 'Download formulir cetak ulang NPWP',
  },

  {
    imgUrl: '/eraser.png',
    title: 'PENGHAPUSAN NPWP BADAN',
    //modals
    modalTitle: 'SYARAT PENGHAPUSAN NPWP BADAN :',
    syarats: ['Formulir Penghapusan NPWP', 'Fotocopy KTP Direktur', 'Fotocopy NPWP Direktur', 'FC Akta Pembubaran', 'FC NPWP Badan' ],
    download: '/fileb-BADAN_FORM-PENGHAPUSAN-NPWP',
    downloadDesc: 'Download formulir penghapusan NPWP',
    
  },
  {
    imgUrl: '/disabled.png',
    title: 'PENETEPAN WP NON EFEKTIF',
    //modals
    modalTitle: 'SYARAT PENETAPAN WP NE BADAN :',
    syarats: ['Formulir Penetapan WP NE', 'Surat Pernyataan WP NE','FC KTP Direktur',  ],
    download: '/fileb-Formulir Penetapan dan Pernyataan WP Non Efektif',
    downloadDesc: 'Download formulir penetapan WP NE',
    download1: '/fileb-Surat Pernyataan NE',
    downloadDesc1: 'Download surat pernyataan WP NE',
  },
  {
    imgUrl: '/position.png',
    title: 'PEMINDAHAN WP',
    //modals
    modalTitle: 'SYARAT PEMINDAHAN WP BADAN :',
    syarats: ['Formulir Pemindahan WP', 'FC KTP Direktur', 'FC Akta Perubahan'],
    download: '/fileb-BADAN_PEMINDAHAN-WP',
    downloadDesc: 'Download formulir pemindahan WP',
  },
  
  {
    imgUrl: '/edit.png',
    title: 'PERUBAHAN DATA',
    //modals
    modalTitle: 'SYARAT PERUBAHAN DATA WP BADAN :',
    syarats: ['Formulir Perubahan Data', 'FC KTP Direktur', 'FC NPWP Direktur', 'FC Akta Perubahan'   ],
    download: '/fileb-BADAN_FORM-PERUBAHAN-DATA-WP',
    downloadDesc: 'Download formulir perubahan Data WP Badan',
  },
  {
    imgUrl: '/start-button.png',
    title: 'AKTIVASI EFIN',
    //modals
    modalTitle: 'SYARAT AKTIVASI EFIN WP BADAN :',
    syarats: ['Formulir Aktivasi E-FIN dan Stempel', 'FC NPWP Badan', 'FC NPWP Pengurus', 'FC KTP Pengurus', 'FC Akta/Penunjukan Pengurus (Jika Pusat)','FC Pembentukan Cabang (Jika Cabang)','Dapat Dikuasakan untuk Penyampaian dan Penerimaan Aktivasi EFIN dengan syarat: Surat Kuasa dan  FC KTP Penerimaan Kuasa' ],
    download: '/ffile-OP_AKTIVASI-EFIN',
    downloadDesc: 'Download formulir aktivasi E-FIN',
  },
  {
    imgUrl: '/key.png',
    title: 'PERMINTAAN SERTIFIKAT ELEKTRONIK',
    //modals
    modalTitle: 'SYARAT PERMINTAAN SERTIFIKAT ELEKTRONIK WP BADAN :',
    syarats: ['Formulir Permohonan Sertifikat Elektronik','Asli dan Salinan KTP dan NPWP salah satu Pengurus yang tertera pada Akta Pendirian.','Asli dan Salinan Akta Pendirian (dan Akta Perubahan Pengurus terakhir)','Permohonan harus diajukan oleh Wajib Pajak bersangkutan dan tidak boleh diwakilkan atau dikuasakan.'  ],
    download: '/fileb-Formulir Permintaan Sertifikat Elektronik',
    downloadDesc: 'Download formulir permohonan sertifikat elektronik',
  },


]

export const cards = [
  {
    imgUrl: '/form.png',
    title: 'Formulir dan Persyaratan',
    content: 'Kumpulan formulir perpajakan',
    //popUPppp
    popUp: [
      {
        name: 'Orang pribadi',
        popLink: '/formulir/orangpribadi',
      },
      {
        name: 'Badan',
        popLink: '/formulir/badan',
      },
      {
        name: 'Lain-lain',
        popLink: 'https://drive.google.com/drive/folders/1oILTHmpaDFPf2Y7_f0rmWZ9pfhAxrDFA',
      }
    ],
  },

  {
    imgUrl: '/billing.png',
    title: 'billing Pajak',
    content: 'Pembuatan Kode Billing',

    //modals
    ytLink: 'zn00tvtRRdY',
  },
  {
    imgUrl: '/efiling.png',
    title: 'e-Filing Pajak',
    content: 'Pelaporan SPT Tahunan',


    //modals
    modalTitle: 'Penghasilan dibawah 60 juta dalam setahun :',
    ytLink: '4_A7uBpf6q4',
    modalTitle1: 'Penghasilan diatas 60 juta dalam setahun :',
    ytLink1: 'jLSARSW3vzk',
  },

  {
    imgUrl: '/npwp.png',
    title: 'daftar NPWP',
    content: 'pendaftaran NPWP',
    //click
    click: 'https://ereg.pajak.go.id/login',
  },
  {
    imgUrl: '/aplikasi.png',
    title: 'aplikasi perpajakan',
    content: 'download aplikasi pajak',
    //click
    click: 'https://pajak.go.id/id/aplikasi-page',
  },
  {
    imgUrl: '/open-book.png',
    title: 'buku saku',
    content: 'buku saku perpajakan',
    //click
    click: 'https://drive.google.com/file/d/1EjIbJRsj7QPcMkhDAi7u9eBNaxFUtNdK/view',
  },
  {
    imgUrl: '/binary-code.png',
    title: 'Kode Akun Pajak dan Kode Jenis Setor',
    content: 'kumpulan KAP dan KJS Pajak',
    //click
    click: 'https://www.pajak.go.id/id/kode-akun-pajak-dan-kode-jenis-setoran-pajak',
  },
]
