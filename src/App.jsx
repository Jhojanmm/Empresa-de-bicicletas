import { useState, useEffect } from "react";
import { Load } from "./services/stations";
import imagenLogo from "./assets/planeta.png";
import { Heading } from '@chakra-ui/react'


export function App() {
  const [stations, setStations] = useState([]);


  useEffect(() => {
    Load(setStations);
  }, []);

  return (
    <>
    <img src={imagenLogo} alt="BikeLogo" />
      <Heading as="h1" size="lg">Bikes</Heading>
      <ul>
        
          {stations.map((stations) => (

            <li key={stations.id}>
              {stations.id}
            </li>
            ))}
        

      </ul>
      

    </>
  )

}

