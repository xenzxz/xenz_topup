import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-4 sm:p-8 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <Image
            src="/sajana.png" // Ganti dengan logo Anda
            alt="Xenz Topup Logo"
            width={40}
            height={40}
          />
          <h1 className="text-xl font-bold text-gray-700">Xenz Topup</h1>
        </div>
        <nav className="flex gap-4 text-sm sm:text-base">
          <a href="#" className="hover:text-blue-600">
            Beranda
          </a>
          <a href="#produk" className="hover:text-blue-600">
            Produk
          </a>
          <a href="#kontak" className="hover:text-blue-600">
            Kontak
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center text-center gap-12 row-start-2">
        {/* Hero Section */}
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Top-up Game Favoritmu dengan Mudah
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Cepat, aman, dan terpercaya. Dapatkan voucher game seperti PUBG,
            Free Fire, MLBB, dan lainnya dalam hitungan detik.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="#produk"
              className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Mulai Top-up
            </a>
            <a
              href="#kontak"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md shadow-md hover:bg-blue-100 transition"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Produk Section */}
        <section
          id="produk"
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {[
            { name: "Mobile Legends", image: "/mlbb.png" },
            { name: "Free Fire", image: "/ff.png" },
            { name: "PUBG Mobile", image: "/pubg.png" },
          ].map((game, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-white text-center hover:shadow-lg transition"
            >
              <div className="w-20 h-20 mx-auto overflow-hidden square bg-gray-100 flex items-center justify-center">
                <Image
                  src={game.image}
                  alt={`${game.name} Logo`}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">{game.name}</h3>
              <p className="mt-2 text-gray-600">Top-up mulai dari Rp 10.000</p>
              <a
                href="#"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Top-up Sekarang
              </a>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-800 text-gray-100 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Xenz Topup. Semua hak dilindungi.
        </p>
      </footer>
    </div>
  );
}
