import React from "react";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function SqlAdvancedPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-700 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="topic-tag sql">SQL MODULE 3</span>
          <span className="difficulty-badge hard">ADVANCED / SENIOR LEVEL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          SQL Advanced: ACID, Normalization &amp; Window Functions 🔴
        </h1>
        <p className="text-slate-400 mt-2 text-base">
          Ye module un logon ke liye hai jo Product Companies (Amazon, Flipkart, Google) aur Senior Engineer interviews target kar rahe hain. 
          ACID, Window Functions, aur Index Optimization ko crystal clear samjhenge.
        </p>
      </div>

      {/* 1. Transactions & ACID */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          1. Transactions &amp; ACID Properties (Bank Transfer Analogy) 🏦
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Socho Rohan, Priya ko Google Pay se ₹500 bhej raha hai:
          <br />
          <strong>Step 1:</strong> Rohan ke account se ₹500 minus honge.
          <br />
          <strong>Step 2:</strong> Priya ke account mein ₹500 plus honge.
          <br />
          Agar Step 1 ke baad server down ho jaye ya light chali jaye, toh kya Rohan ke ₹500 gayab ho jayenge? 
          <strong>Nahi! Isi ko bachane ke liye Transaction aur ACID hota hai.</strong>
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-blue-400">A - Atomicity (All or Nothing)</h3>
            <p className="text-sm text-slate-300 mt-1">
              Ya toh saare steps poore complete honge (COMMIT), ya agar ek bhi step fail hua toh poora transaction cancel hokar purani state mein wapas aa jayega (ROLLBACK). Half-done kuch nahi hota!
            </p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-green-400">C - Consistency (Rules Follow Karo)</h3>
            <p className="text-sm text-slate-300 mt-1">
              Transaction se pehle aur transaction ke baad database ke saare rules (constraints, balance {">="} 0) valid rehne chahiye. Balance negative nahi ho sakta.
            </p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-yellow-400">I - Isolation (No Beech Mein Tang Adana)</h3>
            <p className="text-sm text-slate-300 mt-1">
              Ek transaction chal raha hai toh dusre concurrent transactions ko uske adhoore data ka pata nahi chalna chahiye jab tak commit na ho.
            </p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-purple-400">D - Durability (Permanent Record)</h3>
            <p className="text-sm text-slate-300 mt-1">
              Ek baar transaction COMMIT ho gaya, toh chahe agle hi second poora datacenter blast ho jaye ya power cut ho jaye, data hard disk mein safe rahega.
            </p>
          </div>
        </div>

        <CodeBlock language="sql" title="SQL Transaction Syntax">
{`START TRANSACTION; -- Ya BEGIN TRANSACTION

-- Step 1: Rohan se paise kaato
UPDATE accounts SET balance = balance - 500 WHERE user_id = 101;

-- Step 2: Priya ko paise do
UPDATE accounts SET balance = balance + 500 WHERE user_id = 102;

-- Agar sab sahi raha:
COMMIT;

-- Agar koi error aayi (Jaise Priya ka account band hai):
-- ROLLBACK;`}
        </CodeBlock>
      </section>

      {/* 2. Normalization */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          2. Normalization (1NF, 2NF, 3NF, BCNF) 🧹
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          <strong>Normalization</strong> ka maksad hota hai database se <em>Duplicate Data (Redundancy)</em> hatana taaki storage bache aur Update/Delete anomalies na aayein.
        </p>

        <div className="space-y-4">
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-blue-400 mb-1">1NF (First Normal Form) - Atomic Values</h4>
            <p className="text-sm text-slate-300">
              Ek cell mein ek hi value honi chahiye. Comma lagakar multiple values mat daalo!
              <br />
              ❌ <em>Galt:</em> Phone: &quot;9876543210, 8765432109&quot;
              <br />
              ✅ <em>Sahi:</em> Har phone number ke liye alag row banao ya alag table.
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-yellow-400 mb-1">2NF (Second Normal Form) - No Partial Dependency</h4>
            <p className="text-sm text-slate-300">
              Table 1NF mein honi chahiye, aur koi bhi non-prime attribute <em>composite key</em> ke adhoore hisse pe depend nahi karna chahiye. Table ko do tables mein split karo.
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-green-400 mb-1">3NF (Third Normal Form) - No Transitive Dependency</h4>
            <p className="text-sm text-slate-300">
              Table 2NF mein ho, aur koi non-key column kisi dusre non-key column pe depend na kare (A -&gt; B aur B -&gt; C, toh A -&gt; C nahi hona chahiye).
              <br />
              <em>Example:</em> Student table mein <code>pincode</code> aur <code>city</code> dono rakhna galti hai, kyunki city pincode se pata chal jati hai. Pincode-city ki alag table banao!
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h4 className="font-bold text-purple-400 mb-1">Denormalization Kab Karte Hain?</h4>
            <p className="text-sm text-slate-300">
              Read-heavy analytics system (Data Warehouses) mein JOINs kam karne aur query fast karne ke liye jaan-bujhkar data duplicate karke rakhte hain.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Window Functions */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          3. Window Functions: OVER() &amp; PARTITION BY 🪟
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          GROUP BY rows ko condense (chhota) karke ek single row bana deta hai. 
          Lekin <strong>Window Functions</strong> har original row ko barkarar rakhte hue sath mein ranking ya running total calculate karte hain!
        </p>

        <CodeBlock language="sql" title="ROW_NUMBER vs RANK vs DENSE_RANK">
{`-- Department-wise salaries rank karna
SELECT 
    name, 
    department, 
    salary,
    -- 1, 2, 3, 4 bina gap ke lagataar number deta hai
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num,

    -- Agar do logo ki salary barabar hai toh tie dega (1, 2, 2, 4) -> gap aayega
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk,

    -- Tie aane par bhi gap nahi chhodta (1, 2, 2, 3) -> INTERVIEW FAVOURITE!
    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rnk
FROM employees;`}
        </CodeBlock>

        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 mt-4">
          <h4 className="font-bold text-blue-300 mb-2">Top Interview Problem: Har Department Ka Nth Highest Salary</h4>
          <CodeBlock language="sql" title="Nth Highest Salary with CTE & DENSE_RANK">
{`WITH RankedSalaries AS (
    SELECT 
        name, 
        department, 
        salary,
        DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as ranking
    FROM employees
)
SELECT department, name, salary
FROM RankedSalaries
WHERE ranking = 2; -- Har department ka 2nd topper!`}
          </CodeBlock>
        </div>

        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 mt-4">
          <h4 className="font-bold text-purple-300 mb-2">LEAD() and LAG() - Previous / Next Row Dekhna</h4>
          <CodeBlock language="sql" title="Month-on-Month Growth Check">
{`SELECT 
    month, 
    revenue,
    LAG(revenue, 1) OVER (ORDER BY month) AS prev_month_revenue,
    revenue - LAG(revenue, 1) OVER (ORDER BY month) AS monthly_growth
FROM monthly_sales;`}
          </CodeBlock>
        </div>
      </section>

      {/* 4. CTEs (Common Table Expressions) */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-2">
          4. CTEs (WITH Clause) - Clean SQL Queries
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Nested subqueries bahut gandi aur unreadable dikhti hain. <code>WITH</code> clause se hum temporary named result set bana sakte hain jo readable hota hai.
        </p>

        <CodeBlock language="sql" title="Readable Queries with CTE">
{`WITH HighPerformingDepts AS (
    SELECT department, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
    HAVING AVG(salary) > 75000
)
SELECT E.name, E.department, E.salary
FROM employees E
JOIN HighPerformingDepts H ON E.department = H.department;`}
        </CodeBlock>
      </section>

      {/* 5. Stored Procedures & Triggers */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          5. Stored Procedures &amp; Triggers
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-blue-400 mb-1">Stored Procedure</h3>
            <p className="text-xs text-slate-300 mb-2">
              SQL code ka ek reusable block jo database server par pre-compiled store hota hai. Application baar baar network call karne ki jagah ek simple call karti hai.
            </p>
            <CodeBlock language="sql" title="Procedure Example">
{`DELIMITER //
CREATE PROCEDURE GetStudentByCity(IN city_name VARCHAR(50))
BEGIN
    SELECT * FROM students WHERE city = city_name;
END //
DELIMITER ;

-- Call karna:
CALL GetStudentByCity('Delhi');`}
            </CodeBlock>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="font-bold text-green-400 mb-1">Triggers</h3>
            <p className="text-xs text-slate-300 mb-2">
              Ek aisi script jo automatic fire hoti hai jab koi event (INSERT, UPDATE, DELETE) hota hai. Jaise: jab koi student delete ho toh uska backup &apos;audit_log&apos; table mein store ho jaye.
            </p>
            <CodeBlock language="sql" title="Trigger Example">
{`CREATE TRIGGER before_student_delete
BEFORE DELETE ON students
FOR EACH ROW
BEGIN
    INSERT INTO deleted_students_log (student_id, student_name, deleted_at)
    VALUES (OLD.id, OLD.name, NOW());
END;`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* 6. Query Optimization & EXPLAIN */}
      <section className="concept-card tip">
        <h2 className="text-2xl font-bold text-amber-400 mb-2">
          6. Query Optimization: EXPLAIN Plan 🚀
        </h2>
        <p className="text-slate-300 text-sm mb-3">
          Production mein slow queries ko kaise pakde? Query ke aage <code>EXPLAIN</code> lagao!
        </p>

        <CodeBlock language="sql" title="Using EXPLAIN">
{`EXPLAIN SELECT * FROM users WHERE email = 'rohan@example.com';`}
        </CodeBlock>

        <div className="text-xs text-slate-300 space-y-1">
          <p>• <strong>type = ALL:</strong> Danger! Poori table scan ho rahi hai (Full Table Scan). Index lagao!</p>
          <p>• <strong>type = ref / const:</strong> Badhiya! Index use ho raha hai.</p>
          <p>• <strong>Optimization Tip 1:</strong> Kabhi <code>SELECT *</code> mat karo, sirf required columns mangwao.</p>
          <p>• <strong>Optimization Tip 2:</strong> WHERE clause mein columns par function mat lagao (e.g. <code>WHERE YEAR(dob) = 2000</code> index disable kar deta hai!).</p>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-700">
        <Link href="/sql-intermediate" className="text-sm text-slate-400 hover:text-white">
          ← SQL Intermediate Wapas Dekho
        </Link>
        <Link 
          href="/mongodb-basics"
          className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg text-sm"
        >
          MongoDB Basics Shuru Karo →
        </Link>
      </div>
    </div>
  );
}
