import { Box, Text, VStack, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setUserPhotos(storedPhotos);
  }, []);

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>My Photos</Text>
      <VStack spacing={4}>
        {userPhotos.map((photo) => (
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

export default Profile;