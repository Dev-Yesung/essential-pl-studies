<html>
<center>
    <h1>
        <?php
        // 코틀린처럼 시그니처 끝 부분에 리턴 타입을 지정할 수 있다.
        function helloThere(): void
        {
            echo "Hello There! <br>";
        }

        function helloName($name): void
        {
            echo "Hello $name! <br>";
        }

        function helloFirstLastName($first_name, $last_name): void
        {
            echo "Hello $first_name, $last_name! <br>";
        }

        function helloArray($array): int
        {
            $total = 0;
            foreach ($array as $number) {
                $total += $number;
            }

            return $total;
        }

        helloThere();
        helloName("John Doe");
        helloName("Bob");
        helloFirstLastName("John", "Jonny");
        $numbers = array(1, 2, 3, 4, 5, 6, 7, 8, 9);
        echo "total is " . helloArray($numbers);

        ?>
    </h1>
</center>
</html>
