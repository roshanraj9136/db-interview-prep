import React from "react";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function MongoDbIntermediatePage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-700 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="topic-tag mongodb">MONGODB MODULE 2</span>
          <span className="difficulty-badge medium">INTERMEDIATE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          MongoDB Intermediate: Aggregation &amp; Indexing 🟡
        </h1>
        <p className="text-slate-400 mt-2 text-base">
          Agar interview mein MongoDB ka sawaal aaya, toh 90% chance hai wo <strong>Aggregation Pipeline ($match, $group, $lookup, $unwind)</strong> ya <strong>Indexing</strong> se aayega.
        </p>
      </div>

      {/* 1. Aggregation Pipeline */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-2">
          1. Aggregation Pipeline: MongoDB Ka Superpower 🏭
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          <strong>Analogy:</strong> Socho ek car manufacturing factory hai. 
          Pehle stage pe raw metal aati hai, doosre stage pe engine lagta hai, teesre pe paint hota hai, aur aakhiri stage pe finished car bahar nikalti hai.
          <br /><br />
          MongoDB Aggregation Pipeline bhi bilkul aise hi kaam karta hai! 
          Ye documents ko ek stage se pass karta hai, filter karta hai, transform karta hai, group karta hai, aur final report deta hai.
        </p>

        <div className="grid sm:grid-cols-3 gap-3 my-4">
          <div className="bg-slate-900 p-3 rounded border border-slate-700 text-center">
            <span className="text-green-400 font-mono font-bold">$match</span>
            <p className="text-xs text-slate-400 mt-1">WHERE clause jaisa filter lagata hai</p>
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700 text-center">
            <span className="text-green-400 font-mono font-bold">$group</span>
            <p className="text-xs text-slate-400 mt-1">GROUP BY jaisa summary nikalta hai</p>
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700 text-center">
            <span className="text-green-400 font-mono font-bold">$project</span>
            <p className="text-xs text-slate-400 mt-1">Fields ko select / rename karta hai</p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-green-300 mt-6 mb-2">
          A. $match Aur $group (Basic Pipeline)
        </h3>
        <CodeBlock language="javascript" title="City-wise Average Marks & Total Count">
{`db.students.aggregate([
  // Stage 1: Sirf un students ko lo jinka marks 50 se zyada ho ($match)
  {
    $match: { marks: { $gte: 50 } }
  },

  // Stage 2: City ke basis pe group karo ($group)
  {
    $group: {
      _id: "$city",                    // Jiske basis pe group karna ho uske aage '$' lagao
      totalStudents: { $sum: 1 },       // Count of students
      avgMarks: { $avg: "$marks" },     // Average marks
      highestMarks: { $max: "$marks" }  // Maximum marks
    }
  },

  // Stage 3: Highest average marks walo ko top pe rakho ($sort)
  {
    $sort: { avgMarks: -1 }
  }
])`}
        </CodeBlock>
      </section>

      {/* 2. $unwind & $lookup */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-2">
          2. $unwind Aur $lookup (Interview Hot Topics 🔥)
        </h2>

        <div className="space-y-6 mt-4">
          {/* $unwind */}
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-1">$unwind (Array Ko Tod Kar Rows Banana)</h3>
            <p className="text-sm text-slate-300 mb-2">
              Agar kisi document ke paas ek array field hai (jaise: <code>skills: [&quot;React&quot;, &quot;Node&quot;]</code>), 
              toh <code>$unwind</code> us ek document ko 2 alag-alag documents mein deconstruct kar deta hai!
            </p>
            <CodeBlock language="javascript" title="$unwind Example">
{`// Input Document:
// { name: "Rohan", skills: ["React", "Node"] }

db.students.aggregate([
  { $unwind: "$skills" }
])

// Output: Do alag documents milenge:
// 1. { name: "Rohan", skills: "React" }
// 2. { name: "Rohan", skills: "Node" }

// Ab tum dekh sakte ho ki poore college mein "React" skill kitne logon ke paas hai:
db.students.aggregate([
  { $unwind: "$skills" },
  { $group: { _id: "$skills", count: { $sum: 1 } } }
])`}
            </CodeBlock>
          </div>

          {/* $lookup */}
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-blue-300 mb-1">$lookup (MongoDB Ka LEFT OUTER JOIN)</h3>
            <p className="text-sm text-slate-300 mb-2">
              Jab do alag-alag collections ko jodne ki zarurat pade (e.g. <code>orders</code> collection ko <code>users</code> collection ke sath).
            </p>
            <CodeBlock language="javascript" title="$lookup Syntax & Example">
{`db.orders.aggregate([
  {
    $lookup: {
      from: "users",           // Kis collection se join karna hai
      localField: "userId",    // Orders collection ka field
      foreignField: "_id",     // Users collection ka field
      as: "userDetails"        // Output array ka naam
    }
  }
])
// Output: Har order ke andar 'userDetails' naam ka array aa jayega jisme customer ka naam/address hoga.`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* 3. Indexing in MongoDB */}
      <section className="concept-card tip">
        <h2 className="text-2xl font-bold text-amber-400 mb-2">
          3. Indexing in MongoDB: Query Fast Kaise Kare? ⚡
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Bina index ke MongoDB <strong>COLLSCAN (Collection Scan)</strong> karta hai — yani 1 crore documents ko ek ek karke check karta hai. 
          Index banne ke baad <strong>IXSCAN (Index Scan)</strong> karta hai jo B-Tree search use karta hai (milliseconds mein result!).
        </p>

        <CodeBlock language="javascript" title="Index Commands">
{`// 1. Single Field Index
db.users.createIndex({ email: 1 }) // 1 = Ascending, -1 = Descending

// 2. Compound Index (Multiple fields par index)
// ORDER MATTERS: Pehle wahi field daalo jo query mein hamesha aati hai
db.users.createIndex({ city: 1, age: -1 })

// 3. Unique Index
db.users.createIndex({ username: 1 }, { unique: true })

// 4. Text Index (Search engine jaisa search)
db.articles.createIndex({ content: "text" })
db.articles.find({ $text: { $search: "database tutorial" } })

// 5. Existing Indexes dekhna
db.users.getIndexes()

// 6. Query Performance Analyse Karna (explain)
db.users.find({ email: "rohan@example.com" }).explain("executionStats")`}
        </CodeBlock>

        <div className="bg-slate-900 p-3 rounded border border-slate-700 text-xs text-slate-300 space-y-1 mt-2">
          <p>🔍 <code>executionStats.totalDocsExamined</code>: Kitne documents scan hue.</p>
          <p>🔍 <code>executionStats.nReturned</code>: Kitne documents return hue.</p>
          <p>💡 <strong>Golden Goal:</strong> totalDocsExamined == nReturned hona chahiye (Covered Query).</p>
        </div>
      </section>

      {/* 4. Data Modeling: Embedded vs Referenced */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-2">
          4. Data Modeling: Embedded vs Referenced (Sabse Bada Design Question) 🏗️
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-slate-900 p-4 rounded-lg border border-green-500/30">
            <h3 className="font-bold text-green-400 mb-2">Embedded (Denormalized)</h3>
            <p className="text-xs text-slate-300 mb-2 leading-relaxed">
              Data ko usi document ke andar nested object ya array bana kar rakhna.
            </p>
            <p className="text-xs text-slate-400 mb-2 font-mono">
              user: &#123; name, address: &#123; city, pin &#125; &#125;
            </p>
            <p className="text-xs text-green-300 font-semibold">Kab use kare?</p>
            <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
              <li>1-to-1 relationship ho.</li>
              <li>1-to-Few relationship (e.g. User ke 2-3 addresses).</li>
              <li>Data sath mein hi read hota hai (Zero joins needed, lightning fast!).</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-blue-500/30">
            <h3 className="font-bold text-blue-400 mb-2">Referenced (Normalized)</h3>
            <p className="text-xs text-slate-300 mb-2 leading-relaxed">
              Alag collection banana aur ObjectId se link karna.
            </p>
            <p className="text-xs text-slate-400 mb-2 font-mono">
              order: &#123; orderId, userId: ObjectId(...) &#125;
            </p>
            <p className="text-xs text-blue-300 font-semibold">Kab use kare?</p>
            <ul className="text-xs text-slate-300 list-disc pl-4 space-y-1">
              <li>1-to-Many / 1-to-Squillions (e.g. YouTube video ke 10 lakh comments).</li>
              <li>Data alag se update hota hai.</li>
              <li>Document 16MB limit paar karne ka risk ho.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Top Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4">
          💡 Top 5 MongoDB Intermediate Interview Questions
        </h2>

        <div className="qa-block">
          <div className="qa-question">
            Q1: MongoDB Document ka maximum size kitna ho sakta hai?
          </div>
          <div className="qa-answer">
            Ek single BSON document ka maximum limit <strong>16 MB</strong> hota hai. 
            Isse zyada bada data (jaise videos ya large files) store karne ke liye MongoDB <strong>GridFS</strong> use karta hai.
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q2: Compound Index mein column order ka kya role hota hai (Prefix Rule)?
          </div>
          <div className="qa-answer">
            Agar index <code>&#123; city: 1, age: 1 &#125;</code> hai, toh ye index:
            <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
              <li>Query 1: <code>find(&#123; city: &quot;Delhi&quot;, age: 20 &#125;)</code> -&gt; Index USE HOGA ✅</li>
              <li>Query 2: <code>find(&#123; city: &quot;Delhi&quot; &#125;)</code> -&gt; Index USE HOGA ✅ (Index prefix match ho gaya)</li>
              <li>Query 3: <code>find(&#123; age: 20 &#125;)</code> -&gt; Index USE NAHI HOGA ❌ (Kyunki &apos;city&apos; missing hai!)</li>
            </ul>
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q3: $elemMatch operator kab use karte hain?
          </div>
          <div className="qa-answer">
            Jab kisi array of objects ke andar ek hi item mein multiple conditions match karani hon:
            <br />
            <code>db.students.find(&#123; marks: &#123; $elemMatch: &#123; subject: &quot;Maths&quot;, score: &#123; $gt: 90 &#125; &#125; &#125; &#125;)</code>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-700">
        <Link href="/mongodb-basics" className="text-sm text-slate-400 hover:text-white">
          ← MongoDB Basics Wapas Dekho
        </Link>
        <Link 
          href="/mongodb-advanced"
          className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg text-sm"
        >
          MongoDB Advanced Padho →
        </Link>
      </div>
    </div>
  );
}
