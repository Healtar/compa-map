import { useEffect, useState } from "react";
import "./App.css";
import CompaniesList from "./components/CompaniesList";
import CompaniesMap from "./components/CompaniesMap";
import CompanyCard from "./components/CompanyCard";
import Loader from "./components/Loader";
import { Company, Companies } from "./interfaces/Company";

interface NewCoordinates {
  longitude: number;
  latitude: number;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [newCoordinates, setNewCoordinates] = useState<NewCoordinates | null>(
    null
  );
  const [viewport, setViewport] = useState({
    longitude: 6.008029573150408,
    latitude: 47.24204623335334,
    zoom: 15,
  });

  const API_URL: any = "http://localhost:8888";
  // const API_URL: any = "http://compa-map";

  const fetchApi = async () => {
    try {
      const response = await fetch(`${API_URL}/getCompanies.php`);
      const companies = await response.json();
      setCompanies(companies);
      console.log(companies);

      if (companies) {
        setIsLoading(false);
      }
    } catch (error) {
      setCompanies([]);
      setIsLoading(false);
      console.log(companies);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [newCoordinates]);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" justify-center flex items-center h-screen f-full">
          {companies.length > 0 ? (
            <section className="lg:h-4/6 lg:w-4/6 md:w-5/6 md:h-3/6 h-full w-full mx-auto flex gap-x-4 justify-center">
              <CompaniesMap
                companies={companies}
                viewport={viewport}
                setViewport={setViewport}
                selectedCompany={selectedCompany}
                setSelectedCompany={setSelectedCompany}
                newCoordinates={newCoordinates}
                setNewCoordinates={setNewCoordinates}
                API_URL={API_URL}
              />
              <CompaniesList
                companies={companies}
                viewport={viewport}
                setViewport={setViewport}
                selectedCompany={selectedCompany}
                setSelectedCompany={setSelectedCompany}
              />

              {selectedCompany ? (
                <CompanyCard
                  selectedCompany={selectedCompany}
                  setSelectedCompany={setSelectedCompany}
                />
              ) : null}
            </section>
          ) : (
            <h1>
              Une erreur s'est produite lors de la récupération des données
            </h1>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
