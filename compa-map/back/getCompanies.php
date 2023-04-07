<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header('Content-Type: application/json');

require ('config/autoload.php');

$companiesManager = new Companies;

$companiesFromDb = $companiesManager->getCompanies();
$companiesToSend = array();
foreach($companiesFromDb as $company)
{
    $companyTosend = array(
        'id' => (int)$company->id_company, 
        'name' => $company->name,
        'description' => $company->description,
        'contact' => array(
            'phone' => (float)$company->phone,
            'mail' => $company->mail,
            'website' => $company->website
        ),
        'coordinates' => array(
            'longitude' => (float)$company->longitude,
            'latitude' => (float)$company->latitude
        ),
        'address' => array(
            'country' => $company->country,
            'city' => $company->city,
            'postalCode' => $company->postal_code,
            'street' => $company->street
        )
        );
    
       array_push($companiesToSend, $companyTosend);
}

echo json_encode($companiesToSend);