<?php
include("include-function.php");
?>

<html>
<h1>
    <div style="text-align: center;">
        <?php
        // 주석은 보통 언어와 똑같습니다.
        // html 안쪽에 코드가 들어갈 수 있습니다.
        // 반대로 php 코드 안에 html이 들어갈 수도 있습니다.
        echo "Hello World!<br>";
        $first_name = "Yesung";
        $favorite_number = 41;
        $favorite_number_float = 41.33;
        $last_name = $first_name;

        echo $first_name;
        echo "<br>";
        echo $favorite_number;
        echo "<br>";
        echo $favorite_number_float;
        echo "<br>";

        ?>
    </div>
</h1>
<?php
echo "ㅋㅋㅋㅋ? 여기서도 변수 favorite_number_float($favorite_number_float) 를 출력 가능";
echo "<br>";
echo "last_name: $last_name";
?>

// 외부 파일로부터 코드를 불러온다.
// C언어의 #include, Java/JS 의 import 와 동일
<h1>
    <center>
        <?php
        // Include Function
        echo "Copyright (c) " . date("Y") . " - All Rights Reserved";
        echo "<br>";
        echo "Copyright (c) " . $blog_name . " " . date("Y") . " - All Rights Reserved";
        ?>
    </center>
</h1>
</html>
