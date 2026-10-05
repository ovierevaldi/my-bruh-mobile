import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { StyleSheet, View } from "react-native";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl text-blue-500 font-raleway">
        Welcome to Nativewind!
      </Text>

      <Text className="text-xl text-blue-500 font-nunito_sans">
        Welcome to Nativewind 2!
      </Text>

      <Button>
        <Text>Button</Text>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Card Content</Text>
        </CardContent>
        <CardFooter>
          <Text>Card Footer</Text>
        </CardFooter>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
