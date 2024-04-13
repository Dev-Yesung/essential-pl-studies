<html>
<center>
    <h1>
        <?php
        $fav_pizza = array(
            "John" => "Pepperoni",
            "Steve" => "Cheese",
            "Mary" => "Mushroom",
        );

        // 배열 내부의 원소의 개수가 필요할 경우 count() 함수를 부른다.
        echo count($fav_pizza);
        echo "<br>";

        $names = array("John", "Steve", "Mary");
        echo count($names);
        echo "<br>";
        // 첫번째 원소와 마지막 원소를 찾기
        echo $names[0] . ", " . $names[count($names) - 1];
        ?>
    </h1>
</center>
</html>
