import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";

const token = async () => { await fetch('https://rdf.nistec.cc/token', {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        'grant_type': 'password',
        'username': 'Nistec',
        'password': 'hashedtest',
        'scope': '',
        'client_id': 'string',
        'client_secret': 'string'
    })
});
}


export default function Index() {
  const [data, setData] = useState(String);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    fetch('https://rdf.nistec.cc/get_graph/graphtest/', {
      method: "GET",
      headers: {
        'authorization': 'Bearer '+token()
      }
    })
    .then(response => response.text())
    .then((text) => {
      console.log(text)
      setData(text)})
    .finally(() => setLoading(false))
    .catch(error => {
      console.error(error);
      });
    
  })

  return (    
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText >{data}</ThemedText>
    </ThemedView>
  );
}
