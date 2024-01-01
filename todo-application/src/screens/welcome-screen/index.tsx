import React from "react";
import { Box, Text } from "@/utils/themes";
import { AuthScreenNavigationType } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";

const WelcomeScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"Welcome">>();
  const navigateToSignInSceen = () => {
    navigation.navigate("SignIn");
  };
  const navigateToSignUpSceen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaWrapper>
      <Box>
        <Text>Welcome Screen</Text>
        <Button
          title="Navigate to sign in"
          onPress={navigateToSignInSceen}
        ></Button>
        <Button
          title="Navigate to sign up"
          onPress={navigateToSignUpSceen}
        ></Button>
      </Box>
    </SafeAreaWrapper>
  );
};

export default WelcomeScreen;
