import { Button } from "react-native";
import React from "react";
import { Box, Text } from "@/utils/themes";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignUpSceen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Sign in screen</Text>
        <Button
          title="Navigate to sign up"
          onPress={navigateToSignUpSceen}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;
