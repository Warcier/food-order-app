<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

// Fetch the order history from the database
// ...

$orderHistory = [];  // Placeholder for order history

?>

<!DOCTYPE html>
<html>
<head>
    <title>Order History</title>
</head>
<body>
    <h1>Order History</h1>

    <?php if (!empty($orderHistory)): ?>
        <ul>
            <?php foreach ($orderHistory as $order): ?>
                <li><?php echo $order; ?></li>
            <?php endforeach; ?>
        </ul>
    <?php else: ?>
        <p>No orders found.</p>
    <?php endif; ?>

    <a href="index.php">Back to Homepage</a>
</body>
</html>