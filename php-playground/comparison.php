<?php
// 비교연산자
/*
    ==, !=, >, <, >=, <=
    일반적인 프로래밍 언어들과 동일한 비교 연산자이다.
 */

$num_1 = 41;
$num_2 = 4;
var_dump($num_1 == $num_2);
echo "<br>";
var_dump($num_1 < $num_2);
echo "<br>";
var_dump($num_1 > $num_2);
echo "<br>";
$num_2 = 41;
var_dump($num_1 <= $num_2);
echo "<br>";

// php의 문자열은 동일성 검사시 대소문자를 구분한다.
$first_name = "John";
var_dump($first_name == "john");
echo "<br>";

?>
