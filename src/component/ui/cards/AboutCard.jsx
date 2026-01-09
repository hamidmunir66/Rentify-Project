import React from "react";

export default function AboutCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-[1.03] transition-all">
      <Icon className="text-3xl text-blue-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}
