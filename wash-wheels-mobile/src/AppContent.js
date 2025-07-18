import React from "react";
import { useAuth } from "./context/AuthContext";
import AppNavigator from "./navigation/index";
import { ActivityIndicator, View } from "react-native";

export default function AppContent() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#274bb1ff" />
      </View>
    );
  }

  return <AppNavigator />;
}