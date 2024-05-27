import { Box, Text, VStack, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setPhotos(storedPhotos);
  }, []);

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {photos.map((photo) => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%" maxW="md">
            <Image src={photo.url} alt={photo.description} />
            <Box p={4}>
              <Text>{photo.description}</Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Home;