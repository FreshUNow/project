<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>FreshU</title>
  <base href="./">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="styles.css"></head>
<body>
  <app-root></app-root>
<script src="runtime-es2015.js" type="module"></script><script src="polyfills-es2015.js" type="module"></script><script src="runtime-es5.js" nomodule></script><script src="polyfills-es5.js" nomodule></script><script src="vendor-es2015.js" type="module"></script><script src="main-es2015.js" type="module"></script><script src="vendor-es5.js" nomodule></script><script src="main-es5.js" nomodule></script></body>

<script>
  (function(l) {
    const nonHomeUrls = ['/about'];
    for (let i = 0; i < nonHomeUrls.length; i++) {
      const urlRegex = new RegExp(nonHomeUrls[i], 'i');
      const verifyUrl = urlRegex.test(l.pathname);
      if (verifyUrl) {
        return;
      }
    }

    if (l.search) {
      var q = {};
      l.search.slice(1).split('&').forEach(function(v) {
        var a = v.split('=');
        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
      });
      if (q.p !== undefined) {
        window.history.replaceState(null, null,
                l.pathname.slice(0, -1) + (q.p || '') +
                (q.q ? ('?' + q.q) : '') +
                l.hash
        );
      }
    }
  }(window.location));
</script>
</html>
