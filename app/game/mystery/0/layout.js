import { Box, Flex, VStack } from "@chakra-ui/react";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <>
      <Flex direction="column" maxW="600px" w="600px">
        <Box flex={1} overflowY="auto" p={4}>
          <VStack spacing={4}>{children}</VStack>
        </Box>
      </Flex>
    </>
  );
}
