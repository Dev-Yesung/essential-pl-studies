<html>
<center>
    <h1>
        <?php
        // If-Else Statement
        // 기존의 프로그래밍 언어와 별 다를 바 없음
        // if-elseif-else 도 별반 다를 바 없음
        $first_name = "Jonson";
        if ($first_name != "") {
            echo "Hello " . $first_name . "! How are you?";
        } else {
            echo "You're not Person! Who are you?";
        }

        echo "<br>";

        $fav_number = 8;
        $num_2 = 5;
        if ($fav_number > 10) {
            echo $fav_number . " is greater than 10";
        } elseif ($num_2 == 5) {
            echo $fav_number . " is less than 10";
        } else {
            echo $fav_number . " is less than 10";
        }

        ?>
    </h1>
</center>
</html>
