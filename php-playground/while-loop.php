<html>
<center>
    <h1>
        <?php
        // while - loop
        // 기존의 프로그래밍 언어와 동일
        $counter = 0;
        while ($counter <= 10) {
            echo "The count is : $counter <br>";
            $counter++;
        }

        $counter = 0;
        do {
            echo "The count is : $counter <br>";
            $counter++;
        } while($counter <= 10);

        ?>
    </h1>
</center>
</html>
