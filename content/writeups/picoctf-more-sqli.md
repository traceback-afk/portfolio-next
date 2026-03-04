---
title: 'picoCTF More SQLi'
date: 2026-02-08
description: "This writeup covers my solution to picoCTF's More SQLi challenge."
author: 'Khashayar Khosrosourmi'
image:
    url: '/writeups/picoctf-more-sqli/thumbnail.png'
    alt: 'picoctf more sqli thumbnail'

tags: ["ctf", "sql injection"]
---

## Challenge Description
Can you find the flag on this website. Try to find the flag here.

![picoctf More SQLi screenshot](/writeups/picoctf-more-sqli/Screenshot1.png)

## Hint 1

SQLiLite

## Solution
In this challenge, the objective is to log in as the admin to retrieve the flag.

![picoctf More SQLi screenshot](/writeups/picoctf-more-sqli/Screenshot2.png)

First I used burp suite proxy to send the login request to repeater. Then tried to login as the admin with an arbitrary password to see what happens.

![picoctf More SQLi screenshot](/writeups/picoctf-more-sqli/Screenshot3.png)

The response indicates that the application uses this SQL statement for login:

```sql

SELECT id
FROM users
WHERE password = '' AND username = '';
```
First, I tried to comment out the rest of the statement after `password=''`:

![picoctf More SQLi screenshot](/writeups/picoctf-more-sqli/Screenshot4.png)

![picoctf More SQLi screenshot](/writeups/picoctf-more-sqli/Screenshot5.png)

It was successful, and the response indicates that there is no user with the password `1234`.
Then I injected an `OR` condition (`1=1`) that always evaluates to true. This manipulates the SQL query so that the `WHERE` clause becomes true regardless of the original password check, allowing authentication to succeed.

![picoctf More SQLi screenshot](/writeups/picoctf-more-sqli/Screenshot6.png)

The method was successful and I retrieved the flag.

## Mitigation

To mitigate this vulnerability, the application must never concatenate user input directly in the SQL query string. Instead it must use parameterized queries so the database treats the username and password as data, not as executable SQL.

### Example of vulnerable string concatenation (Python):
```python

username = request.form["username"]
password = request.form["password"]

query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
cursor.execute(query)
```

### Secure parameterized query:

```python

username = request.form["username"]
password = request.form["password"]

cursor.execute(
    "SELECT * FROM users WHERE username=%s AND password=%s",
    (username, password)
)
```
