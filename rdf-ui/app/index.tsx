import { ExternalLink } from "@/components/ExternalLink";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function Index() {



  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/settings">Settings</Link>
      <ThemedText>Hello World!</ThemedText>
      <Link href="/rdf">RDF</Link>
    </ThemedView>
  );
}
