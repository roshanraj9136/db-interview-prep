import React from "react";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function PracticePage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b border-slate-700 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="topic-tag both">PRACTICE &amp; REVISION</span>
          <span className="difficulty-badge easy">LAST MINUTE CHEAT SHEET</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Last Minute Revision &amp; Practice Arena 📝
        </h1>
        <p className="text-slate-400 mt-2 text-base">
          Interview se 30 minute pehle bas ye page padh lo! 
          Yahan saare SQL aur MongoDB ke formulas, cheat sheets, aur top 10 most-asked coding problems ke ready solutions hain.
        </p>
      </div>

      {/* 1. SQL Quick Cheat Sheet */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-4">
          1. SQL 60-Second Cheat Sheet ⚡
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <p className="font-bold text-blue-400 mb-2">DDL &amp; DML Commands</p>
            <ul className="space-y-1 font-mono text-slate-300">
              <li>CREATE TABLE t (id INT PK, name VARCHAR(50));</li>
              <li>ALTER TABLE t ADD age INT;</li>
              <li>DROP TABLE t; -- Poori table khatam</li>
              <li>TRUNCATE TABLE t; -- Saara data khatam, structure safe</li>
              <li>INSERT INTO t VALUES (1, &apos;Raj&apos;);</li>
              <li>UPDATE t SET name=&apos;Rohan&apos; WHERE id=1;</li>
              <li>DELETE FROM t WHERE id=1;</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <p className="font-bold text-green-400 mb-2">Query Clauses Order (Execution Order!)</p>
            <ol className="space-y-1 font-mono text-slate-300 list-decimal pl-4">
              <li>FROM &amp; JOIN (Data uthana)</li>
              <li>WHERE (Row filter)</li>
              <li>GROUP BY (Group banana)</li>
              <li>HAVING (Group filter)</li>
              <li>SELECT (Columns chunna)</li>
              <li>DISTINCT (Duplicate hatana)</li>
              <li>ORDER BY (Sort karna)</li>
              <li>LIMIT / OFFSET (Pagination)</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 2. MongoDB Quick Cheat Sheet */}
      <section className="concept-card mongodb">
        <h2 className="text-2xl font-bold text-white mb-4">
          2. MongoDB 60-Second Cheat Sheet 🍃
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <p className="font-bold text-green-400 mb-2">Query Operators</p>
            <ul className="space-y-1 font-mono text-slate-300">
              <li>$eq, $ne: Equal, Not Equal</li>
              <li>$gt, $gte, $lt, $lte: Greater/Less than</li>
              <li>$in, $nin: List ke andar check karna</li>
              <li>$or, $and, $not, $nor: Logical conditions</li>
              <li>$exists: true/false: Field maujood hai ya nahi</li>
              <li>$regex: /pattern/i: Case-insensitive search</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <p className="font-bold text-yellow-400 mb-2">Update &amp; Array Operators</p>
            <ul className="space-y-1 font-mono text-slate-300">
              <li>$set: Field ki value badalna</li>
              <li>$inc: Number badhana/ghatana (e.g. +1, -5)</li>
              <li>$unset: Field ko delete karna</li>
              <li>$push: Array mein naya element dalna</li>
              <li>$pull: Array se element nikalna</li>
              <li>$addToSet: Array mein unique element dalna</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Top 8 Must-Practice Interview Problems */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          🔥 Top 8 Coding Problems (With Working Queries)
        </h2>

        {/* Problem 1 */}
        <div className="concept-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-blue-400">Problem 1: Second Highest Salary nikalna (Bina LIMIT ke)</h3>
            <span className="topic-tag sql">SQL</span>
          </div>
          <p className="text-xs text-slate-300 mb-2">
            Company: TCS, Infosys, Wipro, Accenture
          </p>
          <CodeBlock language="sql" title="Solution">
{`SELECT MAX(salary) AS SecondHighestSalary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);`}
          </CodeBlock>
        </div>

        {/* Problem 2 */}
        <div className="concept-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-blue-400">Problem 2: Duplicate records delete karna (Lowest ID rakh kar)</h3>
            <span className="topic-tag sql">SQL</span>
          </div>
          <p className="text-xs text-slate-300 mb-2">
            Company: Amazon, Cognizant
          </p>
          <CodeBlock language="sql" title="Solution with Self Join">
{`DELETE E1 FROM employees E1
JOIN employees E2 
WHERE E1.email = E2.email AND E1.id > E2.id;
-- E1 delete hoga jiska ID bada hai, chhota ID safe rahega!`}
          </CodeBlock>
        </div>

        {/* Problem 3 */}
        <div className="concept-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-blue-400">Problem 3: Wo Employees jo apne Manager se zyada kamate hain</h3>
            <span className="topic-tag sql">SQL</span>
          </div>
          <p className="text-xs text-slate-300 mb-2">
            LeetCode 181 / Flipkart / Amazon
          </p>
          <CodeBlock language="sql" title="Self Join Solution">
{`SELECT E.name AS Employee
FROM employees E
JOIN employees M ON E.manager_id = M.id
WHERE E.salary > M.salary;`}
          </CodeBlock>
        </div>

        {/* Problem 4 */}
        <div className="concept-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-blue-400">Problem 4: Aise Customers jinhone kabhi koi order nahi kiya</h3>
            <span className="topic-tag sql">SQL</span>
          </div>
          <p className="text-xs text-slate-300 mb-2">
            LeetCode 183 / TCS
          </p>
          <CodeBlock language="sql" title="LEFT JOIN Solution">
{`SELECT C.name AS Customers
FROM customers C
LEFT JOIN orders O ON C.id = O.customer_id
WHERE O.id IS NULL;`}
          </CodeBlock>
        </div>

        {/* Problem 5 */}
        <div className="concept-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-blue-400">Problem 5: Running Total (Cumulative Sum) nikalna</h3>
            <span className="topic-tag sql">SQL</span>
          </div>
          <p className="text-xs text-slate-300 mb-2">
            Amazon / FinTech
          </p>
          <CodeBlock language="sql" title="Window Function Solution">
{`SELECT 
    order_date, 
    amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;`}
          </CodeBlock>
        </div>

        {/* Problem 6 */}
        <div className="concept-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-green-400">Problem 6: MongoDB Aggregation — Top 3 Highest Spending Customers</h3>
            <span className="topic-tag mongodb">MONGODB</span>
          </div>
          <p className="text-xs text-slate-300 mb-2">
            Swiggy / Zomato / Uber
          </p>
          <CodeBlock language="javascript" title="Aggregation Solution">
{`db.orders.aggregate([
  // 1. Customer ke basis pe group karke total spend nikalo
  {
    $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$totalAmount" },
      ordersCount: { $sum: 1 }
    }
  },
  // 2. Highest spending topper pe
  { $sort: { totalSpent: -1 } },
  // 3. Top 3 customers uthao
  { $limit: 3 },
  // 4. Customer collection se naam join karo
  {
    $lookup: {
      from: "customers",
      localField: "_id",
      foreignField: "_id",
      as: "customerInfo"
    }
  }
]);`}
          </CodeBlock>
        </div>

        {/* Problem 7 */}
        <div className="concept-card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-green-400">Problem 7: MongoDB — Array ke andar specific item update karna</h3>
            <span className="topic-tag mongodb">MONGODB</span>
          </div>
          <p className="text-xs text-slate-300 mb-2">
            Paytm / PhonePe
          </p>
          <CodeBlock language="javascript" title="Positional Operator ($) Solution">
{`// Problem: Student ke 'Maths' subject ke marks ko badha kar 95 karna
db.students.updateOne(
  { name: "Rohan", "scores.subject": "Maths" },
  { $set: { "scores.$.marks": 95 } } // '$' automatically matching index ko represent karta hai!
);`}
          </CodeBlock>
        </div>
      </section>

      {/* 4. One-Liner Quick Definitions */}
      <section className="concept-card tip">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          📚 One-Liner Rapid Fire Definitions
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <strong className="text-blue-400">ACID:</strong> Atomicity (all/none), Consistency (valid rules), Isolation (independent), Durability (disk saved).
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <strong className="text-green-400">CAP Theorem:</strong> Consistency, Availability, Partition Tolerance mein se distributed system ek time pe sirf do hi guarantee kar sakta hai.
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <strong className="text-yellow-400">Index:</strong> Data structure (B-Tree) jo search speed ko O(N) se O(log N) kar deta hai at cost of write speed.
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <strong className="text-purple-400">Replica Set:</strong> MongoDB servers ka group jo automatic failover aur redundancy provide karta hai.
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <strong className="text-red-400">Sharding:</strong> Data ko multiple machines mein distribute karke horizontal scale-out karna.
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <strong className="text-blue-400">Candidate Key:</strong> Ek ya zyada columns jo row ko uniquely identify kar sake (jisme se ek ko Primary Key chuna jata hai).
          </div>
        </div>
      </section>

      {/* Success Wish */}
      <div className="text-center py-6">
        <p className="text-3xl mb-2">🎉</p>
        <h3 className="text-xl font-bold text-white">All The Best For Your Interview!</h3>
        <p className="text-slate-400 text-sm mt-1 max-w-md mx-auto">
          Bas relax rehna, sawal dhyan se sunna, aur concept clear rakhna. Phod ke aayega tu! 🚀
        </p>
        <div className="mt-4">
          <Link
            href="/"
            className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm border border-slate-600 inline-block"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
