import { Box, Text, VStack, Image, Button, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setUserPhotos(storedPhotos);
  }, []);

  const handleLike = (id) => {
    const updatedPhotos = userPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, likes: (photo.likes || 0) + 1 };
      }
      return photo;
    });
    setUserPhotos(updatedPhotos);
    localStorage.setItem("photos", JSON.stringify(updatedPhotos));
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>My Photos</Text>
      <VStack spacing={4}>
        {userPhotos.map((photo) => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%" maxW="md">
            <Image src={photo.url} alt={photo.description} />
            <Box p={4}>
              <Text>{photo.description}</Text>
              <HStack mt={2}>
                <Button size="sm" onClick={() => handleLike(photo.id)}>Like</Button>
                <Text>{photo.likes || 0} Likes</Text>
              </HStack>
            </Box>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Profile;