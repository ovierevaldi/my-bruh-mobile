import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";

import "./../global.css";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0ba80eff",
          },
          headerTintColor: "#fff",
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
