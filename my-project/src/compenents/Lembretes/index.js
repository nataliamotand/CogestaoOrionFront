import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Lembretes(){
    return(
        <View style={styles.caixaLembretes}>
            <Text style={styles.textoLembretes}>
                Lembretes
            </Text>
        </View>
    )
}