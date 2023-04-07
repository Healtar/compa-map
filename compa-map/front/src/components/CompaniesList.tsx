import { Companies, Company } from "../interfaces/Company";
interface ViewPortState {
    viewport: any,
    setViewport: any
}

interface SelectedCompanyState {
    selectedCompany: any,
    setSelectedCompany: any
}

export default function CompaniesList({ companies, viewport, setViewport, selectedCompany, setSelectedCompany }: Companies & ViewPortState & SelectedCompanyState) {

    return (

        <div className="w-1/4 max-w-md bg-white border border-gray-200 lg:block hidden rounded-lg shadow overflow-hidden ">
            <div className="flex items-center p-4 mb-4 justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 ">Entreprises</h5>

            </div>
            <div className="flow-root h-5/6">
                <ul role="list" className="divide-y h-full scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 overflow-y-scroll divide-gray-200 ">

                    {companies.map((company) => {
                        return (
                            <li onClick={() => {
                                setViewport({
                                    longitude: company.coordinates.longitude,
                                    latitude: company.coordinates.latitude,
                                    zoom: 15
                                })
                                setSelectedCompany(company);
                            }}
                                className="py-3 sm:py-4 hover:bg-gray-100"
                                key={company.id}
                            >

                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate ">
                                            {company.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate ">
                                            {company.description}
                                        </p>
                                    </div>

                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}