import { useState, useEffect } from "react";
import { GetStationById } from "./services/stations";
import imagenLogo from "./assets/planeta.png";
import { useParams } from "react-router-dom";
import { Heading, Box, Image, Flex, Center, Text, Spacer, Tag, Button } from '@chakra-ui/react';

let countB = 0;
let countEstaciones = 0;
let countE = 0;

const Network = () => {
    const [network, setNetwork] = useState(null);

    const params = useParams();
    useEffect(() => {
        GetStationById(params.id, setNetwork);
    }, []);

    if (network != null) {
        network.stations.map((station) => {
            countB += station.free_bikes;
            countE += station.empty_slots;
            countEstaciones++;

        });
    }
    let estaciones = countEstaciones / 4;
    let espacios = countE / 4;
    let bikes = countB / 4;

    return (
        <>
            <center>
                <Heading as="h1" size="lg">
                    <Box width={400} background="orange.200" borderRadius={20} p={10} m={5}>
                        {params.id}
                    </Box>
                </Heading>
                <a href="/">
                    <Image src={imagenLogo} width={300} m={4}></Image>
                </a>

                <Box width={600} background="yellow.100" borderRadius={20}>
                    <Text fontSize="xl" fontFamily="monospace" p={4} align="center">
                        <p><strong> Estaciones totales </strong><br />
                            {estaciones}</p>
                        <p> <strong>  Bicicletas totales </strong><br />
                            {bikes}</p>
                        <p><strong> Espacios totales </strong><br />
                            {espacios}</p>
                    </Text>
                </Box>
            </center>
            {network != null
                ? network.stations.map((station) => (

                    <Box key={station.name} bg="yellow.100" p={5} m={5} borderRadius={20} textAlign="center">
                        <strong><Text fontSize={25} m={5}>{station.name}</Text></strong>



                        {station.free_bikes || station.empty_slots != null ? (
                            <Box>
                                <Flex>
                                    <Spacer />
                                    <Center w="300px" bg="orange.200" borderRadius={5}>
                                        <Text>Bicicletas libres <br />
                                            <center>{station.free_bikes}</center></Text>
                                    </Center>
                                    <Spacer />
                                    <Center w="300px" bg="orange.200" borderRadius={5}>
                                        <Text>Espacios libres <br />
                                            <center>{station.empty_slots}</center></Text>
                                    </Center>
                                    <Spacer />
                                    <Center w="300px" bg="orange.200" borderRadius={5}>
                                        <Text> Total de espacios{" "}<br />
                                            <center>{station.free_bikes + station.empty_slots}</center></Text>
                                    </Center>
                                    <Spacer />
                                    <br />
                                </Flex>
                                <strong><Text fontSize={10} color="grey">{station.timestamp}</Text></strong>
                            </Box>
                        ) : (
                            <Flex>

                                <Center w="300px" bg="red.200" borderRadius={5}>
                                    <Text> No está disponible actualmente</Text>
                                </Center>

                                <Spacer />
                                <Tag p={2} colorScheme="red">
                                    {station.timestamp}
                                </Tag>
                            </Flex>
                        )}
                    </Box>
                ))
                : <center><Box width={400} background="orange.200" borderRadius={20} p={10} m={5} textAlign="center">
                    Cargando estaciones ... <br />
                    Por favor espere un momento
                </Box></center>}
        </>
    );
};

export default Network;