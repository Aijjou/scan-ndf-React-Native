import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Search from "./Components/Search";
export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <Search />
      </ScrollView>
    </SafeAreaProvider>
  );
}
