import { Card, VStack } from "@chakra-ui/react";

export default function GameLayout(props) {
  const { children } = props;

  return (
    <>
      <VStack justify="center" width={"100%"} p={4}>
        <Card.Root bg={"white"} w={"100%"} maxW={"1200px"} mx={"auto"}>
          <Card.Body>{children}</Card.Body>
        </Card.Root>
      </VStack>
    </>
  );
}
