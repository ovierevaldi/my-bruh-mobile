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
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#00776e",
          },
          headerTintColor: "#f0fdfa",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />

        <Stack.Screen
          name="auth/index"
          options={{
            title: "Auth",
          }}
        />

        <Stack.Screen
          name="analytics/index"
          options={{
            title: "Analytics",
          }}
        />

        <Stack.Screen
          name="backup/index"
          options={{
            title: "Backup",
          }}
        />

        <Stack.Screen
          name="income/index"
          options={{
            title: "Income",
          }}
        />

        <Stack.Screen
          name="settings/index"
          options={{
            title: "Settings",
          }}
        />
      </Stack>

      <PortalHost />
    </>
  );
}
