import React from "react";
import { View, Text } from "react-native";
import { useState } from "react";
import { Button } from "react-native-web";

export default function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(null);
  const count = (start) => {
    setStart(start);
    if (start == true) {
      let current_timer = setInterval(() => {
        setTime((time) => time + 240);
      }, 1000);

      setTimer(current_timer);
    } else {
      clearInterval(timer);
    }
    clearInterval(time);
  };

  return (
    <View
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "#BEDC74",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: "60px",
        }}
      >
        Stopwatch
      </Text>
      <br />
      <br />
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#A2CA71",
          padding: "20px",
          width: "50%",
        }}
      >
        <View style={{ textAlign: "center", fontSize: 40 }}>
          {Math.floor(time / 3600) +
            ":" +
            (Math.floor(time / 60) % 60) +
            ":" +
            (time % 60)}
        </View>
        <br />
        <Button
          disabled={start}
          title="Start"
          onPress={() => {
            count(true);
          }}
        ></Button>
        <br />
        <Button
          title="Pause"
          disabled={!start}
          onPress={() => {
            count(false);
          }}
        ></Button>
        <br />
        <Button
          title="Restart"
          onPress={() => {
            setTime(0);
            count(false);
          }}
        ></Button>

        <br />
        <br />
        <text
          style={{
            fontFamily: "monospace",
            fontSize: "30",
          }}
        >
          Created by Smaran
        </text>
      </View>
    </View>
  );
}
