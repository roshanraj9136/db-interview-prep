import React from "react";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function MongoDbAdvancedPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-700 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="topic-tag mongodb">MONGODB MODULE 3</span>
          <span className="difficulty-badge hard">ADVANCED / SYSTEM DESIGN</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          MongoDB Advanced: Replication, Sharding &amp; Transactions 🔴
        </h1>
        <p className="text-slate-400 mt-2 text-base">
          System Design round aur top tech companies (Swiggy, Uber, Amazon) ke interview mein database scaling aur architecture ke baare mein poocha jata hai. 
          Replication, Sharding aur ACID transactions ko detail mein samjho.
        </p>
      </div>

      {/* 1. Replication & Replica Sets */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-2">
          1. Replication &amp; Replica Sets (Zero Downtime) 🔄
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Agar tumhara database sirf ek server par chal raha hai, aur achanak server crash ho jaye ya hard disk jal jaye, 
          toh poori website thapp! 
          Isse bachne ke liye hum <strong>Replica Set (Group of MongoDB Servers)</strong> use karte hain.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 my-4">
          <div className="bg-slate-900 p-4 rounded-lg border border-green-500/40">
            <h3 className="font-bold text-green-400 mb-1">1. Primary Node (King 👑)</h3>
            <p className="text-xs text-slate-300">
              Saare <strong>WRITE</strong> operations (Insert, Update, Delete) sirf aur sirf Primary node par aate hain. 
              By default reads bhi primary se hoti hain. Ek set mein sirf EK Primary hota hai.
            </p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-blue-500/40">
            <h3 className="font-bold text-blue-400 mb-1">2. Secondary Nodes (Ministers 🛡️)</h3>
            <p className="text-xs text-slate-300">
              Primary node ke <strong>Oplog (Operation Log)</strong> ko copy karke apna data sync rakhte hain. 
              Agar Primary mar gaya, toh Secondaries aapas mein vote karke kisi ek ko naya Primary chun leti hain (Automatic Failover in seconds!).
            </p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-purple-500/40">
            <h3 className="font-bold text-purple-400 mb-1">3. Arbiter Node (Judge ⚖️)</h3>
            <p className="text-xs text-slate-300">
              Iske paas koi data nahi hota. Ye sirf tie-breaker vote dene ke liye hota hai jab Primary chunna ho (taaki quorum odd number ka rahe).
            </p>
          </div>
        </div>

        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 mt-4">
          <h4 className="font-bold text-yellow-300 mb-1">Read Preference &amp; Write Concern (Interview Favorite)</h4>
          <ul className="text-xs text-slate-300 space-y-2 mt-2">
            <li>• <strong>Read Preference:</strong> Application ko batana ki data kahan se padhna hai:
              <br />
              <code>primary</code> (Strict consistency), <code>secondaryPreferred</code> (Analytics / Reports ke liye server load kam karna), <code>nearest</code> (Lowest network latency).
            </li>
            <li>• <strong>Write Concern (w):</strong> 
              <br />
              <code>w: 1</code> (Primary ne likh liya toh success bhej do - Fast).
              <br />
              <code>w: &quot;majority&quot;</code> (Jab aadhe se zyada secondaries pe write confirm ho tabhi success bhej do - Zero data loss guarantee!).
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Sharding */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-2">
          2. Sharding: Horizontal Scaling (100 Terabytes Handle Karna) 🌐
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Jab data itna zyada ho jaye ki duniya ka sabse mehenga server bhi chhota pad jaye, 
          tab data ko alag-alag machines (shards) mein baant dete hain. 
          Ise kehte hain <strong>Horizontal Scaling (Scale-out)</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-3 text-xs mb-4">
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <span className="font-bold text-blue-400">1. mongos (Query Router)</span>
            <p className="text-slate-300 mt-1">Application se connect hota hai. Traffic police ki tarah query ko sahi shard par bhejta hai.</p>
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <span className="font-bold text-yellow-400">2. Config Servers</span>
            <p className="text-slate-300 mt-1">Cluster ki metadata store karte hain: kaunsa data kis shard par baitha hai.</p>
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <span className="font-bold text-green-400">3. Shards</span>
            <p className="text-slate-300 mt-1">Actual servers jo data store karte hain. Har shard khud ek Replica Set hota hai!</p>
          </div>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-lg border border-red-500/30">
          <h4 className="font-bold text-red-400 mb-1">🔥 Top Interview Question: Shard Key Kaise Chune?</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Shard key wo field hoti hai jiske basis pe MongoDB data ko alag-alag machines mein baant-ta hai.
            <br /><br />
            <strong>Rule 1: High Cardinality</strong> - Field mein lakho alag-alag values honi chahiye (jaise <code>userId</code>). &apos;gender&apos; ya &apos;country&apos; ko kabhi shard key mat banana, warna saara data 2-3 machine mein jam ho jayega!
            <br />
            <strong>Rule 2: Avoid Monotonically Increasing Keys</strong> - Auto-increment id ya Current Timestamp ko direct shard key banane se saari nayi writes sirf aakhiri machine par jayengi (Jumboshard hotspotting). Iske liye <strong>Hashed Shard Key</strong> use karte hain.
          </p>
        </div>
      </section>

      {/* 3. Multi-Document Transactions */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-2">
          3. Multi-Document ACID Transactions (MongoDB 4.0+) 💳
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Pehle log kehte the ki MongoDB mein banking apps nahi ban sakte kyunki ACID nahi hai. 
          Lekin MongoDB 4.0+ mein <strong>Distributed Multi-Document Transactions</strong> aa gaye hain!
        </p>

        <CodeBlock language="javascript" title="MongoDB Transaction Example">
{`// 1. Session start karo
const session = client.startSession();

try {
  // 2. Transaction start karo
  session.startTransaction();

  // 3. Operations karo session pass karte hue
  await accountsCollection.updateOne(
    { userId: "Rohan101" },
    { $inc: { balance: -500 } },
    { session }
  );

  await accountsCollection.updateOne(
    { userId: "Priya102" },
    { $inc: { balance: 500 } },
    { session }
  );

  // 4. Dono kaam ho gaye toh COMMIT karo
  await session.commitTransaction();
  console.log("Paise transfer ho gaye successfully!");

} catch (error) {
  // 5. Agar koi error aayi toh sab wapas (ROLLBACK) karo
  await session.abortTransaction();
  console.log("Transaction failed, rolled back!");
} finally {
  await session.endSession();
}`}
        </CodeBlock>
      </section>

      {/* 4. Special Features: TTL & Capped Collections */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-2">
          4. TTL (Time To Live) Indexes &amp; Capped Collections ⏱️
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-amber-400 mb-1">TTL Index (Auto-Expiry)</h3>
            <p className="text-xs text-slate-300 mb-2">
              OTP, Password Reset Tokens, ya User Sessions ko automatically expire/delete karna ho without cron job!
            </p>
            <CodeBlock language="javascript" title="Auto-delete after 10 mins (600s)">
{`// createdAt field ke 600 seconds baad doc auto-delete
db.otps.createIndex(
  { "createdAt": 1 }, 
  { expireAfterSeconds: 600 }
)`}
            </CodeBlock>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-purple-400 mb-1">Capped Collections (Circular Buffer)</h3>
            <p className="text-xs text-slate-300 mb-2">
              Fixed size collection (jaise last 5000 server logs). Jab limit bhar jati hai, toh naya data aane par sabse purana data automatic overwrite ho jata hai.
            </p>
            <CodeBlock language="javascript" title="Fixed 5MB / 5000 Docs Max">
{`db.createCollection("serverLogs", {
  capped: true,
  size: 5242880, // 5MB in bytes
  max: 5000      // Max documents
})`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* 5. Top Advanced Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4">
          💡 Top 5 MongoDB Advanced Interview Questions
        </h2>

        <div className="qa-block">
          <div className="qa-question">
            Q1: Covered Query kya hoti hai aur ye itni fast kyun hoti hai?
          </div>
          <div className="qa-answer">
            Ek query ko <strong>Covered Query</strong> tab kehte hain jab:
            <br />
            1. Query ke saare search criteria fields index ka hissa hon.
            <br />
            2. Projection mein return hone wale saare fields bhi usi index ka hissa hon (aur <code>_id: 0</code> exclude kiya ho).
            <br />
            <strong>Fayda:</strong> MongoDB ko actual hard-disk par rakhe documents ko touch tak nahi karna padta! RAM mein rakhe index se hi poora answer return ho jata hai (Zero disk I/O).
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q2: MongoDB CAP Theorem mein kahan fit hota hai (CP ya AP)?
          </div>
          <div className="qa-answer">
            By default, MongoDB ek <strong>CP (Consistency &amp; Partition Tolerance)</strong> system hai. 
            Agar network partition hota hai aur primary node isolate ho jati hai, toh primary writes accept karna band kar deta hai taaki data inconsistent na ho.
            <br />
            Lekin agar aap secondary nodes se stale reads allow karte ho (<code>readPreference: &apos;secondary&apos;</code>), toh ye AP (Availability) jaisa behave karne lagta hai.
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q3: MongoDB Change Streams kya hoti hain?
          </div>
          <div className="qa-answer">
            Change Streams application ko real-time notifications deti hain jab database mein koi Insert, Update ya Delete hota hai (like pub/sub). 
            Ye internal <strong>Oplog</strong> ko tail karke kaam karti hain. Real-time chat apps aur notifications ke liye best hain.
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-700">
        <Link href="/mongodb-intermediate" className="text-sm text-slate-400 hover:text-white">
          ← MongoDB Intermediate
        </Link>
        <Link 
          href="/sql-vs-mongodb"
          className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg text-sm"
        >
          SQL vs MongoDB Comparison Padho →
        </Link>
      </div>
    </div>
  );
}
