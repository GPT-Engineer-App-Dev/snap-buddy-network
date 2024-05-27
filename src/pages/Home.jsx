import { Box, Text, VStack, Image } from "@chakra-ui/react";

const Home = () => {
  // Placeholder data for photos
  const photos = [
    { id: 1, url: "https://via.placeholder.com/300", description: "A beautiful sunrise" },
    { id: 2, url: "https://via.placeholder.com/300", description: "A serene beach" },
    { id: 3, url: "https://via.placeholder.com/300", description: "A bustling cityscape" },
  ];

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