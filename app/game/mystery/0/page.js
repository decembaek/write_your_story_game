import { Card, HStack, Text, VStack } from "@chakra-ui/react";

export default function MysteryPage() {
  return (
    <>
      <HStack alignSelf="flex-center">
        <Text fontSize="2xl" color="black">
          하이
        </Text>
      </HStack>
      <HStack alignSelf="flex-start">
        <VStack alignItems={"flex-start"}>
          <Text fontSize="md" color="black">
            도우미 :
          </Text>
          <Card.Root bg={"white"} p={0}>
            <Card.Body p={3}>
              <Text color="black">시기다른래퍼들의 반대편을 바라본다..</Text>
            </Card.Body>
          </Card.Root>
        </VStack>
      </HStack>
      <HStack alignSelf={"flex-end"}>
        <VStack alignItems={"flex-end"}>
          <Text fontSize="md" color="black">
            나 :
          </Text>
          <Card.Root bg={"white"} p={0}>
            <Card.Body p={3}>
              <Text color="black">시기다른래퍼들의 반대편을 바라본다..</Text>
            </Card.Body>
          </Card.Root>
        </VStack>
      </HStack>
    </>
  );
}
