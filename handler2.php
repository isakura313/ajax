<?php
$db = mysqli_connect("localhost", "root", "", "10_09");
mysqli_set_charset($db, "utf8");
// if($_GET['sort']=="DESC"){
//     $sql = "SELECT * FROM words ORDER BY price DESC";
//     $result = mysqli_query($db, $sql);
//     while ($row = $result->fetch_assoc()){
//         echo $row["translate"];
//         echo "<br>";
//         echo $row["price"];
//         echo "<br>";
//         for ($i=0; $i < $row["rating"] ; $i++) { 
//             echo "⭐";
//         }
//         echo "<br>";
//     } 
// }
if($_GET['sort']=="ASC"){
    $sql = "SELECT * FROM words ORDER BY price ASC";
    $json_data = ["Tags"=>[], "Img"=>[], "Price"=>[], "Rating"=>[]];
    $result = mysqli_query($db, $sql);
    while ($row = $result->fetch_assoc()){
        array_push($json_data["Tags"], $row["tags"]);
        array_push($json_data["Img"], $row["img"]);
        array_push($json_data["Price"], $row["price"]);
        array_push($json_data["Rating"], $row["rating"]);
    } 
    $final_info = json_encode($json_data, JSON_UNESCAPED_UNICODE);
    echo "$final_info";
    $decode_info = json_decode($final_info, JSON_UNESCAPED_UNICODE);
    // print_r($decode_info);

}
?>