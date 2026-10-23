import React from "react";
import Link from "next/link";
import CodeBlock from "@/components/CodeBlock";

export default function SqlBasicsPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <div className="border-b border-slate-700 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="topic-tag sql">SQL MODULE 1</span>
          <span className="difficulty-badge easy">BEGINNER / ZERO LEVEL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          SQL Basics: Zero Se Hero Tak 🟢
        </h1>
        <p className="text-slate-400 mt-2 text-base">
          Agar tune aaj tak database ka &apos;D&apos; bhi nahi dekha hai, toh tension mat le. 
          Real-life examples ke saath step-by-step samjhenge ki SQL kya hai, Table kaise banti hai, aur queries kaise likhte hain.
        </p>
      </div>

      {/* 1. Database kya hota hai? */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-4">
          1. Database Kya Hota Hai? (Asal Zindagi Ka Example)
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Socho school mein principal ke paas ek register hota hai jisme har student ka Roll No, Naam, Phone Number, aur Fees status likha hota hai. 
          Agar 50 students hain, toh diary ya Excel sheet mein kaam chal jata hai.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          Lekin ab socho <strong>Amazon, Swiggy, ya Instagram</strong> ke baare mein! Wahan lakho-crores users har second order kar rahe hain aur photos upload kar rahe hain. 
          Excel sheet toh 10 lakh rows par hi crash ho jayegi!
        </p>
        <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-700 mb-4">
          <p className="text-blue-400 font-semibold mb-1">💡 Definition (Interview Friendly):</p>
          <p className="text-slate-300 text-sm">
            <strong>Database</strong> ek organized collection of data hota hai, jahan data ko systematically store, manage, update aur retrieve (search) kiya ja sake safely and fast.
          </p>
        </div>
      </section>

      {/* 2. SQL aur RDBMS kya hai? */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-4">
          2. SQL &amp; RDBMS Kya Cheez Hai?
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-blue-400 mb-2">RDBMS Kya Hai?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong>Relational Database Management System</strong>. Ye ek software hai jo tables ke format mein data rakhta hai. 
              Do tables ke beech mein <em>Relation (Relationship)</em> hota hai (jaise Student table aur Course table).
              <br /><br />
              <strong>Top Examples:</strong> MySQL, PostgreSQL, Oracle, Microsoft SQL Server, SQLite.
            </p>
          </div>
          <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-700">
            <h3 className="text-lg font-bold text-green-400 mb-2">SQL Kya Hai?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong>Structured Query Language</strong>. Ye wo bhasha (language) hai jo hum RDBMS se baat karne ke liye use karte hain.
              <br /><br />
              Jaise hum waiter se bolte hain: <em>&quot;Bhaiya 1 paneer butter masala lana&quot;</em>, waise hi database ko bolte hain: 
              <code className="text-blue-300 block mt-2 bg-slate-950 p-2 rounded">SELECT * FROM students WHERE marks &gt; 80;</code>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Table Structure */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-4">
          3. Table, Row, Column &amp; Primary Key
        </h2>
        <p className="text-slate-300 mb-4">
          Database mein data hamesha <strong>Table</strong> ke andar rows (horizontal) aur columns (vertical) mein hota hai.
        </p>

        <div className="overflow-x-auto my-4">
          <table className="data-table">
            <thead>
              <tr>
                <th>id (PK)</th>
                <th>name</th>
                <th>age</th>
                <th>city</th>
                <th>marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-blue-400 font-bold">101</td>
                <td>Rahul Sharma</td>
                <td>20</td>
                <td>Delhi</td>
                <td>88</td>
              </tr>
              <tr>
                <td className="text-blue-400 font-bold">102</td>
                <td>Priya Singh</td>
                <td>21</td>
                <td>Bangalore</td>
                <td>95</td>
              </tr>
              <tr>
                <td className="text-blue-400 font-bold">103</td>
                <td>Aman Verma</td>
                <td>20</td>
                <td>Mumbai</td>
                <td>72</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="space-y-2 text-slate-300 text-sm mt-4">
          <li>🔹 <strong>Row / Record / Tuple:</strong> Ek horizontal line jo ek student ka complete data batati hai.</li>
          <li>🔹 <strong>Column / Field / Attribute:</strong> Ek vertical property jaise &apos;city&apos; ya &apos;marks&apos;.</li>
          <li>🔹 <strong>Primary Key (PK):</strong> Ek aisi unique column jo har row ko pehchanne mein help kare (jaise Aadhar number ya Roll no). Ye kabhi <strong>NULL</strong> ya <strong>Duplicate</strong> nahi ho sakti!</li>
          <li>🔹 <strong>Foreign Key (FK):</strong> Ek table ki PK jab doosri table mein refer hoti hai relationship banane ke liye.</li>
        </ul>
      </section>

      {/* 4. SQL Data Types */}
      <section className="concept-card">
        <h2 className="text-2xl font-bold text-white mb-4">
          4. Common SQL Data Types
        </h2>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Data Type</th>
                <th>Kab Use Kare?</th>
                <th>Real Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-purple-400">INT</td>
                <td>Poora number (bina decimal)</td>
                <td>age, roll_number, quantity (e.g. 21, 100)</td>
              </tr>
              <tr>
                <td className="font-mono text-purple-400">VARCHAR(n)</td>
                <td>Variable length text (limit n characters)</td>
                <td>name VARCHAR(50), email VARCHAR(100)</td>
              </tr>
              <tr>
                <td className="font-mono text-purple-400">CHAR(n)</td>
                <td>Fixed length text (exact n spaces)</td>
                <td>pincode CHAR(6), country_code CHAR(2)</td>
              </tr>
              <tr>
                <td className="font-mono text-purple-400">DECIMAL(p,s) / FLOAT</td>
                <td>Numbers with point / paise</td>
                <td>salary DECIMAL(10,2) -&gt; 95000.50</td>
              </tr>
              <tr>
                <td className="font-mono text-purple-400">DATE / DATETIME</td>
                <td>Tareekh aur Samay</td>
                <td>dob DATE (&apos;2003-05-15&apos;), created_at</td>
              </tr>
              <tr>
                <td className="font-mono text-purple-400">BOOLEAN</td>
                <td>True ya False (1 ya 0)</td>
                <td>is_active, is_graduated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. DDL: Create Database & Create Table */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          5. Database Aur Table Banana (CREATE TABLE)
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Pehle ek container (Database) banayenge, phir uske andar Table banayenge. Constraints (rules) bhi lagayenge!
        </p>

        <CodeBlock language="sql" title="Create DB & Table with Constraints">
{`-- Step 1: Database banao aur usko select karo
CREATE DATABASE college_db;
USE college_db;

-- Step 2: Students table banao with proper constraints
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,  -- Har student ko auto naya ID milega
    name VARCHAR(50) NOT NULL,          -- Naam khali (NULL) nahi ho sakta
    email VARCHAR(100) UNIQUE,          -- Ek email sirf ek student ki ho sakti hai
    age INT CHECK (age >= 16),          -- Rule: Age 16 ya usse badi honi chahiye
    city VARCHAR(30) DEFAULT 'Delhi',   -- Agar city nahi di toh Delhi manenge
    marks DECIMAL(5,2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
        </CodeBlock>

        <div className="bg-slate-900/60 p-3 rounded border border-slate-700 text-xs text-slate-300 space-y-1">
          <p>🔑 <strong>NOT NULL:</strong> Field khali chhodna mana hai.</p>
          <p>🔑 <strong>UNIQUE:</strong> Duplicate entry allowed nahi hai.</p>
          <p>🔑 <strong>CHECK:</strong> Ek condition verify karta hai row insert hone se pehle.</p>
          <p>🔑 <strong>DEFAULT:</strong> Agar user ne value nahi di, toh default value baith jayegi.</p>
        </div>
      </section>

      {/* 6. DML: INSERT, SELECT, WHERE */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          6. Data Dalna Aur Dekhna (INSERT &amp; SELECT)
        </h2>
        
        <h3 className="text-lg font-semibold text-blue-400 mt-4 mb-2">A. INSERT INTO (Data Dalna)</h3>
        <CodeBlock language="sql" title="Inserting Rows">
{`-- Ek row insert karna:
INSERT INTO students (name, email, age, city, marks)
VALUES ('Rohan Raj', 'rohan@example.com', 21, 'Patna', 89.50);

-- Ek sath multiple rows insert karna (Fast approach):
INSERT INTO students (name, email, age, city, marks) VALUES
('Sneha Roy', 'sneha@example.com', 22, 'Kolkata', 94.00),
('Vikas Gupta', 'vikas@gmail.com', 20, 'Delhi', 65.00),
('Ananya Sen', 'ananya@yahoo.com', 21, 'Mumbai', 78.50),
('Kabir Khan', 'kabir@outlook.com', 23, 'Delhi', 91.00);`}
        </CodeBlock>

        <h3 className="text-lg font-semibold text-blue-400 mt-6 mb-2">B. SELECT (Data Nikalna / Read Karna)</h3>
        <CodeBlock language="sql" title="Basic SELECT Queries">
{`-- 1. Poora data dekhna (All columns and all rows)
SELECT * FROM students;

-- 2. Sirf specific columns dekhna (Good for performance)
SELECT name, marks, city FROM students;

-- 3. Column alias (Naam change karke print karna)
SELECT name AS student_name, marks * 1.1 AS bonus_marks FROM students;

-- 4. Unique cities dekhna (Duplicate hatana)
SELECT DISTINCT city FROM students;`}
        </CodeBlock>
      </section>

      {/* 7. WHERE Clause */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          7. WHERE Clause (Filter Lagana) 🎯
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Agar tumhe sabhi students nahi chahiye, sirf wahi chahiye jo Delhi ke hain ya jinke marks 80 se zyada hain, toh <code>WHERE</code> lagate hain.
        </p>

        <CodeBlock language="sql" title="Mastering WHERE Clause Operators">
{`-- Comparison operators (=, !=, >, <, >=, <=)
SELECT * FROM students WHERE marks >= 80;
SELECT * FROM students WHERE city != 'Delhi';

-- Multiple conditions: AND, OR, NOT
SELECT * FROM students WHERE city = 'Delhi' AND marks > 80;
SELECT * FROM students WHERE city = 'Mumbai' OR city = 'Patna';

-- Range check: BETWEEN (inclusive)
SELECT * FROM students WHERE marks BETWEEN 70 AND 90;

-- List check: IN aur NOT IN
SELECT * FROM students WHERE city IN ('Delhi', 'Kolkata', 'Pune');

-- Pattern matching: LIKE (% means any characters, _ means exactly one character)
SELECT * FROM students WHERE name LIKE 'R%';     -- Naam 'R' se start ho
SELECT * FROM students WHERE email LIKE '%@gmail.com'; -- Sirf gmail wale
SELECT * FROM students WHERE name LIKE '_o%';    -- Second letter 'o' ho (Rohan)

-- Check for Empty/Null
SELECT * FROM students WHERE email IS NULL;
SELECT * FROM students WHERE email IS NOT NULL;`}
        </CodeBlock>
      </section>

      {/* 8. UPDATE & DELETE */}
      <section className="concept-card warning">
        <h2 className="text-2xl font-bold text-red-400 mb-2">
          8. UPDATE &amp; DELETE (Dhyaan Se Use Karo! ⚠️)
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          <strong>Golden Rule of SQL:</strong> Kabhi bhi bina <code>WHERE</code> clause ke UPDATE ya DELETE mat chalana, warna poore production database ka data tabah ho jayega!
        </p>

        <CodeBlock language="sql" title="Safe Updates and Deletes">
{`-- Sahi tareeka: Hamesha ID ya specific condition do!
UPDATE students 
SET marks = 95.00, city = 'Bangalore' 
WHERE id = 101;

-- ❌ KHATARNAK MISTAKE (Isse sabka marks 100 ho jayega!):
-- UPDATE students SET marks = 100;

-- Safe Delete:
DELETE FROM students 
WHERE id = 103;

-- ❌ KHATARNAK MISTAKE (Poori table khali ho jayegi!):
-- DELETE FROM students;`}
        </CodeBlock>

        <div className="mt-4 p-4 bg-slate-900 rounded-lg border border-red-500/30 text-sm text-slate-300">
          <p className="font-bold text-red-400 mb-2">🔥 Interview Question: DELETE vs TRUNCATE vs DROP mein kya difference hai?</p>
          <ul className="space-y-1">
            <li>• <strong>DELETE:</strong> DML command hai. Row by row delete karta hai. WHERE lag sakta hai. Rollback (undo) ho sakta hai. Slow hota hai.</li>
            <li>• <strong>TRUNCATE:</strong> DDL command hai. Table ka saara data ek jhatke mein uda deta hai, structure rehta hai. Fast hota hai, WHERE nahi lagta.</li>
            <li>• <strong>DROP:</strong> DDL command hai. Table ka structure + data + index sab kuch memory se hamesha ke liye delete kar deta hai.</li>
          </ul>
        </div>
      </section>

      {/* 9. Sorting & Pagination */}
      <section className="concept-card sql">
        <h2 className="text-2xl font-bold text-white mb-2">
          9. Sorting &amp; Pagination (ORDER BY &amp; LIMIT)
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          Leaderboard banana ho ya Google jaisa Page 1, Page 2 result dikhana ho.
        </p>

        <CodeBlock language="sql" title="Ordering and Limiting Results">
{`-- Highest marks pehle chahiye (Descending)
SELECT * FROM students 
ORDER BY marks DESC;

-- Multiple sorting: Pehle city alphabetical, phir highest marks
SELECT * FROM students 
ORDER BY city ASC, marks DESC;

-- LIMIT: Top 3 toppers chahiye
SELECT * FROM students 
ORDER BY marks DESC 
LIMIT 3;

-- Pagination: OFFSET (skip) and LIMIT
-- Page 1: Pehle 5 records
SELECT * FROM students LIMIT 5 OFFSET 0;

-- Page 2: Agle 5 records (skip first 5)
SELECT * FROM students LIMIT 5 OFFSET 5;`}
        </CodeBlock>
      </section>

      {/* 10. Top Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4">
          💡 Top 10 SQL Basics Interview Questions &amp; Answers
        </h2>

        <div className="qa-block">
          <div className="qa-question">
            Q1: DBMS aur RDBMS mein kya farak hai?
          </div>
          <div className="qa-answer">
            <strong>DBMS (Database Management System):</strong> Data ko file system format mein store karta hai, tables ke beech koi relation nahi hota (jaise XML, File system). No data integrity rules.
            <br />
            <strong>RDBMS (Relational DBMS):</strong> Data tables (rows &amp; columns) ke roop mein store hota hai. Primary Key &amp; Foreign key se relationships bante hain. ACID properties follow hoti hain (jaise MySQL, Postgres).
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q2: Primary Key aur Unique Key mein kya antar hai?
          </div>
          <div className="qa-answer">
            1. Ek table mein sirf <strong>EK hi Primary Key</strong> ho sakti hai, jabki <strong>multiple Unique Keys</strong> ho sakti hain.
            <br />
            2. Primary key column mein <strong>kabhi bhi NULL value nahi</strong> ho sakti. Unique key mein ek (ya database ke hisab se) NULL value allow hoti hai.
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q3: SQL Commands ke types (DDL, DML, DCL, TCL) kya hain?
          </div>
          <div className="qa-answer">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>DDL (Data Definition Language):</strong> Structure banane ya badalne ke liye (CREATE, ALTER, DROP, TRUNCATE).</li>
              <li><strong>DML (Data Manipulation Language):</strong> Data ke sath chedchad ke liye (SELECT, INSERT, UPDATE, DELETE).</li>
              <li><strong>DCL (Data Control Language):</strong> Permissions ke liye (GRANT, REVOKE).</li>
              <li><strong>TCL (Transaction Control Language):</strong> Commit aur rollback ke liye (COMMIT, ROLLBACK, SAVEPOINT).</li>
            </ul>
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q4: NULL value kya hoti hai? Kya NULL = 0 ya NULL = &apos;&apos; hota hai?
          </div>
          <div className="qa-answer">
            Nahi! <strong>NULL ka matlab hota hai &apos;Unknown&apos; ya &apos;Missing Data&apos;</strong>. 
            0 ek number hai aur empty string (&apos;&apos;) ek text hai. NULL in dono se alag hai.
            Isi wajah se SQL mein <code>marks = NULL</code> nahi likhte, balki <code>marks IS NULL</code> likha jata hai!
          </div>
        </div>

        <div className="qa-block">
          <div className="qa-question">
            Q5: Query: Wo students find karo jinka naam &apos;A&apos; se start hota hai aur marks 75 se zyada hain.
          </div>
          <div className="qa-answer">
            <pre className="bg-slate-900 p-2 rounded text-blue-300 font-mono text-xs">
{`SELECT * FROM students 
WHERE name LIKE 'A%' AND marks > 75;`}
            </pre>
          </div>
        </div>
      </section>

      {/* Next Step Banner */}
      <div className="concept-card tip mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-amber-300">Basic clear ho gaya?</h3>
          <p className="text-slate-300 text-sm">Ab intermediate level pe chalo jahan JOINs aur GROUP BY seekhenge!</p>
        </div>
        <Link 
          href="/sql-intermediate"
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition-all text-sm whitespace-nowrap"
        >
          SQL Intermediate Padho →
        </Link>
      </div>
    </div>
  );
}
