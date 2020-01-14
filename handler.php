<?php
$db = mysqli_connect("localhost", "root", "", "10_09");
mysqli_set_charset($db, "utf8");

$sql = "SELECT * FROM words WHERE words='{$_GET['word']}'";
$result = mysqli_query($db, $sql);
while ($row = $result->fetch_assoc()){
    echo "<h1> Был получен перевод </h1>";
    echo $row["translate"];
    echo "<br>";
    echo $row["price"];
    echo "<br>";
    // echo $row["rating"];
    for ($i=0; $i < $row["rating"] ; $i++) { 
        echo "⭐";
    }
} 
?>