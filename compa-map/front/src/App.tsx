
import { useEffect, useState } from 'react';
import './App.css';
import CompaniesList from './components/CompaniesList';
import CompaniesMap from './components/CompaniesMap';
import CompanyCard from './components/CompanyCard';
import Loader from './components/Loader';
import { Company, Companies } from './interfaces/Company';

interface NewCoordinates {
  longitude: number,
  latitude: number
}

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [newCoordinates, setNewCoordinates] = useState<NewCoordinates | null>(null);
  const [viewport, setViewport] = useState({
    longitude: 6.022852270417969,
    latitude: 47.24039305210101,
    zoom: 15,

  });

  const url = 'http://compa-map/getCompanies.php';

  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      const companies = await response.json();
      setCompanies(companies);
      if (companies) {
        setIsLoading(false);
      }

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchApi()
  }, [newCoordinates])

  return (
    <div className="App">
      <main className=' justify-center flex items-center h-screen f-full'>
        {isLoading ?
          <Loader />
          :
          <section className='lg:h-4/6 lg:w-4/6 w-5/6 h-3/6  mx-auto flex gap-x-4 justify-center'>
            <CompaniesMap companies={companies} viewport={viewport} setViewport={setViewport} selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} newCoordinates={newCoordinates} setNewCoordinates={setNewCoordinates} />
            <CompaniesList companies={companies} viewport={viewport} setViewport={setViewport} selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />

            {selectedCompany ?
              <CompanyCard selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />

              : null}
          </section>
        }


      </main>
    </div>
  );
}

export default App;
