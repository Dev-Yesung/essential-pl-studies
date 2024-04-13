<html lang="ko">
<head>
    <title>string concatenation</title>
</head>
<body>
<h1>
    <?php
    // 문자열 합치기
    $first_name = "예성";
    $last_name = "고";
    $first_number = 41;
    $second_number = 12;
    ?>
</h1>
<h1>
    <?php
    // php 에서 문자열 합칠 때는 마침표
    echo $first_name . $last_name . "<br>";
    ?>
</h1>
<h2>
    <?php
    echo $first_name . " " . $last_name . "<br>";
    echo $first_number . " " . $second_number;
    ?>
</h2>
</body>
</html>
