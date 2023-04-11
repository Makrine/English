<?php
    $servername = "sql7.freemysqlhosting.net";
    $username = "sql7612382";
    $password = "QBPu95m1Ju";
    $dbname = "sql7612382";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Run query to retrieve data
    $sql = "SELECT * FROM EnglishLearning";
    $result = $conn->query($sql);

    // Convert result to JSON
    $data = array();
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);

    // Close connection
    $conn->close();
?>
