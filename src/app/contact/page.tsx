"use client";

import { useState } from "react";
import { Send, X } from "lucide-react";
import SuccessModal from "@/components/SuccessModal";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  "Flat Roof Waterproofing",
  "Basement Tanking",
  "Industrial Epoxy Flooring",
  "Commercial Vinyl Flooring",
  "Concrete Repairs",
  "Joint Sealing",
  "Protective Coatings",
];

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [smsWarning, setSmsWarning] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+263",
  });

  const toggleService = (service: string) => {
    if (!selectedServices.includes(service) && service !== "") {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const removeService = (serviceToRemove: string) => {
    setSelectedServices(selectedServices.filter((s) => s !== serviceToRemove));
  };

  const generateMessage = () => {
    return `Inquiry from: ${formData.name}\nServices: ${selectedServices.join(", ")}\nEmail: ${formData.email}\nPhone: ${formData.countryCode}${formData.phone}`;
  };

  const sendWhatsApp = () => {
    const url = `https://wa.me/263772422035?text=${encodeURIComponent(generateMessage())}`;
    window.open(url, "_blank");
  };

  const sendEmail = () => {
    const mailto = `mailto:liquid.coating1@gmail.com?subject=Service Inquiry - ${formData.name}&body=${encodeURIComponent(generateMessage())}`;
    window.location.href = mailto;
  };

  const handleSmsClick = () => {
    if (!smsWarning) {
      setSmsWarning(true);
      setTimeout(() => setSmsWarning(false), 5000);
      return;
    }
    const smsUrl = `sms:+263772422035?body=${encodeURIComponent(generateMessage())}`;
    window.location.href = smsUrl;
  };

  return (
    <main className="relative pt-32 pb-20 min-h-screen bg-white overflow-hidden">
      {/* Brand Watermark */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: "url('/icon.png')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-liquid-text tracking-tighter mb-6">
            Get In Touch.
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-400 font-bold text-sm">
            <p>Bervick Building, Eastlea Shopping Center, Harare</p>
            <p className="hidden md:block">|</p>
            <p>0772 422 035 / 0776 231 902</p>
          </div>
        </header>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-liquid-soft/40 backdrop-blur-xl p-8 md:p-12 rounded-[50px] shadow-2xl shadow-liquid-primary/5"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowSuccess(true);
              }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-4 bg-white rounded-2xl outline-none focus:ring-2 ring-liquid-primary transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full p-4 bg-white rounded-2xl outline-none focus:ring-2 ring-liquid-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      className="p-4 bg-white rounded-2xl outline-none font-bold text-xs"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          countryCode: e.target.value,
                        })
                      }
                    >
                      <option value="+263">+263</option>
                      <option value="+27">+27</option>
                    </select>
                    <input
                      type="tel"
                      required
                      placeholder="772000000"
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="flex-1 p-4 bg-white rounded-2xl outline-none focus:ring-2 ring-liquid-primary transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">
                  System Requirements
                </label>
                <select
                  className="w-full p-4 bg-white rounded-2xl outline-none focus:ring-2 ring-liquid-primary transition-all"
                  onChange={(e) => toggleService(e.target.value)}
                  value=""
                >
                  <option value="" disabled>
                    Select services...
                  </option>
                  {servicesList.map((s) => (
                    <option
                      key={s}
                      value={s}
                      disabled={selectedServices.includes(s)}
                    >
                      {s}
                    </option>
                  ))}
                </select>

                <div className="flex flex-wrap gap-2">
                  <AnimatePresence>
                    {selectedServices.map((service) => (
                      <motion.span
                        key={service}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2 px-4 py-2 bg-liquid-primary text-white rounded-full text-[10px] font-black uppercase tracking-tight"
                      >
                        {service}
                        <button
                          type="button"
                          onClick={() => removeService(service)}
                        >
                          <X size={12} />
                        </button>
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Action Buttons with Official Logos */}
              <div className="pt-8 space-y-4">
                {/* Email - Official Gmail Color */}
                <button
                  type="button"
                  onClick={sendEmail}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#EA4335] text-white rounded-2xl font-black uppercase text-[11px] tracking-widest hover:brightness-110 transition-all active:scale-[0.98]"
                >
                  Send via Gmail
                  <img
                    src="https://cdn.simpleicons.org/gmail/white"
                    alt="Gmail"
                    className="w-4 h-4"
                  />
                </button>

                {/* WhatsApp - Official WhatsApp Color */}
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white rounded-2xl font-black uppercase text-[11px] tracking-widest hover:brightness-110 transition-all active:scale-[0.98]"
                >
                  Send via WhatsApp
                  <img
                    src="https://cdn.simpleicons.org/whatsapp/white"
                    alt="WhatsApp"
                    className="w-4 h-4"
                  />
                </button>

                {/* SMS - Official Message Color */}
                <div className="relative">
                  <AnimatePresence>
                    {smsWarning && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-12 left-0 right-0 text-center z-20"
                      >
                        <span className="bg-orange-500 text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-tighter shadow-xl">
                          Standard charges apply. Click again to confirm.
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    type="button"
                    onClick={handleSmsClick}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#007AFF] text-white rounded-2xl font-black uppercase text-[11px] tracking-widest hover:brightness-110 transition-all active:scale-[0.98]"
                  >
                    Send via SMS
                    <img
                      src="https://cdn.simpleicons.org/amazonsms/white"
                      alt="SMS"
                      className="w-4 h-4"
                    />
                  </button>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="text-[10px] font-black uppercase text-liquid-primary tracking-[0.3em] hover:underline underline-offset-4"
                  >
                    Submit via Web Form Only
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </main>
  );
}
