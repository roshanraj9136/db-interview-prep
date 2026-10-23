import React from "react";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function SqlIntermediatePage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-700 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="topic-tag sql">SQL MODULE 2</span>
          <span className="difficulty-badge medium">INTERMEDIATE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          SQL Intermediate: JOINs, Aggregations &amp; Subqueries 🟡
        </h1>
        <p className="text-slate-400 mt-2 text-base">
          Yahan se asli interview round shuru hota hai. TCS ho ya Amazon, 80% SQL questions <strong>JOINs, GROUP BY, aur Subqueries</strong> se hi aate hain.
        </p>
      </div>

      {/* 1. JOINs */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          1. SQL JOINs: Sabse Important Topic 🤝
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Jab data alag-alag tables mein banta ho (jaise ek table mein <code>Students</code> aur doosri table mein <code>Courses</code>), 
          un dono tables ko kisi common column (jaise <code>student_id</code>) ke basis pe jodna hi <strong>JOIN</strong> kehlata hai.
        </p>

        {/* Visual Table Setup */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Table A: students</h4>
            <div className="overflow-x-auto text-xs">
              <table className="data-table">
                <thead><tr><th>id</th><th>name</th><th>city</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td>Rahul</td><td>Delhi</td></tr>
                  <tr><td>2</td><td>Priya</td><td>Mumbai</td></tr>
                  <tr><td>3</td><td>Aman</td><td>Pune</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-2">Table B: orders</h4>
            <div className="overflow-x-auto text-xs">
              <table className="data-table">
                <thead><tr><th>order_id</th><th>student_id</th><th>amount</th></tr></thead>
                <tbody>
                  <tr><td>101</td><td>1</td><td>500</td></tr>
                  <tr><td>102</td><td>1</td><td>1200</td></tr>
                  <tr><td>103</td><td>2</td><td>800</td></tr>
                  <tr><td>104</td><td>4</td><td>250</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* JOIN Types Detail */}
        <div className="space-y-4">
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-blue-300">A. INNER JOIN (Matching Rows Sirf)</h3>
            <p className="text-slate-300 text-sm mt-1 mb-2">
              Sirf wahi rows aayengi jo dono tables mein match karti hain (Intersection of A &amp; B).
            </p>
            <CodeBlock language="sql" title="INNER JOIN Example">
{`SELECT students.name, orders.order_id, orders.amount
FROM students
INNER JOIN orders ON students.id = orders.student_id;
-- Output: Rahul ke 2 orders (101, 102) aur Priya ka 1 order (103). Aman nahi aayega!`}
            </CodeBlock>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-yellow-300">B. LEFT JOIN (Left Table Poori + Matching Right)</h3>
            <p className="text-slate-300 text-sm mt-1 mb-2">
              Left table (students) ke saare records aayenge. Agar right table (orders) mein match nahi mila, toh wahan <strong>NULL</strong> aayega.
            </p>
            <CodeBlock language="sql" title="LEFT JOIN Example">
{`SELECT students.name, orders.order_id, orders.amount
FROM students
LEFT JOIN orders ON students.id = orders.student_id;
-- Output: Rahul, Priya aur Aman bhi aayega (Aman ka order_id aur amount NULL hoga!)`}
            </CodeBlock>
            <p className="text-xs text-amber-400 mt-2">
              💡 <strong>Interview Question:</strong> &quot;Aise students find karo jinhone kabhi koi order nahi kiya?&quot;
              <br />
              <code>SELECT name FROM students LEFT JOIN orders ON students.id = orders.student_id WHERE orders.order_id IS NULL;</code>
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-purple-300">C. RIGHT JOIN &amp; FULL OUTER JOIN</h3>
            <p className="text-slate-300 text-sm mt-1 mb-2">
              <strong>RIGHT JOIN:</strong> Right table ke sabhi rows + left se matching rows.
              <br />
              <strong>FULL OUTER JOIN:</strong> Dono tables ka saara data. Jahan match na mile wahan NULL. (MySQL mein UNION of LEFT and RIGHT join se emulate karte hain).
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-red-300">D. SELF JOIN (Apne Aap Se Judna!)</h3>
            <p className="text-slate-300 text-sm mt-1 mb-2">
              Jab ek table ko usi ke sath join kiya jaye. Sabse famous example: <strong>Employee aur unka Manager</strong> (kyunki manager bhi toh company ka employee hi hai!).
            </p>
            <CodeBlock language="sql" title="Employee-Manager Self Join">
{`SELECT E.emp_name AS Employee, M.emp_name AS Manager
FROM employees E
LEFT JOIN employees M ON E.manager_id = M.emp_id;`}
            </CodeBlock>
          </div>
        </div>
      </section>

      {/* 2. GROUP BY & HAVING */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          2. Aggregate Functions, GROUP BY &amp; HAVING 📊
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Jab hume records ko group karke summary nikalni hoti hai (jaise: har city se kitne students hain, ya har department ka average salary kya hai).
        </p>

        <CodeBlock language="sql" title="Aggregations & Grouping">
{`-- Aggregate functions: COUNT, SUM, AVG, MIN, MAX
SELECT 
    COUNT(*) AS total_students,
    AVG(marks) AS average_marks,
    MAX(marks) AS topper_marks,
    MIN(marks) AS lowest_marks
FROM students;

-- GROUP BY: Har city ke hisaab se count aur avg marks
SELECT city, COUNT(id) AS student_count, AVG(marks) AS avg_marks
FROM students
GROUP BY city;`}
        </CodeBlock>

        <div className="bg-slate-900 p-4 rounded-lg border border-amber-500/30 my-4">
          <h3 className="text-base font-bold text-amber-400 mb-2">
            🔥 Super Important: WHERE vs HAVING Difference!
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Bahut log confuse hote hain. Seedha funda yaad rakho:
          </p>
          <ul className="text-slate-300 text-sm space-y-2">
            <li>• <strong>WHERE:</strong> Grouping hone se <em>pehle</em> individual rows par filter lagata hai. Isme aggregate functions (AVG, SUM) use <strong>nahi</strong> kar sakte!</li>
            <li>• <strong>HAVING:</strong> Grouping hone ke <em>baad</em> groups par filter lagata hai. Isme aggregate functions use hote hain.</li>
          </ul>

          <CodeBlock language="sql" title="WHERE vs HAVING in Action">
{`-- Example: Un cities ka avg marks dikhao jahan marks > 50 wale kam se kam 3 students ho
SELECT city, AVG(marks) AS avg_score, COUNT(*) AS count
FROM students
WHERE marks > 50              -- Step 1: pehle fail bachho ko hataya
GROUP BY city                 -- Step 2: city wise grouping kari
HAVING COUNT(*) >= 3;         -- Step 3: sirf wahi city rakhi jahan 3+ students hain`}
          </CodeBlock>
        </div>
      </section>

      {/* 3. Subqueries */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          3. Subqueries (Query Ke Andar Query) 🕵️
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Jab ek query ka result doosri query ke condition ke roop mein use hota hai.
        </p>

        <CodeBlock language="sql" title="Subquery Examples">
{`-- Problem: Un students ke naam batao jinke marks class ke average marks se zyada hain
SELECT name, marks
FROM students
WHERE marks > (SELECT AVG(marks) FROM students);

-- Subquery with IN: Un students ke naam jinhone koi course liya hai
SELECT name FROM students
WHERE id IN (SELECT DISTINCT student_id FROM enrollments);

-- Correlated Subquery: Har department ka highest earner employee
SELECT name, department, salary
FROM employees E1
WHERE salary = (
    SELECT MAX(salary) 
    FROM employees E2 
    WHERE E2.department = E1.department
);`}
        </CodeBlock>
      </section>

      {/* 4. Indexes */}
      <section className="concept-card tip">
        <h2 className="text-2xl font-bold text-amber-400 mb-2">
          4. Indexes: Database Ki Speed 100x Kaise Kare? ⚡
        </h2>
        <p className="text-slate-300 text-sm mb-3">
          <strong>Analogy:</strong> Socho 1000 pages ki book mein tumhe &quot;Polymorphism&quot; dhundhna hai. 
          Agar index page nahi hai, toh page 1 se 1000 tak ek-ek page palatna padega (ise kehte hain <strong>Full Table Scan</strong>). 
          Lekin agar book ke peeche Index hai, toh seedha page number 412 pe pahunch jaoge!
        </p>

        <CodeBlock language="sql" title="Creating Indexes">
{`-- Normal Index
CREATE INDEX idx_student_city ON students(city);

-- Composite Index (Multiple columns par index)
CREATE INDEX idx_city_marks ON students(city, marks);

-- Unique Index
CREATE UNIQUE INDEX idx_user_email ON users(email);`}
        </CodeBlock>

        <p className="text-xs text-slate-400 mt-2">
          ⚠️ <strong>Interview Catch:</strong> &quot;Kya hume har column pe index bana dena chahiye?&quot; 
          <br />
          <strong>Jawab:</strong> Bilkul NAHI! Index banane se <strong>SELECT (Read) fast</strong> hota hai, lekin <strong>INSERT / UPDATE / DELETE (Write) slow</strong> ho jata hai kyunki har write pe index tree ko re-balance karna padta hai.
        </p>
      </section>

      {/* 5. CASE WHEN & Built-in Functions */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          5. CASE WHEN (SQL Ka If-Else) &amp; String/Date Functions
        </h2>

        <CodeBlock language="sql" title="CASE WHEN Example">
{`-- Students ko grades assign karna
SELECT name, marks,
    CASE 
        WHEN marks >= 90 THEN 'A+ (Outstanding)'
        WHEN marks >= 75 THEN 'A (First Division)'
        WHEN marks >= 60 THEN 'B (Second Division)'
        ELSE 'Fail'
    END AS result_status
FROM students;`}
        </CodeBlock>

        <CodeBlock language="sql" title="Useful Built-in Functions">
{`-- String Functions
SELECT UPPER(name), LOWER(city), LENGTH(name), CONCAT(name, ' - ', city) FROM students;

-- Date Functions
SELECT NOW(), CURDATE(), DATEDIFF(CURDATE(), '2024-01-01');

-- NULL handling: COALESCE (Pehli non-null value return karta hai)
SELECT name, COALESCE(phone_number, email, 'No Contact Available') AS contact_info
FROM students;`}
        </CodeBlock>
      </section>

      {/* 6. Top 5 Intermediate Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4">
          💡 Top 5 Intermediate Interview Questions
        </h2>

        <div className="qa-block">
          <div className="qa-question">
            Q1: Second Highest Salary nikalne ki SQL Query likho (TCS / Infosys Favourite!)
          </div>
          <div className="qa-answer">
            <p className="text-sm text-slate-300 mb-2">Do best tareeqe hain:</p>
            <div className="space-y-2">
              <p className="text-xs text-blue-400 font-mono">Tareeka 1: LIMIT aur OFFSET se (Simple):</p>
              <pre className="bg-slate-900 p-2 rounded text-xs text-slate-200">
{`SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;`}
              </pre>
              <p className="text-xs text-blue-400 font-mono">Tareeka 2: Subquery se (Universal RDBMS):</p>
              <pre className="bg-slate-900 p-2 rounded text-xs text-slate-200">
{`SELECT MAX(salary) FROM employees 
WHERE salary < (SELECT MAX(salary) FROM employees);`}
              </pre>
            </div>
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q2: UNION aur UNION ALL mein kya antar hai?
          </div>
          <div className="qa-answer">
            <strong>UNION:</strong> Do queries ke result ko jodta hai aur duplicates ko <strong>remove</strong> karta hai (isliye slow hota hai).
            <br />
            <strong>UNION ALL:</strong> Do queries ke result ko bina duplicates check kiye jod deta hai (isliye fast hota hai).
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q3: View kya hota hai aur iska fayda kya hai?
          </div>
          <div className="qa-answer">
            View ek <strong>Virtual Table</strong> hoti hai jo ek SQL query ke result pe based hoti hai. Ye memory mein actual data store nahi karti.
            <br />
            <strong>Fayda:</strong> Security (complex data ya sensitive columns hide karna) aur reusability (baar baar lamba join likhne se bachte hain).
            <br />
            <code>CREATE VIEW topper_students AS SELECT name, marks FROM students WHERE marks &gt; 90;</code>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-700">
        <Link href="/sql-basics" className="text-sm text-slate-400 hover:text-white">
          ← SQL Basics Wapas Dekho
        </Link>
        <Link 
          href="/sql-advanced"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-sm"
        >
          SQL Advanced Padho →
        </Link>
      </div>
    </div>
  );
}
