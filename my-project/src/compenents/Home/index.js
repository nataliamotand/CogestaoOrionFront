import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Home(){
    return(
        <View style={styles.caixaHome}>
            <Text style={styles.textoHome}>
                Home
            </Text>
        </View>
    )
}