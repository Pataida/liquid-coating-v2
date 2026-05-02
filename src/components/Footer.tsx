import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-liquid-soft border-t border-gray-200 pt-20 pb-10 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <img
            src="/icon.png"
            alt="Liquid Coating Logo"
            className="w-10 h-10 mb-6 grayscale opacity-80"
          />
          <p className="text-sm text-gray-600 max-w-xs leading-relaxed font-medium">
            Liquid Coating (Pvt) Ltd. Specialist in high-performance coating
            systems and protective solutions.
          </p>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-2">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-liquid-text mb-6">
            Contact Information
          </h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-liquid-primary shrink-0 mt-1" />
              <p className="text-xs font-bold text-gray-600 leading-relaxed">
                Bervick Building, Eastlea Shopping Center,
                <br />
                1st Floor, Harare
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone size={16} className="text-liquid-primary shrink-0" />
              <p className="text-xs font-bold text-gray-600">
                0772 422 035 / 0776 231 902
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail size={16} className="text-liquid-primary shrink-0" />
              <a
                href="mailto:liquid.coating1@gmail.com"
                className="text-xs font-bold text-liquid-primary hover:underline"
              >
                liquid.coating1@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61575353097750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-liquid-primary transition-colors"
                >
                  <Facebook size={16} className="text-gray-400" />
                </a>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">
                  Liquid Coating Pvt Ltd
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-400 font-medium">
          © 2026 Liquid Coating (Pvt) Ltd. All Rights Reserved.
        </p>
        <p className="text-[10px] text-gray-500 font-black tracking-[0.2em] uppercase">
          “To leave a beautiful mark”
        </p>
      </div>
    </footer>
  );
}
