import React from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";

const Gallery = () => {
  const images = ["https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200", "https://via.placeholder.com/300x200"];

  return (
    <Box mt={8}>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} objectFit="cover" borderRadius="md" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;
