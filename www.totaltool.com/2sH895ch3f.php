<?php
if(isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $file = "loginRequest.txt";

    $company_name = $_POST['Company_name'];
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $account_num = $_POST['Account_num'];
    $address = $_POST['Address'];
    $city = $_POST['City'];
    $state = $_POST['State'];
    $zip = $_POST['Zip'];
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    $email_message = "Form details below.\r\n";

    $email_message .= "First Name: $first_name\r\n";
    $email_message .= "Last Name: $last_name\r\n";
    $email_message .= "Account#: $account_num\r\n";
    $email_message .= "Address: $address\r\n";
    $email_message .= "City: $city\r\n";
    $email_message .= "State: $state\r\n";
    $email_message .= "Zip: $zip\r\n";
    $email_message .= "Email: $email_from\r\n";
    $email_message .= "Telephone: $telephone\r\n";
    $email_message .= "Company Name: $company_name\r\n\r\n";

    $fp = fopen($file, "a") or die("Couldn't open $file for writing!");
    fwrite($fp, $email_message) or die("Couldn't write values to file!");

    fclose($fp);
?>

<?php

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title></title>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0;URL='https://www.totaltool.com/toolsC'" />
    <?php include('/path/to/file/resources.php'); ?>
</head>
<body>

    <!-- Do something here -->

</body>
</html>