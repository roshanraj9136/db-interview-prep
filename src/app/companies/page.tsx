import React from "react";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function CompaniesPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-slate-700 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="topic-tag both">REAL INTERVIEWS</span>
          <span className="difficulty-badge medium">ALL COMPANIES</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Company-Wise Database Interview Questions 💼
        </h1>
        <p className="text-slate-400 mt-2 text-base">
          TCS se lekar Google aur Amazon tak — har company ka interview lene ka style alag hota hai. 
          Ye rahe actual interview questions, unke ideal Hinglish answers aur coding solutions.
        </p>
      </div>

      {/* Company 1: TCS */}
      <section className="concept-card company">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🏢</span>
          <div>
            <h2 className="text-2xl font-bold text-white">TCS (Ninja &amp; Digital)</h2>
            <p className="text-xs text-slate-400">Level: Easy to Medium | Focus: SQL Fundamentals, Joins, Normalization</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="qa-block">
            <div className="qa-question">
              Q1: DDL, DML, DCL aur TCL mein kya difference hai? Har ek ka 2 example do.
            </div>
            <div className="qa-answer text-sm space-y-1">
              <p>• <strong>DDL (Data Definition):</strong> Table structure banane/badalne ke liye (e.g. <code>CREATE, ALTER, DROP, TRUNCATE</code>).</p>
              <p>• <strong>DML (Data Manipulation):</strong> Data par operations ke liye (e.g. <code>SELECT, INSERT, UPDATE, DELETE</code>).</p>
              <p>• <strong>DCL (Data Control):</strong> Security aur permissions ke liye (e.g. <code>GRANT, REVOKE</code>).</p>
              <p>• <strong>TCL (Transaction Control):</strong> Rollback aur commit ke liye (e.g. <code>COMMIT, ROLLBACK, SAVEPOINT</code>).</p>
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-question">
              Q2: Ek table mein se duplicate rows kaise find karein?
            </div>
            <div className="qa-answer">
              <CodeBlock language="sql" title="Find Duplicate Emails">
{`SELECT email, COUNT(*) AS count 
FROM users 
GROUP BY email 
HAVING COUNT(*) > 1;`}
              </CodeBlock>
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-question">
              Q3: DELETE aur TRUNCATE mein kya difference hai? (TCS All-time Favourite!)
            </div>
            <div className="qa-answer text-sm space-y-1">
              <p>1. <strong>Command Type:</strong> DELETE DML command hai, TRUNCATE DDL command hai.</p>
              <p>2. <strong>WHERE Clause:</strong> DELETE mein specific row delete karne ke liye WHERE lag sakta hai. TRUNCATE mein WHERE nahi lagta, poora data ek bar mein udata hai.</p>
              <p>3. <strong>Speed:</strong> TRUNCATE fast hota hai kyunki wo row-by-row log nahi banata.</p>
              <p>4. <strong>Rollback:</strong> DELETE ko ROLLBACK kiya ja sakta hai (transaction ke andar), TRUNCATE ko generally rollback nahi kiya ja sakta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company 2: Infosys */}
      <section className="concept-card company">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🏢</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Infosys (DSE &amp; Power Programmer)</h2>
            <p className="text-xs text-slate-400">Level: Medium | Focus: Writing queries, Subqueries, Indexing, MongoDB CRUD</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="qa-block">
            <div className="qa-question">
              Q1: Ek table se 3rd Highest Salary nikalne ki query likho.
            </div>
            <div className="qa-answer">
              <CodeBlock language="sql" title="3rd Highest Salary">
{`-- Approach 1: LIMIT and OFFSET (MySQL / Postgres)
SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 2; -- 2 skip karke 3rd uthaya

-- Approach 2: Universal Subquery (Har RDBMS mein chalega)
SELECT MAX(salary) FROM employees 
WHERE salary < (
    SELECT MAX(salary) FROM employees 
    WHERE salary < (SELECT MAX(salary) FROM employees)
);`}
              </CodeBlock>
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-question">
              Q2: Clustered Index aur Non-Clustered Index mein kya antar hai?
            </div>
            <div className="qa-answer text-sm leading-relaxed">
              <strong>Clustered Index:</strong> Table ka actual physical data usi order mein disk par arrange hota hai. 
              Isliye ek table mein sirf <strong>EK</strong> hi Clustered Index ho sakta hai (By default Primary Key par banta hai). Dictionary jaisa hota hai.
              <br /><br />
              <strong>Non-Clustered Index:</strong> Data alag jagah rehta hai aur index ek alag table hoti hai jisme pointer hota hai actual data ki taraf. 
              Ek table mein <strong>Multiple</strong> Non-Clustered index banaye ja sakte hain. Book ke peeche ke index jaisa hota hai.
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-question">
              Q3: MongoDB query: Wo students find karo jinke marks 80 se 90 ke beech hon aur city &apos;Delhi&apos; ya &apos;Pune&apos; ho.
            </div>
            <div className="qa-answer">
              <CodeBlock language="javascript" title="MongoDB Multi-condition Query">
{`db.students.find({
  marks: { $gte: 80, $lte: 90 },
  city: { $in: ["Delhi", "Pune"] }
});`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Company 3: Amazon */}
      <section className="concept-card company">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">📦</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Amazon (SDE 1 &amp; SDE 2)</h2>
            <p className="text-xs text-slate-400">Level: Hard | Focus: Window Functions, High Scale, Sharding, Locking</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="qa-block">
            <div className="qa-question">
              Q1: Har department ka top 3 highest earner nikalne ki query likho. (Amazon Classic Bar Raiser!)
            </div>
            <div className="qa-answer">
              <CodeBlock language="sql" title="Top 3 in each department using DENSE_RANK">
{`WITH DepartmentRankings AS (
    SELECT 
        emp_id, 
        name, 
        department, 
        salary,
        DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as ranking
    FROM employees
)
SELECT department, name, salary, ranking
FROM DepartmentRankings
WHERE ranking <= 3;`}
              </CodeBlock>
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-question">
              Q2: Sharding mein &quot;Hotspotting&quot; kya hota hai aur isse kaise bachte hain?
            </div>
            <div className="qa-answer text-sm leading-relaxed">
              <strong>Hotspotting</strong> tab hota hai jab ek galat Shard Key choose karne ki wajah se saara read/write traffic sirf ek hi shard server par chala jata hai aur baaki servers khali baithe rehte hain (e.g. Timestamp ko shard key bana diya toh saare live orders ek hi server pe jayenge).
              <br /><br />
              <strong>Solution:</strong>
              1. <strong>Hashed Shard Key</strong> use karo jisse data uniformly random hash ke roop mein sabhi shards par baant jaye.
              <br />
              2. <strong>Compound Shard Key</strong> use karo (e.g. <code>&#123; customerRegion: 1, userId: 1 &#125;</code>) jisse high cardinality mile.
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-question">
              Q3: Optimistic Locking vs Pessimistic Locking mein kya farak hai? Flash sale mein kya use karoge?
            </div>
            <div className="qa-answer text-sm leading-relaxed">
              <strong>Pessimistic Locking:</strong> Database row par direct lock laga deta hai (<code>SELECT ... FOR UPDATE</code>). Jab tak mera transaction chal raha hai, koi doosra user us row ko touch nahi kar sakta. (High contention mein slow ho jata hai, deadlock ho sakta hai).
              <br /><br />
              <strong>Optimistic Locking:</strong> Koi lock nahi lagata. Row ke sath ek <code>version</code> column rakhta hai. Update karte waqt check karta hai: 
              <code>UPDATE products SET stock = stock - 1, version = version + 1 WHERE id = 101 AND version = current_version;</code>. Agar version match nahi hua, toh user ko retry bol deta hai.
              <br /><br />
              <strong>Flash Sale Design:</strong> Flash sale mein generally Redis Atomic Decr (<code>DECRBY</code>) use karte hain in-memory cache level par, aur database level par Optimistic locking ya message queues (Kafka) use karte hain.
            </div>
          </div>
        </div>
      </section>

      {/* Company 4: Google */}
      <section className="concept-card company">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🔍</span>
          <div>
            <h2 className="text-2xl font-bold text-white">Google</h2>
            <p className="text-xs text-slate-400">Level: Very Hard | Focus: Deep Internals, B-Trees vs LSM Trees, Distributed Systems</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="qa-block">
            <div className="qa-question">
              Q1: Relational databases B-Tree / B+ Tree index kyun use karte hain, Hash index ya Binary Search Tree kyun nahi?
            </div>
            <div className="qa-answer text-sm leading-relaxed">
              1. <strong>Range Queries:</strong> SQL mein hum <code>WHERE age BETWEEN 20 AND 30</code> ya <code>ORDER BY</code> karte hain. Hash Index sirf exact match (<code>=</code>) kar sakta hai, range search nahi kar sakta!
              <br />
              2. <strong>Disk Page Optimization:</strong> B+ Tree ke nodes disk ke page size (4KB/8KB) ke hisaab se designed hote hain. Iska fan-out factor bahut high hota hai (100-200 children per node), isliye 10 crore records mein bhi tree ki depth sirf 3 ya 4 rehti hai! Yani sirf 3-4 disk reads mein data mil jata hai. Binary Search Tree mein tree unbalanced hokar deep ho jayega (slow disk I/O).
              <br />
              3. <strong>Sequential Traversal:</strong> B+ Tree ke saare leaf nodes aapas mein linked list se jude hote hain, isliye range scan super fast hota hai.
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-question">
              Q2: Google Spanner vs Traditional MongoDB: Distributed ACID kaise achieve hota hai?
            </div>
            <div className="qa-answer text-sm leading-relaxed">
              Google Spanner duniya ka pehla globally-distributed NewSQL database hai jo globally ACID transactions deta hai. Ye hardware level par <strong>Atomic Clocks aur GPS receivers (TrueTime API)</strong> use karta hai taaki globally sabhi datacenters mein exact time synchronization ho sake.
            </div>
          </div>
        </div>
      </section>

      {/* Company 5: Fintech (Paytm, Razorpay, CRED) */}
      <section className="concept-card company">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">💳</span>
          <div>
            <h2 className="text-2xl font-bold text-white">FinTech (Razorpay, Paytm, PhonePe)</h2>
            <p className="text-xs text-slate-400">Level: High Precision | Focus: Double Entry Bookkeeping, Idempotency, Strict ACID</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="qa-block">
            <div className="qa-question">
              Q1: Payment Gateway mein &quot;Idempotency Key&quot; database level par kaise implement hoti hai?
            </div>
            <div className="qa-answer text-sm leading-relaxed">
              Agar user payment button ko do baar click kar de, toh customer ke do baar paise nahi katne chahiye!
              <br /><br />
              <strong>Implementation:</strong> Har payment request ke sath ek unique <code>idempotency_key</code> (UUID) aati hai. 
              Database ke payments table mein <code>idempotency_key VARCHAR(100) UNIQUE</code> constraint laga hota hai. 
              Agar doosri request aayi, toh database duplicate key error phek dega aur purana payment status return kar dega bina dubara paise kaate!
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-question">
              Q2: Double-Entry Ledger System kya hota hai?
            </div>
            <div className="qa-answer text-sm leading-relaxed">
              Fintech apps kabhi bhi user table mein seedha <code>balance = 5000</code> update nahi karte! 
              Wo <strong>Ledger</strong> banate hain jahan har transaction do entries create karta hai:
              <br />
              • Ek account mein <strong>DEBIT</strong>
              <br />
              • Doosre account mein <strong>CREDIT</strong>
              <br />
              Dono ka sum hamesha ZERO hona chahiye (Audit-ready). User ka balance calculate karne ke liye: <code>SELECT SUM(amount) FROM ledger WHERE user_id = 101;</code>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Strategy for Beginners */}
      <section className="concept-card tip">
        <h2 className="text-2xl font-bold text-amber-400 mb-3">
          🎯 Freshers vs Experienced Strategy
        </h2>
        <div className="space-y-3 text-sm text-slate-300">
          <p>
            <strong>Agar tum Fresher ho:</strong> Interviewer expect karta hai ki tumhe <strong>SQL Joins, Group By, Primary vs Foreign Key, DDL/DML, aur MongoDB ke basic CRUD</strong> achhe se aate hon. Query likhte waqt confidence dikhao aur syntax galat hone par panic mat karo — logic samjhao!
          </p>
          <p>
            <strong>Agar tum 1-3 saal experienced ho:</strong> Tumse <strong>Query Optimization (EXPLAIN plan), Indexing strategies (B-Tree, covered query), Transactions (ACID isolation levels), aur MongoDB Aggregation ($lookup, $unwind)</strong> pe deep questions honge.
          </p>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-700">
        <Link href="/sql-vs-mongodb" className="text-sm text-slate-400 hover:text-white">
          ← SQL vs MongoDB
        </Link>
        <Link 
          href="/practice"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-sm"
        >
          Quick Practice &amp; Revision Sheet →
        </Link>
      </div>
    </div>
  );
}
