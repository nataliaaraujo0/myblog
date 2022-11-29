import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "urql";
import { client, ssrCache } from "../lib/urlql";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// Create a client
export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  );
}
