<html>
<center>
    <h1>
        <?php
        // foreach loop
        $names = array("John Doe", "Jane Doe", "Jin Doe", "James Doe", "Steve Doe");
        // foreach 에서 사용하려는 변수의 이름이 as 다음에 오게 된다.
        foreach ($names as $name) {
            echo "name is $name <br>";
        }
        echo "<br><br>";

        // 위의 로직과 아래의 로직은 같음
        $count = 0;
        while ($count < count($names)) {
            echo "name is $names[$count] <br>";
            $count++;
        }
        ?>
    </h1>
</center>
</html>
