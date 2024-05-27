import { Box, Button, Input, Textarea, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const toast = useToast();
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = () => {
    if (!photo) {
      toast({
        title: "No photo selected.",
        description: "Please select a photo to upload.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPhoto = {
        id: Date.now(),
        url: reader.result,
        description: description,
      };

      // Save the photo to local storage (simulating a backend)
      const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
      storedPhotos.push(newPhoto);
      localStorage.setItem("photos", JSON.stringify(storedPhotos));

      toast({
        title: "Photo uploaded.",
        description: "Your photo has been uploaded successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Clear the input fields
      setPhoto(null);
      setDescription("");
    };
    reader.readAsDataURL(photo);
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