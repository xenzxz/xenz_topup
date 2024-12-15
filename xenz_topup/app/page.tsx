import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 border-b backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Image
            src="/sajana.png"
            alt="Xenz Topup Logo"
            width={40}
            height={40}
            className="hover:scale-105 transition-transform"
          />
          <h1 className="text-lg font-bold text-white">Xenz Topup</h1>
        </div>
        <nav className="flex gap-4 text-sm">
          <a href="#" className="text-white/90 hover:text-white transition-colors">
            Beranda
          </a>
          <a href="#produk" className="text-white/90 hover:text-white transition-colors">
            Produk
          </a>
          <a href="#kontak" className="text-white/90 hover:text-white transition-colors">
            Kontak
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center px-6 py-12 gap-8">
        {/* Hero Section */}
        <section className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Top-up Game Favoritmu dengan Mudah
          </h2>
          <p className="mt-3 text-gray-600">
            Cepat, aman, dan terpercaya. Dapatkan voucher game seperti PUBG,
            Free Fire, MLBB, dan lainnya dalam hitungan detik.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <a
              href="#produk"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Mulai Top-up
            </a>
            <a
              href="#kontak"
              className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-100 transition"
            >
              Hubungi Kami
            </a>
          </div>
        </section>

        {/* Produk Section */}
        <section
          id="produk"
          className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[{ name: "Mobile Legends", image: "/mlbb.png" }, { name: "Free Fire", image: "/ff.png" }, { name: "PUBG Mobile", image: "/pubg.png" }].map((game, index) => (
            <Link
              key={index}
              href={`/${game.name.toLowerCase().replace(/ /g, "-")}`}
              className={`flex flex-col items-center p-4 border rounded bg-white hover:shadow-md transition ${index === 0 ? "bg-blue-50" : index === 1 ? "bg-green-50" : "bg-yellow-50"
                }`}
            >
              <Image
                src={game.image}
                alt={`${game.name} Logo`}
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-lg font-medium text-gray-700">{game.name}</h3>
              <p className="mt-2 text-sm text-gray-600">Top-up mulai dari Rp 10.000</p>
            </Link>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 text-white/90 text-center backdrop-blur-sm">
        <p className="text-sm hover:text-white transition-colors">
          © {new Date().getFullYear()} Xenz Topup. Semua hak dilindungi.
        </p>
      </footer>
    </div>
  );
}