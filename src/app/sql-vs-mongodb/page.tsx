import React from "react";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function SqlVsMongoDbPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-700 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="topic-tag both">HEAD-TO-HEAD</span>
          <span className="difficulty-badge medium">CRUCIAL FOR INTERVIEWS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          SQL vs MongoDB: The Ultimate Comparison ⚔️
        </h1>
        <p className="text-slate-400 mt-2 text-base">
          Har technical interview ka sabse common sawaal: <em>&quot;Kab SQL use karoge aur kab MongoDB? Dono mein farak kya hai?&quot;</em>
          Is page par side-by-side syntax, architecture aur decision framework samjho.
        </p>
      </div>

      {/* 1. Core Architectural Differences */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-4">
          1. Core Architectural Differences 🏛️
        </h2>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="text-blue-400">SQL (Relational / RDBMS)</th>
                <th className="text-green-400">MongoDB (NoSQL / Document)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">Data Model</td>
                <td>Tables with rigid Rows &amp; Columns</td>
                <td>Flexible JSON/BSON Documents</td>
              </tr>
              <tr>
                <td className="font-semibold">Schema</td>
                <td>Fixed &amp; Strict (Predefined structure)</td>
                <td>Dynamic &amp; Schema-less (Fields vary per doc)</td>
              </tr>
              <tr>
                <td className="font-semibold">Relationships</td>
                <td>Primary Key - Foreign Key JOINs</td>
                <td>Embedded Documents ya References ($lookup)</td>
              </tr>
              <tr>
                <td className="font-semibold">Scaling</td>
                <td><strong>Vertical Scaling</strong> (Bada CPU/RAM lagao)</td>
                <td><strong>Horizontal Scaling</strong> (Nayi machines jodo - Sharding)</td>
              </tr>
              <tr>
                <td className="font-semibold">Consistency Model</td>
                <td>ACID (Strict Consistency guaranteed)</td>
                <td>BASE / Configurable ACID (Eventual Consistency ready)</td>
              </tr>
              <tr>
                <td className="font-semibold">Query Language</td>
                <td>Structured Query Language (SQL)</td>
                <td>JSON based Object Query Language (MQL)</td>
              </tr>
              <tr>
                <td className="font-semibold">Best Suited For</td>
                <td>Complex relations, Banking, Transactions</td>
                <td>High velocity data, Big Data, Rapid prototyping, Mobile apps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Side-by-Side Query Cheat Sheet */}
      <section className="concept-card both">
        <h2 className="text-2xl font-bold text-white mb-2">
          2. Side-by-Side Syntax Cheat Sheet 💻
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Ek hi kaam ko dono databases mein kaise likha jata hai — direct comparison:
        </p>

        <div className="space-y-6">
          {/* Operation 1: Insert */}
          <div className="border border-slate-700 rounded-lg p-4 bg-slate-900/60">
            <h4 className="font-bold text-white mb-2">A. Data Insert Karna</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-blue-400 font-semibold mb-1">SQL (MySQL / Postgres)</p>
                <CodeBlock language="sql">
{`INSERT INTO students (name, age, city) 
VALUES ('Rohan', 21, 'Delhi');`}
                </CodeBlock>
              </div>
              <div>
                <p className="text-xs text-green-400 font-semibold mb-1">MongoDB</p>
                <CodeBlock language="javascript">
{`db.students.insertOne({
  name: "Rohan",
  age: 21,
  city: "Delhi"
});`}
                </CodeBlock>
              </div>
            </div>
          </div>

          {/* Operation 2: Filter with Condition */}
          <div className="border border-slate-700 rounded-lg p-4 bg-slate-900/60">
            <h4 className="font-bold text-white mb-2">B. Conditional Filtering (WHERE vs Query)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-blue-400 font-semibold mb-1">SQL</p>
                <CodeBlock language="sql">
{`SELECT name, city FROM students 
WHERE age >= 20 AND city = 'Delhi';`}
                </CodeBlock>
              </div>
              <div>
                <p className="text-xs text-green-400 font-semibold mb-1">MongoDB</p>
                <CodeBlock language="javascript">
{`db.students.find(
  { age: { $gte: 20 }, city: "Delhi" },
  { name: 1, city: 1, _id: 0 }
);`}
                </CodeBlock>
              </div>
            </div>
          </div>

          {/* Operation 3: Update */}
          <div className="border border-slate-700 rounded-lg p-4 bg-slate-900/60">
            <h4 className="font-bold text-white mb-2">C. Update Record</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-blue-400 font-semibold mb-1">SQL</p>
                <CodeBlock language="sql">
{`UPDATE students 
SET city = 'Bangalore', marks = 95 
WHERE name = 'Rohan';`}
                </CodeBlock>
              </div>
              <div>
                <p className="text-xs text-green-400 font-semibold mb-1">MongoDB</p>
                <CodeBlock language="javascript">
{`db.students.updateOne(
  { name: "Rohan" },
  { $set: { city: "Bangalore", marks: 95 } }
);`}
                </CodeBlock>
              </div>
            </div>
          </div>

          {/* Operation 4: JOIN vs Lookup */}
          <div className="border border-slate-700 rounded-lg p-4 bg-slate-900/60">
            <h4 className="font-bold text-white mb-2">D. Joining Two Entities</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-blue-400 font-semibold mb-1">SQL (INNER JOIN)</p>
                <CodeBlock language="sql">
{`SELECT U.name, O.amount 
FROM users U
JOIN orders O ON U.id = O.user_id;`}
                </CodeBlock>
              </div>
              <div>
                <p className="text-xs text-green-400 font-semibold mb-1">MongoDB ($lookup)</p>
                <CodeBlock language="javascript">
{`db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders"
    }
  }
]);`}
                </CodeBlock>
              </div>
            </div>
          </div>

          {/* Operation 5: Grouping */}
          <div className="border border-slate-700 rounded-lg p-4 bg-slate-900/60">
            <h4 className="font-bold text-white mb-2">E. GROUP BY &amp; Aggregation</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-blue-400 font-semibold mb-1">SQL</p>
                <CodeBlock language="sql">
{`SELECT city, COUNT(*), AVG(marks) 
FROM students 
GROUP BY city;`}
                </CodeBlock>
              </div>
              <div>
                <p className="text-xs text-green-400 font-semibold mb-1">MongoDB</p>
                <CodeBlock language="javascript">
{`db.students.aggregate([
  {
    $group: {
      _id: "$city",
      count: { $sum: 1 },
      avgMarks: { $avg: "$marks" }
    }
  }
]);`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Decision Matrix: Kab Kya Use Kare? */}
      <section className="concept-card tip">
        <h2 className="text-2xl font-bold text-amber-400 mb-2">
          3. Decision Matrix: Kab SQL Chune, Kab MongoDB? 🧭
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-slate-900 p-5 rounded-lg border border-blue-500/30">
            <h3 className="text-lg font-bold text-blue-400 mb-3">✅ SQL Chuno Jab:</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>🏦 <strong>Financial &amp; Banking Systems:</strong> Jahan paison ka hisaab ho aur 100% strict ACID compliance chahiye.</li>
              <li>🔗 <strong>Complex Relationships:</strong> Jahan 10-15 tables aapas mein foreign keys se judkar complex joins karti hain (jaise ERP, SAP, HRMS).</li>
              <li>📋 <strong>Fixed &amp; Stable Schema:</strong> Data ka structure saalo-saal change nahi hone wala.</li>
              <li>🛡️ <strong>Data Integrity is #1 Priority:</strong> Duplicate data bilkul bardasht nahi.</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-5 rounded-lg border border-green-500/30">
            <h3 className="text-lg font-bold text-green-400 mb-3">✅ MongoDB Chuno Jab:</h3>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>🚀 <strong>Rapid Prototyping / Startups:</strong> Product features har hafte badal rahe hain aur schema flexible chahiye.</li>
              <li>📱 <strong>Content Management &amp; Catalogs:</strong> E-commerce product catalog jahan TV ke features alag hain aur Shirt ke alag!</li>
              <li>📈 <strong>High Volume &amp; Real-time:</strong> IoT sensor data, user analytics, chat applications, social feeds.</li>
              <li>🌐 <strong>Horizontal Scale Out:</strong> TeraBytes of data ko cheap commodity cloud servers par distribute karna ho.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Polyglot Persistence */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-2">
          4. Polyglot Persistence: Real Companies Dono Use Karti Hain! 🤝
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">
          Koi bhi badi tech company (Amazon, Uber, Swiggy) sirf ek database par depend nahi karti. 
          Ise <strong>Polyglot Persistence</strong> kehte hain — right tool for the right job:
        </p>
        <div className="grid sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <p className="font-bold text-blue-400 mb-1">PostgreSQL / MySQL</p>
            <p className="text-slate-300">User accounts, Payments, Billing, Wallet balances store karne ke liye (ACID safe).</p>
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <p className="font-bold text-green-400 mb-1">MongoDB</p>
            <p className="text-slate-300">Product catalog, Restaurant menus, User reviews, Notification logs ke liye (Flexible docs).</p>
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <p className="font-bold text-red-400 mb-1">Redis</p>
            <p className="text-slate-300">User sessions, OTPs, Caching, Live delivery boy location tracking ke liye (In-memory fast).</p>
          </div>
        </div>
      </section>

      {/* 5. Perfect Interview Answer Template */}
      <section className="concept-card warning">
        <h2 className="text-2xl font-bold text-red-400 mb-2">
          5. Perfect Interview Answer Template 🎙️
        </h2>
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 text-sm text-slate-200 leading-relaxed">
          <p className="text-amber-400 font-semibold mb-2">
            Interviewer: &quot;Why would you choose MongoDB over SQL or vice versa?&quot;
          </p>
          <p className="italic">
            &quot;Sir, the choice between SQL and MongoDB depends entirely on the nature of the application and data requirements:
            <br /><br />
            I would choose <strong>SQL (like PostgreSQL)</strong> when data integrity, strict relations, and ACID compliance are non-negotiable — for instance, financial ledgers, banking transfers, or complex reporting systems where data is highly structured and joins are essential.
            <br /><br />
            On the other hand, I would choose <strong>MongoDB</strong> when dealing with flexible, semi-structured data like e-commerce product catalogs or IoT telemetry, where features evolve rapidly without schema migrations. Additionally, if the system requires massive write throughput and horizontal scaling (sharding) across distributed clusters with JSON-native documents, MongoDB is the superior fit.&quot;
          </p>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-700">
        <Link href="/mongodb-advanced" className="text-sm text-slate-400 hover:text-white">
          ← MongoDB Advanced
        </Link>
        <Link 
          href="/companies"
          className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg text-sm"
        >
          Company-Wise Questions Padho →
        </Link>
      </div>
    </div>
  );
}
