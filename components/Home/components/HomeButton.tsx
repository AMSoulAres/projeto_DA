import React, { ReactElement } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
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
    width: 232,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "400",
    color: "#434343",
    textAlign: "center",
  },
});

export default HomeButton;
