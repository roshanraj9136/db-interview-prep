import Link from "next/link";

const roadmapItems = [
  {
    title: "SQL Basics - Zero Se Shuru",
    desc: "Database kya hota hai, Table kya hai, SELECT, INSERT, UPDATE, DELETE - sab kuch seedha seedha",
    href: "/sql-basics",
    icon: "🟢",
    tag: "sql",
    tagLabel: "SQL",
    difficulty: "easy",
  },
  {
    title: "SQL Intermediate - Level Up",
    desc: "JOINs, Subqueries, GROUP BY, HAVING, Views, Indexes - yahan se interview ready hona shuru",
    href: "/sql-intermediate",
    icon: "🟡",
    tag: "sql",
    tagLabel: "SQL",
    difficulty: "medium",
  },
  {
    title: "SQL Advanced - Pro Level",
    desc: "Transactions, Stored Procedures, Triggers, Optimization, Window Functions - senior level",
    href: "/sql-advanced",
    icon: "🔴",
    tag: "sql",
    tagLabel: "SQL",
    difficulty: "hard",
  },
  {
    title: "MongoDB Basics - Zero Se Shuru",
    desc: "NoSQL kya hai, Document kya hai, Collection kya hai, CRUD operations - bilkul beginning se",
    href: "/mongodb-basics",
    icon: "🟢",
    tag: "mongodb",
    tagLabel: "MongoDB",
    difficulty: "easy",
  },
  {
    title: "MongoDB Intermediate - Level Up",
    desc: "Aggregation Pipeline, Indexing, Embedded vs Referenced, Operators - interview ke liye must",
    href: "/mongodb-intermediate",
    icon: "🟡",
    tag: "mongodb",
    tagLabel: "MongoDB",
    difficulty: "medium",
  },
  {
    title: "MongoDB Advanced - Pro Level",
    desc: "Sharding, Replication, Transactions, Performance Tuning - top company interviews ke liye",
    href: "/mongodb-advanced",
    icon: "🔴",
    tag: "mongodb",
    tagLabel: "MongoDB",
    difficulty: "hard",
  },
  {
    title: "SQL vs MongoDB - Full Comparison",
    desc: "Kab SQL use karo, kab MongoDB? Dono ki comparison table, use cases, pros & cons",
    href: "/sql-vs-mongodb",
    icon: "⚔️",
    tag: "both",
    tagLabel: "BOTH",
    difficulty: "medium",
  },
  {
    title: "Company Wise Interview Questions",
    desc: "TCS, Infosys, Wipro, Accenture, Amazon, Google, Flipkart - har company ke actual questions",
    href: "/companies",
    icon: "🏢",
    tag: "both",
    tagLabel: "INTERVIEWS",
    difficulty: "medium",
  },
  {
    title: "Quick Revision & Practice",
    desc: "Sab kuch ek jagah - cheat sheets, quick formulas, last minute revision notes",
    href: "/practice",
    icon: "📝",
    tag: "both",
    tagLabel: "PRACTICE",
    difficulty: "easy",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          <span className="gradient-text">Database Interview Prep</span>
        </h1>
        <p className="text-xl text-slate-300 mb-2">
          SQL + MongoDB | Zero Se Hero Tak 🚀
        </p>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Bhai, tu kuch nahi jaanta databases ke baare mein? Koi tension nahi! 
          Yeh guide tujhe bilkul zero se lekar interview crack karne tak le jayegi.
          Sab kuch Hinglish mein, examples ke saath, company-wise questions ke saath. 💪
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Topics Covered", value: "100+", icon: "📚" },
          { label: "Code Examples", value: "200+", icon: "💻" },
          { label: "Interview Q&A", value: "150+", icon: "❓" },
          { label: "Companies", value: "10+", icon: "🏢" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center"
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* How to Use */}
      <div className="concept-card tip mb-8">
        <h2 className="text-lg font-bold text-amber-400 mb-3">
          🗺️ Kaise Use Kare Yeh Website?
        </h2>
        <div className="text-slate-300 space-y-2 text-sm">
          <p>1️⃣ <strong>Pehle SQL Basics padho</strong> — database kya hai, table kya hai, basic queries</p>
          <p>2️⃣ <strong>Phir MongoDB Basics padho</strong> — NoSQL samjho, documents samjho</p>
          <p>3️⃣ <strong>Intermediate level pe jao</strong> — JOINs, Aggregation, Indexing seekho</p>
          <p>4️⃣ <strong>SQL vs MongoDB comparison</strong> — dono ko compare karo</p>
          <p>5️⃣ <strong>Company wise questions</strong> — specific companies ki tayyari karo</p>
          <p>6️⃣ <strong>Practice & Revision</strong> — last minute revision ke liye</p>
        </div>
      </div>

      {/* Roadmap Cards */}
      <h2 className="text-2xl font-bold text-white mb-6">📍 Complete Roadmap</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmapItems.map((item, i) => (
          <Link key={i} href={item.href} className="block group">
            <div className="concept-card h-full group-hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className={`topic-tag ${item.tag}`}>{item.tagLabel}</span>
                <span className={`difficulty-badge ${item.difficulty}`}>
                  {item.difficulty}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
              <div className="mt-3 text-xs text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                Padho →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Motivation */}
      <div className="mt-12 text-center bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 border border-slate-700 rounded-2xl p-8">
        <p className="text-3xl mb-4">💪</p>
        <h3 className="text-xl font-bold text-white mb-2">
          Yaad Rakh Bhai!
        </h3>
        <p className="text-slate-300 max-w-xl mx-auto">
          &quot;Koi bhi cheez mushkil nahi hoti, bas shuru karna mushkil hota hai.
          Tu yahan aa gaya hai matlab tune pehla step le liya. 
          Ab bas padhte ja, practice karte ja — interview crack hoga zaroor!&quot; 🔥
        </p>
      </div>
    </div>
  );
}
