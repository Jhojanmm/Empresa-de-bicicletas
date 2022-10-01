import { useState, useEffect } from "react";
import { Load } from "./services/stations";
import imagenLogo from "./assets/planeta.png";
import { Heading, Box, Image,Flex, Center, Text, Spacer, Tag, Button} from '@chakra-ui/react';

export default function InfoBikes() {
  const [stations, setStations] = useState([]);


  useEffect(() => {
    Load(setStations);
  }, []);

  return (
    <>
    
    
   <Center> <Image m={4} src={imagenLogo} alt="BikeLogo" width={200}/> </Center> 
      <Heading as="h1" size="4xl">Bikesssssssssssssss</Heading>

      <section>
        
          {stations.map((stations) => (

            <Box key={stations.id} bg="yellow.100" p={10} m={5} borderRadius={20}>
              
                
              {stations.id} <br />
              
              
            </Box>
            
            ))}
        

      </section>
      

    </>
  )

}

