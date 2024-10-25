import { Box, Flex, VStack } from "@chakra-ui/react";

export default function MysteryLayout(props) {
  const { children, bg = "black" } = props;
  return (
    <>
      <Flex direction="column" minH={"100vh"}>
        <Box
          flex={1}
          overflowY="auto"
          p={2}
          bg={"white"}
          w={"100%"}
          maxW={"1200px"}
          mx={"auto"}
        >
          <VStack spacing={30}>{children}</VStack>
        </Box>
      </Flex>
    </>
  );
}
