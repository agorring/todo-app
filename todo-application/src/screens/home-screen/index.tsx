import SafeAreWrapper from "@/components/shared/safe-area-wrapper";
import { fetcher } from "@/services/config";
import { Box, Text } from "@/utils/themes";
import React from "react";
import useSWR from "swr";

const HomeScreen = () => {
  const { data, isLoading } = useSWR("categories", fetcher);

  console.log("object", JSON.stringify(data, null, 2));
  return (
    <SafeAreWrapper>
      <Box>
        <Text>Home screen</Text>
      </Box>
    </SafeAreWrapper>
  );
};

export default HomeScreen;
