import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import Form from "../Form";

export default function Login(){

    return(
        <View>
            <View style={styles.caixaLogin}>
                <Text style={styles.textoLogin}>
                    Login
                </Text>
            </View>
            <View>
                <Form />
            </View>
        </View>
    )
}
    