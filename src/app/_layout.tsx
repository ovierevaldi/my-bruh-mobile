import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";

import { NunitoSans_400Regular } from "@expo-google-fonts/nunito-sans";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import "./../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Raleway_400Regular,
  });

  const [loaded2, error2] = useFonts({
    NunitoSans_400Regular,
  });

  useEffect(() => {
    if (loaded || error || loaded2 || error2) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error, loaded2, error2]);

  if (!loaded && !error && !loaded2 && !error2) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>

      <PortalHost />
    </>
  );
}
