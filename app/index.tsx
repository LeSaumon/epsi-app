
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [data, setData] = useState("")
  const networkCall = async () => {
    await fetch("http://127.0.0.1:8000/free-bikes", {
    }).then(data => data.json()).then(data => console.log(data))
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to my App</Text>
      <Button onPress={networkCall}>Info is {data ? data : "None"}</Button>
    </View>
  );
}
