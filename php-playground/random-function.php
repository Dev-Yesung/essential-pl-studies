<html>
<center>
    <h1>
        <?php
        // random function
        echo rand(-100, 100);
        echo "<br>";
        echo mt_rand(-100, 100);
        echo "<br>";
        $names = array("John", "Steve", "Mary", "Jane");
        echo $names[mt_rand(0, sizeof($names) - 1)];
        ?>
    </h1>
</center>
</html>
