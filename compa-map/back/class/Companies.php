<?php 

    class Companies extends Db{

        private $getCompaniesQuery = "SELECT * FROM t_companies";
        private $setCompanyQuery = "INSERT INTO 
                                        t_companies 
                                            (name, description, phone, mail, website, country, city, postal_code, street, longitude, latitude)
                                     VALUES 
                                            (:name, :description, :phone, :mail, :website, :country, :city, :postal_code, :street, :longitude, :latitude)";

        public function getCompanies()
        {
            $prepGetCompaniesQuery = $this->db->prepare($this->getCompaniesQuery);
            $prepGetCompaniesQuery->execute();

            if ($prepGetCompaniesQuery->rowCount() > 0) {
                return $prepGetCompaniesQuery->fetchAll(PDO::FETCH_OBJ);
            }
        }

        public function setCompany($company)
        {
            $prepSetCompanyQuery = $this->db->prepare($this->setCompanyQuery);
            $prepSetCompanyQuery->bindValue('name', $company->name);
            $prepSetCompanyQuery->bindValue('description', $company->description);
            $prepSetCompanyQuery->bindValue('phone', $company->phone, PDO::PARAM_INT);
            $prepSetCompanyQuery->bindValue('mail', $company->mail);
            $prepSetCompanyQuery->bindValue('website', $company->website);
            $prepSetCompanyQuery->bindValue('country', $company->country);
            $prepSetCompanyQuery->bindValue('city', $company->city);
            $prepSetCompanyQuery->bindValue('postal_code', $company->postal_code, PDO::PARAM_INT);
            $prepSetCompanyQuery->bindValue('street', $company->street);
            $prepSetCompanyQuery->bindValue('longitude', $company->longitude);
            $prepSetCompanyQuery->bindValue('latitude', $company->latitude);

            $prepSetCompanyQuery->execute(array(
                ':name' => $company->name,
                ':description' => $company->description,
                ':phone' => $company->phone,
                ':mail' => $company->mail,
                ':website' => $company->website,
                ':country' => $company->country,
                ':city' => $company->city,
                ':postal_code' => $company->postal_code,
                ':street' => $company->street,
                ':longitude' => $company->longitude,
                ':latitude' => $company->latitude
            ));

            if ($prepSetCompanyQuery->rowCount() > 0) {
                return true;
            }
        }
    }