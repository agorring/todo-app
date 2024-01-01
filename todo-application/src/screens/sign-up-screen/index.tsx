import { Button } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/themes";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignInSceen = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign up screen</Text>
        <Button
          title="Navigate to sign in"
          onPress={navigateToSignInSceen}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;
