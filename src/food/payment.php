<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

// Handle the payment submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process the payment
    // ...

    // Redirect to the order history page
    header("Location: order_history.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Make a Payment</title>
</head>
<body>
    <h1>Make a Payment</h1>

    <form method="POST" action="">
        <!-- Payment form fields -->
        <!-- ... -->

        <input type="submit"Make Payment">
    </form>

    <a href="index.php">Back to Homepage</a>
</body>
</html>