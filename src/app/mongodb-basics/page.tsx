import React from "react";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function MongoDbBasicsPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-700 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="topic-tag mongodb">MONGODB MODULE 1</span>
          <span className="difficulty-badge easy">BEGINNER / ZERO LEVEL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          MongoDB Basics: Zero Se Hero Tak 🍃
        </h1>
        <p className="text-slate-400 mt-2 text-base">
          SQL mein fixed tables hoti thi, lekin MongoDB mein full freedom hai! 
          Yeh NoSQL document database kya hota hai, JSON/BSON kya hai, aur CRUD queries kaise chalate hain — aasan Hinglish mein seekho.
        </p>
      </div>

      {/* 1. NoSQL & MongoDB Kya Hai? */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-4">
          1. NoSQL &amp; MongoDB Kya Cheez Hai? 🍃
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          SQL mein jab tum koi table banate ho, toh tumhe pehle se batana padta hai ki 5 columns honge (id, name, age, etc.). 
          Agar kal ko kisi student ka &apos;instagram_handle&apos; ya &apos;hobbies&apos; store karna ho, toh SQL table ka schema badalna padta hai.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          <strong>MongoDB (NoSQL - Not Only SQL)</strong> kehta hai: <em>&quot;Bhai koi strict table nahi chahiye! Har record ek JSON document hai. Kisi student ke paas 3 phone number ho sakte hain, kisi ke paas zero, mujhe koi dikkat nahi!&quot;</em>
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-green-400 mb-2">JSON Format (Readable)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              JavaScript Object Notation. Text format jisme key-value pairs hote hain. Hum humans ise easily padh sakte hain.
            </p>
          </div>
          <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-blue-400 mb-2">BSON Format (Binary JSON)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              MongoDB internally data ko BSON (Binary JSON) format mein disk par store karta hai. Ye fast hota hai aur extra data types (Date, Raw binary, ObjectId) support karta hai.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Terminology Mapping */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-4">
          2. SQL vs MongoDB Terminology Mapping 🔄
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Agar tum SQL jante ho, toh MongoDB samajhna 2 minute ka khel hai. Bas naam badal gaye hain:
        </p>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th className="text-blue-400">RDBMS / SQL</th>
                <th className="text-green-400">MongoDB (NoSQL)</th>
                <th>Matlab Kya Hai?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono">Database</td>
                <td className="font-mono text-green-400">Database</td>
                <td>Poora main container</td>
              </tr>
              <tr>
                <td className="font-mono">Table</td>
                <td className="font-mono text-green-400">Collection</td>
                <td>Records ka group (jaise students)</td>
              </tr>
              <tr>
                <td className="font-mono">Row / Record</td>
                <td className="font-mono text-green-400">Document (JSON)</td>
                <td>Ek individual item/student ka data</td>
              </tr>
              <tr>
                <td className="font-mono">Column</td>
                <td className="font-mono text-green-400">Field</td>
                <td>Data attribute (jaise name, age)</td>
              </tr>
              <tr>
                <td className="font-mono">Primary Key</td>
                <td className="font-mono text-green-400">_id (ObjectId)</td>
                <td>Har document ki default 12-byte unique key</td>
              </tr>
              <tr>
                <td className="font-mono">JOIN</td>
                <td className="font-mono text-green-400">Embedding ya $lookup</td>
                <td>Do collections ka data jodna</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Document Structure */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-2">
          3. MongoDB Document Kaisa Dikhta Hai?
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          MongoDB mein nested objects aur arrays bina kisi foreign key table ke seedha store ho jate hain!
        </p>

        <CodeBlock language="json" title="Sample Student Document">
{`{
  "_id": ObjectId("653f81e2b4f91a23c8901234"),
  "name": "Rohan Raj",
  "age": 21,
  "email": "rohan@example.com",
  "marks": 92.5,
  "skills": ["JavaScript", "Python", "MongoDB"], -- Array field
  "address": {                                  -- Nested / Embedded Document
    "city": "Patna",
    "state": "Bihar",
    "pincode": 800001
  },
  "isActive": true
}`}
        </CodeBlock>
      </section>

      {/* 4. Basic Database & Collection Commands */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-2">
          4. Basic Terminal Commands (mongosh)
        </h2>
        <CodeBlock language="javascript" title="Database Commands">
{`// 1. Saare databases dekhna
show dbs

// 2. Database switch ya create karna (Agar nahi hai toh create ho jayega)
use college_db

// 3. Current active database dekhna
db

// 4. Collection create karna (Optional, direct insert pe bhi create ho jata hai!)
db.createCollection("students")

// 5. Saari collections dekhna
show collections

// 6. Database delete karna
db.dropDatabase()`}
        </CodeBlock>
      </section>

      {/* 5. CRUD: CREATE (Insert) */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-2">
          5. Insert Operations (Data Dalna) 📥
        </h2>

        <CodeBlock language="javascript" title="insertOne vs insertMany">
{`// 1. Ek document insert karna:
db.students.insertOne({
  name: "Sneha Roy",
  age: 22,
  city: "Kolkata",
  marks: 94
});

// 2. Multiple documents insert karna (Array of objects):
db.students.insertMany([
  { name: "Aman Verma", age: 20, city: "Delhi", marks: 78, skills: ["C++", "Java"] },
  { name: "Priya Singh", age: 21, city: "Bangalore", marks: 95, skills: ["Python"] },
  { name: "Kabir Khan", age: 23, city: "Delhi", marks: 68, skills: ["React"] }
]);`}
        </CodeBlock>

        <div className="bg-slate-900/80 p-3 rounded border border-slate-700 text-xs text-slate-300 mt-2">
          <strong>_id field kya hai?</strong> Agar tum khud <code>_id</code> nahi dete, toh MongoDB automatically ek 12-byte ka unique <code>ObjectId</code> generate karta hai jisme timestamp, machine id, process id aur random counter hota hai.
        </div>
      </section>

      {/* 6. CRUD: READ (find) */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-2">
          6. Read Operations (find &amp; findOne) 🔍
        </h2>

        <CodeBlock language="javascript" title="Finding Documents">
{`// 1. Saara data dekhna (SELECT * FROM students)
db.students.find()
db.students.find().pretty() // Clean readable format

// 2. Pehla matching document nikalna
db.students.findOne({ city: "Delhi" })

// 3. Filtering: Marks = 95 wale
db.students.find({ marks: 95 })

// 4. Projection (Sirf specific fields dikhana: 1 = Include, 0 = Exclude)
// Name aur city dikhao, _id mat dikhao:
db.students.find({}, { name: 1, city: 1, _id: 0 })`}
        </CodeBlock>
      </section>

      {/* 7. Query Operators */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-2">
          7. Query Operators (Comparison &amp; Logical) 🎯
        </h2>

        <CodeBlock language="javascript" title="Comparison Operators ($gt, $lt, $in, etc.)">
{`// $gt (greater than) & $lt (less than)
db.students.find({ marks: { $gt: 80 } })
db.students.find({ age: { $gte: 20, $lte: 22 } }) // 20 se 22 ke beech

// $ne (not equal)
db.students.find({ city: { $ne: "Delhi" } })

// $in (matches any value in list)
db.students.find({ city: { $in: ["Delhi", "Bangalore", "Patna"] } })

// Logical: $or, $and
db.students.find({
  $or: [
    { city: "Delhi" },
    { marks: { $gte: 90 } }
  ]
})

// Nested object querying (dot notation quotes ke andar)
db.students.find({ "address.city": "Patna" })

// Array querying: Wo document jisme 'Python' skill ho
db.students.find({ skills: "Python" })`}
        </CodeBlock>
      </section>

      {/* 8. CRUD: UPDATE */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-2">
          8. Update Operations ($set, $inc, $push) ✏️
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          ⚠️ <strong>Badi Galti:</strong> Agar bina <code>$set</code> ke update karoge toh poora document replace ho jayega! Hamesha atomic operators use karo.
        </p>

        <CodeBlock language="javascript" title="Updating Documents">
{`// 1. updateOne with $set (Sirf ek field badalna)
db.students.updateOne(
  { name: "Aman Verma" },
  { $set: { marks: 85, city: "Noida" } }
);

// 2. $inc (Number ko increment karna)
db.students.updateOne(
  { name: "Aman Verma" },
  { $inc: { age: 1 } } // Age 1 se badh jayegi
);

// 3. $unset (Kisi field ko delete karna)
db.students.updateOne(
  { name: "Aman Verma" },
  { $unset: { tempField: "" } }
);

// 4. Array operators: $push (naya item jodna), $pull (item hatana)
db.students.updateOne(
  { name: "Aman Verma" },
  { $push: { skills: "Docker" } }
);

// 5. updateMany (Sabhi Delhi walo ka status update karna)
db.students.updateMany(
  { city: "Delhi" },
  { $set: { state: "NCR" } }
);

// 6. Upsert (Agar record mila toh update karo, nahi mila toh naya bana do!)
db.students.updateOne(
  { email: "rohit@gmail.com" },
  { $set: { name: "Rohit", marks: 75 } },
  { upsert: true }
);`}
        </CodeBlock>
      </section>

      {/* 9. CRUD: DELETE, SORT & LIMIT */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-2">
          9. Delete, Sort &amp; Pagination
        </h2>

        <CodeBlock language="javascript" title="Delete & Cursor Methods">
{`// Delete ek document
db.students.deleteOne({ name: "Kabir Khan" })

// Delete multiple documents
db.students.deleteMany({ marks: { $lt: 40 } })

// Sorting: 1 = Ascending, -1 = Descending
db.students.find().sort({ marks: -1 })

// Top 3 Students
db.students.find().sort({ marks: -1 }).limit(3)

// Pagination (Page 2: 5 items skip karke agle 5 lo)
db.students.find().skip(5).limit(5)

// Total count
db.students.countDocuments({ city: "Delhi" })`}
        </CodeBlock>
      </section>

      {/* 10. Top 5 Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4">
          💡 Top 5 MongoDB Basics Interview Questions
        </h2>

        <div className="qa-block">
          <div className="qa-question">
            Q1: MongoDB ko &apos;Schema-less&apos; kyun kaha jata hai?
          </div>
          <div className="qa-answer">
            Kyunki RDBMS ki tarah MongoDB mein har row ke liye fixed schema mandatory nahi hota. 
            Ek hi collection ke andar alag-alag documents ke paas alag fields aur alag data types ho sakte hain. 
            Halaanki production mein <strong>Mongoose</strong> library use karke application level par schema enforce kiya jata hai.
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q2: MongoDB mein _id kya hota hai aur iska structure kya hai?
          </div>
          <div className="qa-answer">
            <code>_id</code> MongoDB ka primary key hota hai jo 12-byte ka hexadecimal BSON ObjectId hota hai:
            <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
              <li>Pehle 4 bytes: Unix timestamp (creation time).</li>
              <li>Agle 5 bytes: Machine aur process identifier.</li>
              <li>Aakhiri 3 bytes: Incremental random counter.</li>
            </ul>
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q3: $push aur $addToSet mein kya difference hai?
          </div>
          <div className="qa-answer">
            <code>$push</code> array mein naya element add karta hai chahe wo pehle se maujood ho (duplicate allowed).
            <br />
            <code>$addToSet</code> sirf tabhi add karta hai jab wo value array mein pehle se maujood na ho (unique set banata hai).
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-700">
        <Link href="/sql-advanced" className="text-sm text-slate-400 hover:text-white">
          ← SQL Advanced
        </Link>
        <Link 
          href="/mongodb-intermediate"
          className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg text-sm"
        >
          MongoDB Intermediate Padho →
        </Link>
      </div>
    </div>
  );
}
