"use client";

import { useState, useEffect } from "react";
import { Box, Input, Kbd, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useForm } from "react-hook-form";
import { setToLocalStorage } from "@/lib/localStorageFunction";
import { useRouter } from "next/navigation";

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export default function Home() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setToLocalStorage("start-name", data.name);
    setToLocalStorage("start-progress", 0);
    router.push("/game/mystery/0");
  };

  const fullText =
    "안녕하세요, 반갑습니다! 당신의 이야기를 작성해보세요...이름은 무엇인가요?";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        if (index === 14) {
          setText("");
        }
        setText((prev) => prev + fullText[index]);

        setIndex((prev) => prev + 1);
      }, 150); // 각 글자 사이의 지연 시간 (밀리초)

      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box position="relative">
        <Text color="black" fontSize="2xl">
          {text}
        </Text>
        {index < fullText.length && (
          <Box
            as="span"
            position="absolute"
            right="-0.1em"
            top="0"
            animation={`${blink} 1s infinite`}
            fontSize="2xl"
          >
            <Text color="black">|</Text>
          </Box>
        )}
      </Box>
      <Box>
        {index >= fullText.length && (
          <>
            <Input
              color={"black"}
              placeholder="2 ~ 15자 이름을 입력해주세요"
              variant="flushed"
              {...register("name", {
                required: true,
                minLength: 2,
                maxLength: 15,
              })}
            />
            <Kbd onClick={handleSubmit(onSubmit)}>Enter</Kbd>
          </>
        )}
      </Box>
    </Box>
  );
}
