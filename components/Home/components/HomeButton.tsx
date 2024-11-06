import React, { ReactElement } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableWithoutFeedbackProps,
} from "react-native";

export interface ButtonProps extends TouchableWithoutFeedbackProps {
    title?: string;
  }
  
  export function HomeButton(props: ButtonProps) {
    return (
      <>
        <TouchableOpacity {...props} style={[styles.button, props.style]}>
          {props.children ? (
            props.children
          ) : props.title ? (
            <Text style={styles.text}>{props.title}</Text>
          ) : (
            <Text style={styles.text}>Bee Button</Text>
          )}
        </TouchableOpacity>
      </>
    );
  }

const styles = StyleSheet.create({
  button: {
    display: "flex",
    width: 46,
    height: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 16,
    left: 93,
    zIndex: 4,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 8,
    color: "#434343",
    textAlign: "center",
  },
});

export default HomeButton;
