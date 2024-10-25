import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";

export default function HomeLayout(props) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Box bg={"white"} minH={"100vh"}>
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
