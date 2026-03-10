import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-liquid-soft border-t border-gray-200 pt-20 pb-10 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <img
            src="/icon.png"
            alt="Logo"
            className="w-10 h-10 mb-6 grayscale opacity-50"
          />
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            Liquid Coating (Pvt) Ltd. Building Protection & Performance Systems.
            Official partners in infrastructure longevity.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-widest text-liquid-text mb-6">
            Navigation
          </h4>
          <ul className="space-y-4 text-xs font-bold text-gray-400">
            <li>
              <Link href="/systems" className="hover:text-liquid-primary">
                Systems
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-liquid-primary">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-liquid-primary">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-widest text-liquid-text mb-6">
            Zimbabwe Office
          </h4>
          <p className="text-xs font-bold text-gray-400 leading-loose">
            Msasa Industrial Park
            <br />
            Harare, Zimbabwe
            <br />
            <span className="text-liquid-primary">
              info@liquidcoating.co.zw
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-200 flex justify-between items-center">
        <p className="text-[10px] text-gray-400 font-medium">
          © 2026 Liquid Coating (Pvt) Ltd. All Rights Reserved.
        </p>
        <p className="text-[10px] text-gray-300 font-medium tracking-tighter uppercase">
          Living a Beautiful Mark
        </p>
      </div>
    </footer>
  );
}
