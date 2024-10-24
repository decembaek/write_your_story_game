import { Card, VStack } from "@chakra-ui/react";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <>
      <VStack bg="white" w="100vw" h="100vh" justify="center">
        <Card.Root size={"md"}>
          <Card.Body bg="white">{children}</Card.Body>
        </Card.Root>
      </VStack>
    </>
  );
}
