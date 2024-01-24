#!/bin/bash
 mkdir -p public/{css,js,img,page}
 touch public/js/main.js
 touch index.html
  touch public/css/style.css
 chmod 777 arbo.sh
 cat <<EOF >index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$project_name</title>
    <link rel="stylesheet" href="./public/css/style.css">
</head>
<body>

    <!-- Your HTML content goes here -->

    <script src="./public/js/main.js"></script>
</body>
</html>
EOF