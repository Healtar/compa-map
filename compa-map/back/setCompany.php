<?php
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


require ('config/autoload.php');

$companiesManager = new Companies;

$incomingCompany = json_decode(file_get_contents("php://input"));


if ($companiesManager->setCompany($incomingCompany)) {
    echo json_encode(("success"));
}
