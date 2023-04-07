
interface CompanyAddress {
    country: string,
    city: string,
    postalCode: number,
    street: string
}

interface Coordinates {
    longitude: number,
    latitude: number
}

interface Contact {
    phone: string,
    mail: string,
    website: string
}

export interface Company {
    id: number,
    name: string,
    description: string,
    contact: Contact,
    coordinates: Coordinates
    address: CompanyAddress
}

export interface Companies {
    companies: Array<Company>
}