export interface CompetitionCategory {
  id: string;
  name: string;
  category: "Keagamaan" | "Cerdas Cermat" | "Seni Islami";
  type: "Individu" | "Tim";
  description: string;
  kuota?: string;
  biaya: string;
}

export interface JenjangData {
  id: "sd" | "smp";
  title: "SD / MI Sederajat" | "SMP / MTs Sederajat";
  subtitle: string;
  targetAudience: string;
  links: {
    juknis: string;
    pendaftaran: string;
    pengumpulan: string;
  };
  competitions: CompetitionCategory[];
}

export const siteConfig = {
  meta: {
    title: "SEVEN SKIES 2027 — Ajang Prestasi Pelajar Nasional",
    description:
      "Website resmi SEVEN SKIES 2027: Kompetisi LCCI, Kaligrafi, MHQ, Mewarnai, dan Adzan tingkat Nasional persembahan SMAIT Ihsanul Fikri Mungkid.",
    eventDate: "2027-02-15T08:00:00+07:00",
    organizer: "SMAIT Ihsanul Fikri Islamic Boarding School Mungkid",
    shortOrganizer: "SMAIT Ihsanul Fikri",
  },
  tagline: {
    highlight: "SEVEN SKIES 2027",
    subtitle: "Kuatkan Iman dengan Wawasan, dari Kegelapan Menuju Cahaya Perubahan",
    description:
      "Ajang unjuk ketangkasan, seni islami, dan hafalan Al-Qur'an bagi generasi muda berprestasi tingkat nasional.",
  },
  contacts: {
    whatsapp: {
      number: "6285867264290",
      displayNumber: "+62 858-6726-4290",
      defaultMessage: "Halo Panitia Seven Skies 2027, saya ingin bertanya seputar pendaftaran lomba...",
    },
    instagram: {
      official: "officialsevenskies26",
      rohis: "rohis_ifbs",
    },
    twibbonUrl: "https://forms.gle/sxycPQe4eFd87CaU9",
  },
  jenjang: {
    sd: {
      id: "sd",
      title: "SD / MI Sederajat",
      subtitle: "Kategori Pelajar Tingkat Dasar",
      targetAudience: "Siswa-siswi aktif SD/MI atau sederajat tingkat Nasional",
      links: {
        juknis: "https://drive.google.com/drive/folders/1unCMMZP8P-gmN0iUi1QvDMnN7QpIdB0t?usp=drive_link",
        pendaftaran: "https://forms.gle/DQk7v1C28sHPwCi26",
        pengumpulan: "https://forms.gle/SkxaQBuTKBKMnVkZA",
      },
      competitions: [
        {
          id: "sd-lcci",
          name: "LCCI (Lomba Cerdas Cermat Islami)",
          category: "Cerdas Cermat",
          type: "Tim",
          description: "Adu cepat tanggap wawasan keislaman, sejarah peradaban Islam, Al-Qur'an, dan dasar ilmu fiqih.",
          biaya: "Gratis / Terjangkau",
        },
        {
          id: "sd-kaligrafi",
          name: "Kaligrafi",
          category: "Seni Islami",
          type: "Individu",
          description: "Lomba menulis indah ayat suci Al-Qur'an dengan keindahan khat, kerapian, dan komposisi estetika seni Islam.",
          biaya: "Gratis / Terjangkau",
        },
        {
          id: "sd-mhq",
          name: "MHQ (Musabaqah Hifdzil Qur'an)",
          category: "Keagamaan",
          type: "Individu",
          description: "Uji hafalan Al-Qur'an Juz 30 dengan kelancaran fashahah, kaidah tajwid, dan tartil yang merdu.",
          biaya: "Gratis / Terjangkau",
        },
        {
          id: "sd-mewarnai",
          name: "Mewarnai",
          category: "Seni Islami",
          type: "Individu",
          description: "Kreativitas paduan warna bertemakan keindahan masjid dan nilai-nilai akhlak budi pekerti Islam.",
          biaya: "Gratis / Terjangkau",
        },
        {
          id: "sd-adzan",
          name: "Adzan",
          category: "Keagamaan",
          type: "Individu",
          description: "Lomba melantunkan adzan dengan suara lantang merdu, makhraj huruf yang tepat, dan penghayatan khusyuk.",
          biaya: "Gratis / Terjangkau",
        },
      ],
    } as JenjangData,
    smp: {
      id: "smp",
      title: "SMP / MTs Sederajat",
      subtitle: "Kategori Pelajar Tingkat Menengah",
      targetAudience: "Siswa-siswi aktif SMP/MTs atau sederajat tingkat Nasional",
      links: {
        juknis: "https://drive.google.com/drive/folders/1sH2wJ3L_tIrUsejFX_FHGun--azltXey?usp=drive_link",
        pendaftaran: "https://forms.gle/Auhk8BkRzFpj4jr18",
        pengumpulan: "https://forms.gle/Nj7PrgGc4VUPjHVt7",
      },
      competitions: [
        {
          id: "smp-lcci",
          name: "LCCI (Lomba Cerdas Cermat Islami)",
          category: "Cerdas Cermat",
          type: "Tim",
          description: "Kompetisi ketangkasan analitis seputar sejarah peradaban Islam, hukum syariat, hadits, dan wawasan Islam global.",
          biaya: "Gratis / Terjangkau",
        },
        {
          id: "smp-kaligrafi",
          name: "Kaligrafi",
          category: "Seni Islami",
          type: "Individu",
          description: "Karya seni kaligrafi Arab (Hiasan Mushaf / Khat Naskhi) dengan standar ketepatan kaidah khat resmi.",
          biaya: "Gratis / Terjangkau",
        },
        {
          id: "smp-mhq",
          name: "MHQ (Musabaqah Hifdzil Qur'an)",
          category: "Keagamaan",
          type: "Individu",
          description: "Hafalan Al-Qur'an Juz 29 dan 30 dengan tartil, hukum mad, waqaf ibtida', dan irama tilawah yang fasih.",
          biaya: "Gratis / Terjangkau",
        },
        {
          id: "smp-mewarnai",
          name: "Mewarnai & Desain Poster Islami",
          category: "Seni Islami",
          type: "Individu",
          description: "Eksplorasi kreasi warna dan pesan visual bertema dakwah pemuda muslim di era peradaban modern.",
          biaya: "Gratis / Terjangkau",
        },
        {
          id: "smp-adzan",
          name: "Adzan",
          category: "Keagamaan",
          type: "Individu",
          description: "Lantunan panggilan shalat dengan cengkok suara indah, kejelasan artikulasi makharijul huruf, dan adab yang sempurna.",
          biaya: "Gratis / Terjangkau",
        },
      ],
    } as JenjangData,
  },
  faqs: [
    {
      q: "Apa saja cabang lomba di Seven Skies 2027?",
      a: "Terdapat 5 cabang lomba resmi: LCCI (Lomba Cerdas Cermat Islami), Kaligrafi, MHQ (Musabaqah Hifdzil Qur'an), Mewarnai, dan Adzan untuk jenjang SD/MI dan SMP/MTs sederajat.",
    },
    {
      q: "Bagaimana cara mengunduh Petunjuk Teknis (Juknis) tiap lomba?",
      a: "Pilih jenjang (SD/MI atau SMP/MTs) di section 'Kompetisi', lalu klik tombol biru 'Unduh Juknis'. Seluruh ketentuan format dan teknis tersimpan di Google Drive resmi.",
    },
    {
      q: "Apakah peserta boleh mengikuti lebih dari satu cabang lomba?",
      a: "Peserta diperbolehkan mengikuti cabang berbeda selama jadwal pelaksanaan dan babak final tidak bersamaan.",
    },
    {
      q: "Bagaimana alur pendaftaran Seven Skies 2027?",
      a: "Cukup 4 langkah: Unduh Juknis, Isi Formulir Registrasi Online, Ikuti Technical Meeting & Kumpul Karya, lalu tunggu pengumuman dewan juri.",
    },
    {
      q: "Siapa kontak resmi panitia jika ada kendala?",
      a: "Anda dapat menghubungi WhatsApp resmi panitia di +62 858-6726-4290 atau DM Instagram @officialsevenskies26.",
    },
  ],
};
