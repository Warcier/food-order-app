<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

// Handle the order submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process the order and save it in the database
    // ...

    // Redirect to the order history page
    header("Location: order_history.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Place an Order</title>
</head>
<body>
    <h1>Place an Order</h1>

    <form method="POST" action="">
        <!-- Order form fields -->
        <!-- ... -->

        <input type="submit" value="Place Order">
    </form>

    <a href="index.php">Back to Homepage</a>
</body>
</html>