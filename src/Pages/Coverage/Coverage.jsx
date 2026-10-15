import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useState } from "react";

function FlyToDistrict ({coords}) {
const map = useMap();
if(coords){
  map.flyTo(coords, 10, {duration:1.5})
}
return null;
}

const Coverage = () => {
  const serviceCenter = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [activeCoords, setActiveCoords] = useState(null);
  const [activeDistrict, setActiveDistrict] = useState(null);

  // Bangladesh center position
  const position = [23.6850, 90.3563];

  const handleSearch = (e)=>{
    e.preventDefault();
    const district = serviceCenter.find(d=>d.district.toLowerCase().includes(searchText.toLowerCase()));
    if(district){
      setActiveCoords([district.latitude, district.longitude]);
      setActiveDistrict(district.district);
    }

  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          We are available in 64 districts
        </h1>

        <p className="mt-3 text-gray-500">
          Find our delivery coverage across Bangladesh
        </p>
      </div>
           {/* 1. District search box */}
      <form
        onSubmit={handleSearch}
        className="mx-auto mb-6 flex max-w-xl gap-2"
      >
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search your district..."
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn text-black btn-primary">
          Search
        </button>
      </form>

      {/* Map */}
      <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">

        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
        >

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FlyToDistrict coords={activeCoords} />

          {/* ============================= */}
          {/* All District Markers */}
          {/* ============================= */}

          {serviceCenter.map((center) => (
            <Marker
              key={center.district}
              position={[
                center.latitude,
                center.longitude,
              ]}
            >
              <Popup autoOpen = {center.district === activeDistrict}>
                <div>
                  <h3 className="font-bold text-lg">
                    {center.district}
                  </h3>

                  <p>
                    <strong>Region:</strong> {center.region}
                  </p>

                  <p>
                    <strong>City:</strong> {center.city}
                  </p>

                  <p className="mt-2">
                    <strong>Covered Areas:</strong>
                  </p>

                  <ul className="list-disc ml-5">
                    {center.covered_area.map((area, index) => (
                      <li key={index}>
                        {area}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-2 text-green-600 font-medium">
                    ● {center.status}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}

        </MapContainer>

      </div>
    </div>
  );
};

export default Coverage;