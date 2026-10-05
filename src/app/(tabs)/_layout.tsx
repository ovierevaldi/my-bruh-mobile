import { Tabs } from "expo-router";
import Icon, { type IconName } from "react-native-remix-icon";

type TabDataType = {
  name: string;
  title: string;
  icon: {
    name: IconName;
    className?: string;
  };
};

const TAB_DATA: TabDataType[] = [
  {
    name: "index",
    title: "Home",
    icon: {
      name: "home-4-fill",
      className: "text-primary",
    },
  },
  {
    name: "analytics/index",
    title: "Analytics",
    icon: {
      name: "bar-chart-box-fill",
    },
  },
  {
    name: "auth/index",
    title: "Auth",
    icon: {
      name: "shield-user-fill",
    },
  },
  {
    name: "backup/index",
    title: "Backup",
    icon: {
      name: "cloud-fill",
    },
  },
  {
    name: "income/index",
    title: "Income",
    icon: {
      name: "money-dollar-circle-fill",
    },
  },
  {
    name: "settings/index",
    title: "Settings",
    icon: {
      name: "settings-3-fill",
    },
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00776e",
        tabBarInactiveTintColor: "#71717b",
      }}
    >
      {TAB_DATA.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <Icon
                name={tab.icon.name}
                size={48}
                fallback={null}
                className={tab.icon.className}
                color={typeof color === "string" ? color : undefined}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
