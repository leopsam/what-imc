import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Keyboard, Vibration, FlatList } from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [imcResult, setImcResult] = useState(null)
    const [classification, setClassification] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    function verificationImc() {
        if (imcResult == null) {
            Vibration.vibrate()
            setErrorMessage("campo obrigatório*")
        }
    }

    function imcCalculator() {
        if (weight != null && height != null) {
            const heightFormat = height.replace(",", ".")
            const weightFormat = weight.replace(",", ".")
            const Calculation = (weightFormat / (heightFormat * heightFormat)).toFixed(2)
            setImcResult(Calculation)
            if (Calculation < 18.50) {
                setClassification("Abaixo de 18,5 → Abaixo do peso")
            } else if (Calculation >= 18.50 && Calculation <= 24.99) {
                setClassification("18,5 a 24,9 → Peso normal")
            } else if (Calculation >= 25.00 && Calculation <= 29.99) {
                setClassification("25 a 29,9 → Sobrepeso")
            } else if (Calculation >= 30.00 && Calculation <= 34.99) {
                setClassification("30 a 34,9 → Obesidade grau 1")
            } else if (Calculation >= 35.00 && Calculation <= 39.99) {
                setClassification("35 a 39,9 → Obesidade grau 2")
            } else {
                setClassification("40 ou mais → Obesidade grau 3 (mórbida)")
            }
            setHeight(null)
            setWeight(null)
            setTextButton('Calcular Novamente')
            setErrorMessage(null)
            Keyboard.dismiss();
        } else {
            verificationImc()
            setImcResult(null)
            setClassification(null)
            setTextButton('Calcular')
        }
    }

    return (
        <View style={styles.formContext}>
            {imcResult == null ?
                <View style={styles.form}>
                    <View style={styles.boxLabel}>
                        <Text style={styles.formLabel}>Altura</Text>
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    </View>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setHeight}
                        value={height}
                        placeholder='Ex. 1.75'
                        keyboardType='numeric'
                    />
                    <View style={styles.boxLabel}>
                        <Text style={styles.formLabel}>Peso</Text>
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                    </View>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder='Ex. 75.500'
                        keyboardType='numeric'
                    />
                    <TouchableOpacity
                        style={styles.formButton}
                        onPress={() => imcCalculator()}
                    >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.form}>
                    <ResultImc imcResult={imcResult} classification={classification} />
                    <TouchableOpacity
                        style={styles.formButton}
                        onPress={() => imcCalculator()}
                    >
                        <Text style={styles.textButton}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }

        </View>
    );
}