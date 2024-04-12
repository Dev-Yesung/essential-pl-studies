<html>
<center>
    <h1>
        <?php
        // array() 를 통해 배열을 만들 수 있다.
        // 스크립트 언어에서 많이 볼 수 있듯이 배열에 여러 타입의 데이터를 넣을 수 있다.
        $her_name = "Maggie";
        $first_names = array("John", "Steve", "Mary", 42, $her_name);
        // 다른 언어들과 똑같이 index를 통해 접근
        echo $first_names[0] . "<br>";
        echo $first_names[1] . "<br>";
        echo $first_names[2] . "<br>";
        // string이 아닌 Integer 타입의 데이터 출력
        echo $first_names[3] . "<br>";
        // 연산자도 가능
        echo ++$first_names[3] . "<br>";

        // 다차원 배열 선언
        $last_names = array("Elder", "Smith", "Poppins");
        // 동적 배열이기 때문에 인덱스마다 배열의 크기를 다르게 만들어서 넣을 수도 있음
        $multi_array = array($first_names, $last_names);
        // 2차원 배열의 원소에 접근하는건 다른 언어와 같음
        echo $multi_array[1][1] . " " . $multi_array[0][1];
        ?>
    </h1>
</center>
</html>
