import React from "react";
import { Box, Text } from "@/utils/themes";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import { Pressable } from "react-native";

const SignUpScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignUp">>();
  const navigateToSignInSceen = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="5.5" mt={"13"}>
        <Text variant="textXl" fontWeight="700">
          Welcome to Todo!
        </Text>
        <Text variant="textXl" fontWeight="700" mb="6">
          Your journey starts here
        </Text>

        <Input label={"Name"} />
        <Box mb="6" />
        <Input label={"Email"} />
        <Box mb="6" />
        <Input label={"Password"} />
        <Box mt="5.5" />
        <Pressable onPress={navigateToSignInSceen}>
          <Text color="primary" textAlign="right">
            Log in?
          </Text>
        </Pressable>
        <Box mb="5.5" />
        <Button label="Register" onPress={navigateToSignInSceen} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignUpScreen;
