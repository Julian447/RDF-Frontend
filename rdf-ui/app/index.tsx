import { ExternalLink } from "@/components/ExternalLink";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import {DefaultTheme} from '@react-navigation/native';

export default function Index() {

  

  return (
    <ThemedView style={styles.layout}>

      <ThemedText type="title" lightColor="text">Hello World!</ThemedText>
      <ThemedText type="link"> <Link href="/settings">Settings</Link></ThemedText>

      <ThemedText type="link"><Link href="/rdf">RDF</Link></ThemedText>
    </ThemedView>
  );
}


const styles= StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  theme: {
  }
});
