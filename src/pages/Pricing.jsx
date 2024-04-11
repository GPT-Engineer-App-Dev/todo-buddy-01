import React from "react";
import { Box, Heading, Text, Button, Stack, VStack } from "@chakra-ui/react";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$9.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Pro",
      price: "$19.99",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Enterprise",
      price: "$49.99",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    },
  ];

  return (
    <Box maxWidth="800px" margin="auto" mt={8}>
      <Heading mb={8}>Pricing</Heading>
      <Stack direction={["column", "row"]} spacing={8} justifyContent="center">
        {pricingTiers.map((tier) => (
          <Box key={tier.name} p={6} borderWidth={1} borderRadius="md" textAlign="center">
            <Heading size="lg" mb={4}>
              {tier.name}
            </Heading>
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              {tier.price}
            </Text>
            <VStack spacing={2} mb={6}>
              {tier.features.map((feature) => (
                <Text key={feature}>{feature}</Text>
              ))}
            </VStack>
            <Button colorScheme="blue" size="lg">
              Choose Plan
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Pricing;
