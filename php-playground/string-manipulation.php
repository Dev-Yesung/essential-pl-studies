<html>
<center>
    <h1>
        <?php
        // str_replace(OLD, NEW, DATA);
        $stuff = "John Elder is a PHP Coding Monster";
        $monster = "Monster";
        $dork = "Weirdo";
        echo str_replace("Monster", "Dumb", $stuff);
        echo "<br>";
        echo str_replace($monster, $dork, $stuff);
        echo "<br>";

        // strtoupper(string), strtolower(string)
        echo strtoupper($stuff);
        echo "<br>";
        echo strtolower($stuff);
        echo "<br>";

        // ucfirst(), lcfirst()
        echo ucfirst($stuff);
        echo "<br>";
        echo lcfirst($stuff);
        echo "<br>";

        // strlen()
        echo strlen($stuff);
        echo "<br>";

        // str_shuffle()
        echo str_shuffle($stuff);
        echo "<br>";

        //

        ?>
    </h1>
</center>
</html>
