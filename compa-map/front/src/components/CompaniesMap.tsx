import { useEffect, useState, useRef } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Company, Companies } from '../interfaces/Company';
import CompanyCard from "./CompanyCard";
import { LngLat } from "mapbox-gl";
import NewCompanyForm from "./NewCompanyForm";

interface ViewPortState {
  viewport: any,
  setViewport: any
}

interface SelectedCompanyState {
  selectedCompany: any,
  setSelectedCompany: any
}

interface NewCoordinatesState {
  newCoordinates: any,
  setNewCoordinates: any
}

interface IsOnHoverState {
  isOnHover: any,
  setIsOnHover: any
}

export default function CompaniesMap({ companies, viewport, setViewport, selectedCompany, setSelectedCompany, newCoordinates, setNewCoordinates , API_URL}: Companies & ViewPortState & SelectedCompanyState & NewCoordinatesState & any) {




  function handleClick(e: any) {
    const [longitude, latitude] = e.lngLat
    setNewCoordinates({
      longitude: longitude,
      latitude: latitude
    })
  }


  return (
    <div className="w-full h-full rounded-lg overflow-hidden">


      <ReactMapGl
        {...viewport}
        width={'100%'}
        height={'100%'}
        onViewportChange={(viewport: any) => {
          setViewport(viewport)
        }}
        mapboxApiAccessToken={"pk.eyJ1IjoieXZlc3RhbiIsImEiOiJjbGRwczllamkxNjg1M3F0NmpmeW1zMHhhIn0.LpkG5sF33tcYKwZ4cbuEwg"}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onClick={handleClick}
      >
        {companies.map((company: any) => (
          <div key={company.id}>
            <Marker

              latitude={company.coordinates.latitude}
              longitude={company.coordinates.longitude}
              offsetLeft={-1 * viewport.zoom}
              offsetTop={-1.5 * viewport.zoom}
              onClick={() => {
                setViewport({
                  longitude: company.coordinates.longitude,
                  latitude: company.coordinates.latitude,
                  zoom: 15
                })
                setSelectedCompany(company)
              }
              }
            >

              <RadioButtonCheckedIcon
                className="text-sky-500 active:text-sky-600 hover:text-sky-600"
                style={{
                  fontSize: 2.5 * viewport.zoom,
                  cursor: 'pointer'
                }}
              />


            </Marker>
            <Popup
              latitude={company.coordinates.latitude}
              longitude={company.coordinates.longitude}
              offsetLeft={0.2 * viewport.zoom}
              offsetTop={-1.2 * viewport.zoom}
              closeButton={false}
              className='text-sm opacity-80'
            >
              <p>{company.name}</p>

            </Popup>
          </div>
        ))}


      </ReactMapGl>

      {newCoordinates ?
        <NewCompanyForm setNewCoordinates={setNewCoordinates} newCoordinates={newCoordinates} API_URL={API_URL}/>
        : null}
    </div>
  )
}