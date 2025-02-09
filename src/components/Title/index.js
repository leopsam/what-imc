import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function Title() {
    return (
        <View style={styles.boxTitle}>
            <Text style={styles.textTitleFirst}>What</Text>
            <Text style={styles.textTitleSecond}>IMC</Text>
        </View>
    );
}