import { Box, Text, VStack, Image, Button, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setPhotos(storedPhotos);
  }, []);

  const handleLike = (id) => {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, likes: (photo.likes || 0) + 1 };
      }
      return photo;
    });
    setPhotos(updatedPhotos);
    localStorage.setItem("photos", JSON.stringify(updatedPhotos));
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {photos.map((photo) => (
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

export default Home;