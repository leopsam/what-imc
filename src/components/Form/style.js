import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        alignItems: "center",
        marginTop: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 10,
        padding: 30,
    },
    boxLabel: {
        flexDirection: "row",
        alignItems: "center",
    },
    formLabel: {
        color: "#FFFFFF",
        fontSize: 21,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    errorMessage: {
        color: "#FF0043",
        fontSize: 14,
        fontWeight: "bold",
        paddingLeft: 10,
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#e8e8e8",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    formButton: {
        backgroundColor: "#FF0043",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        paddingTop: 14,
        paddingBottom: 12,
        marginLeft: 12,
        margin: 30,
    },
    textButton: {
        fontSize: 20,
        color: "#FFFFFF"
    },
});

export default styles