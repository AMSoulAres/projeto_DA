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
  
  export function BaseButton(props: ButtonProps) {
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
    backgroundColor: "#ffd358",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 13,
    borderRadius: 2
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "400",
    color: "#434343",
    textAlign: "center",
  },
});

export default BaseButton;
