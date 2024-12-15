import Image from "next/image";

export default function PUBGMobileTopup() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
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
      <main className="flex-grow px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Top-up PUBG Mobile
        </h2>
        <p className="text-gray-600 mb-8">
          Cepat, aman, dan terpercaya. Pilih paket top-up Anda untuk PUBG Mobile dan nikmati permainan tanpa batas!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[{ amount: "50 UC", price: "Rp 10.000" }, { amount: "100 UC", price: "Rp 20.000" }, { amount: "500 UC", price: "Rp 100.000" }].map((packageItem, index) => (
            <div
              key={index}
              className="p-4 border rounded bg-white hover:shadow-md transition"
            >
              <h3 className="text-lg font-medium text-gray-700">
                {packageItem.amount}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {packageItem.price}
              </p>
              <a
                href="#"
                className="mt-4 block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Beli Sekarang
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      {/* Footer */}
      <footer className="w-full py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 text-white/90 text-center backdrop-blur-sm">
        <p className="text-sm hover:text-white transition-colors">
          © {new Date().getFullYear()} Xenz Topup. Semua hak dilindungi.
        </p>
      </footer>
    </div>
  );
}