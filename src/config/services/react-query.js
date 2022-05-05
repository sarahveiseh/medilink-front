export const reactQueryConfig = {
  defaultOptions: {
    queries: {
      retryOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
};
