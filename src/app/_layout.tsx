import "../global.css";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useCallback } from "react";
import { View, Text } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Layout() {

  const [fontsLoaded, fontError] = Font.useFonts({
    "Chillax-Medium": require("../assets/fonts/Chillax-Medium.ttf"),
    "MulishBold": require("../assets/fonts/Mulish-Bold.ttf"),
    "Mulish": require("../assets/fonts/Mulish-Medium.ttf"),
    "MulishRegular": require("../assets/fonts/Mulish-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return <View onLayout={onLayoutRootView}><Slot /></View>;
}
