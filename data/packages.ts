export type Package = {
  id: string; slug: string; name: string; type: "umrah" | "haji"; durationDays?: number;
  departureDate?: string; price?: number; currency?: "IDR" | "USD"; airline?: string;
  makkahHotel?: string; madinahHotel?: string; poster: string; featured: boolean;
  summary: string; inclusions?: string[]; exclusions?: string[]; notes?: string[]; itinerary?: string[];
};

export const packages: Package[] = [
  {
    id: "ramadhan-2026", slug: "umrah-spesial-awal-ramadhan-2026", name: "Umrah Spesial Awal Ramadhan", type: "umrah", durationDays: 9,
    departureDate: "13 Februari 2026", price: 33800000, currency: "IDR", airline: "Garuda Indonesia",
    makkahHotel: "Maysan Al Maqom / Ghaleb Ajyad / Setaraf", madinahHotel: "Odst / Zowar / Setaraf",
    poster: "/images/packages/paket (3).jpg", featured: true,
    summary: "Program Umrah 9 hari dengan keberangkatan awal Ramadhan.",
    inclusions: ["Tiket pesawat PP ekonomi", "Visa Umrah & bus AC", "Perlengkapan Umrah", "Air Zam-zam 5 liter", "Handling bandara", "Tour leader & muthawif", "Asuransi perjalanan", "Free iftar & sahur", "City tour Makkah–Madinah (tentative)"],
    exclusions: ["Biaya pembuatan paspor", "Vaksin meningitis & polio", "Biaya kelebihan bagasi", "Transportasi domestik", "Biaya keperluan pribadi"],
    notes: ["Harga sewaktu-waktu dapat berubah sesuai kebijakan yang berlaku."],
  },
  {
    id: "umrah-private", slug: "umrah-private", name: "Umrah Private", type: "umrah", poster: "/images/packages/paket (2).jpg", featured: true,
    summary: "Program Umrah yang dapat disesuaikan untuk tanggal, durasi, hotel, dan rute perjalanan.",
    notes: ["Hubungi Dallas Tour & Travel untuk konsultasi kebutuhan perjalanan."],
  },
  {
    id: "umrah-aman", slug: "solusi-umrah-aman", name: "Solusi Umrah Aman", type: "umrah", price: 25500000, currency: "IDR", poster: "/images/packages/paket (4).jpg", featured: true,
    summary: "Informasi program Umrah dengan pilihan keberangkatan setiap bulan.",
    inclusions: ["Manasik 3 kali online & offline", "Bantuan pengurusan dokumen (paspor, vaksin, dan lainnya)"],
    notes: ["Tersedia program tabungan & cicilan Umrah (syariah)."],
  },
  {
    id: "haji-khusus", slug: "haji-khusus", name: "Haji Khusus", type: "haji", durationDays: 25, price: 4500, currency: "USD", airline: "Garuda / Saudia", makkahHotel: "Marriott Jabal Omar", madinahHotel: "Nozol Royal Inn", poster: "/images/packages/paket (1).jpg", featured: false,
    summary: "Informasi pendaftaran Haji Khusus dengan estimasi masa tunggu pada poster.",
    notes: ["Harga yang tertera bersifat sementara dan dapat berubah di tahun keberangkatan.", "Harga menggunakan USD dan disesuaikan dengan kurs saat pendaftaran dan pelunasan."],
  },
];

export const umrahPackages = packages.filter((item) => item.type === "umrah");
export const getPackage = (slug: string) => packages.find((item) => item.slug === slug);
