<html>
<center>
    <h1>
        <?php
        // Arrays - Associative
        // 자바의 HashMap, 파이썬의 dictionary 와 같은 자료구조이다.
        // php에서는  => 를 hash rocket이라고 부른다.
        $fav_pizza = array(
            "John" => "Pepperoni",
            "Steve" => "Cheese",
            "Mary" => "Mushroom",
        );

        // Array의 인덱스로 접근하듯이 key를 괄호안에 넣으면 된다.
        echo $fav_pizza["John"] . "<br>";
        echo $fav_pizza["Steve"] . "<br>";
        echo $fav_pizza["Mary"] . "<br>";
        ?>
    </h1>
</center>
</html>
