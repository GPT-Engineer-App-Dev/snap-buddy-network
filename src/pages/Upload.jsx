import { Box, Button, Input, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = () => {
    // Placeholder function for handling photo upload
    console.log("Photo:", photo);
    console.log("Description:", description);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input type="file" onChange={handlePhotoChange} />
        <Textarea placeholder="Description" value={description} onChange={handleDescriptionChange} />
        <Button colorScheme="blue" onClick={handleUpload}>Upload</Button>
      </VStack>
    </Box>
  );
};

export default Upload;