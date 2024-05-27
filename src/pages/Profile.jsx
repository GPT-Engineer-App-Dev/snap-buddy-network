import { Box, Text, VStack, Image } from "@chakra-ui/react";

const Profile = () => {
  // Placeholder data for user's photos
  const userPhotos = [
    { id: 1, url: "https://via.placeholder.com/300", description: "My first photo" },
    { id: 2, url: "https://via.placeholder.com/300", description: "Vacation memories" },
  ];

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