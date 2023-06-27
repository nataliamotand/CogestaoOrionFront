import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteudoForm: {
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 10,
        marginLeft: 10,
    },
    Formulario: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "normal",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 40,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 20,
    },
    Label: {
        color: "#000",
        alignContent: "flex-end",
        marginBottom: 10,
    },
    textoInput: {
        backgroundColor: "#e0e5e5",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 270,
        color: "#000",
        height: 50,
        marginBottom: 20,
        fontSize: 18,
        paddingLeft: 10,
    },
    botaoLogin: {
        backgroundColor: "#3c1c9f",
        height: 55,
        width: 270,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    textoBotaoLogin: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    erroMessage: {
        color: "red",
        fontWeight: "bold",
        fontSize: 12,
    }
});

export default styles;