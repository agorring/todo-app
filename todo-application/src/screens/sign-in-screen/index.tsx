import React from "react";
import { Box, Text } from "@/utils/themes";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationType } from "@/navigation/types";
import SafeAreaWrapper from "@/components/shared/safe-area-wrapper";
import Button from "@/components/shared/button";
import Input from "@/components/shared/input";
import { Pressable } from "react-native";

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationType<"SignIn">>();
  const navigateToSignUpSceen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaWrapper>
      <Box flex={1} px="5.5" justifyContent="center">
        <Text variant="textXl" fontWeight="700" mb="6">
          Welcome Back
        </Text>
        <Input label={"Email"} />
        <Box mb="6" />
        <Input label={"Password"} />
        <Box mt="5.5" />
        <Pressable onPress={navigateToSignUpSceen}>
          <Text color="primary" textAlign="right">
            Register?
          </Text>
        </Pressable>
        <Box mb="5.5" />
        <Button label="Login" onPress={navigateToSignUpSceen} uppercase />
      </Box>
    </SafeAreaWrapper>
  );
};

export default SignInScreen;
