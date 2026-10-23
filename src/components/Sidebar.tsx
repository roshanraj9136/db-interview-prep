"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    section: "🏠 Home",
    items: [{ label: "Dashboard", href: "/", icon: "🎯" }],
  },
  {
    section: "📘 SQL Seekho",
    items: [
      { label: "SQL Basics - Zero Se", href: "/sql-basics", icon: "🟢" },
      { label: "SQL Intermediate", href: "/sql-intermediate", icon: "🟡" },
      { label: "SQL Advanced", href: "/sql-advanced", icon: "🔴" },
    ],
  },
  {
    section: "🍃 MongoDB Seekho",
    items: [
      { label: "MongoDB Basics - Zero Se", href: "/mongodb-basics", icon: "🟢" },
      { label: "MongoDB Intermediate", href: "/mongodb-intermediate", icon: "🟡" },
      { label: "MongoDB Advanced", href: "/mongodb-advanced", icon: "🔴" },
    ],
  },
  {
    section: "⚔️ Comparison",
    items: [
      { label: "SQL vs MongoDB", href: "/sql-vs-mongodb", icon: "🤜🤛" },
    ],
  },
  {
    section: "🏢 Company Wise",
    items: [
      { label: "Company Interview Q&A", href: "/companies", icon: "💼" },
    ],
  },
  {
    section: "📝 Practice",
    items: [
      { label: "Quick Revision & Practice", href: "/practice", icon: "✍️" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800 text-white p-2 rounded-lg border border-slate-600"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-slate-900 border-r border-slate-700 z-40 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-slate-700">
          <Link href="/" className="block">
            <h1 className="text-xl font-bold gradient-text">
              📊 DB Interview Prep
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              SQL + MongoDB | Zero se Hero 🚀
            </p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-3">
          {navItems.map((group, i) => (
            <div key={i} className="mb-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider px-3 mb-2">
                {group.section}
              </p>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link flex items-center gap-2 mb-1 ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700 mt-4">
          <p className="text-xs text-slate-500 text-center">
            Made with ❤️ for Interview Prep
          </p>
          <p className="text-xs text-slate-600 text-center mt-1">
            by Roshan Raj
          </p>
        </div>
      </aside>
    </>
  );
}
