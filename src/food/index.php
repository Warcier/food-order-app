<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Food Ordering System</title>
</head>
<body>
    <h1>Welcome, <?php echo $_SESSION['username']; ?></h1>

    <h2>Menu</h2>
    <a href="order.php">Place an Order</a>

    <h2>Order History</h2>
    <a href="order_history.php">View Order History</a>

    <h2>Payment</h2>
    <a href="payment.php">Make a Payment</a>

    <a href="logout.php">Logout</a>
</body>
</html>