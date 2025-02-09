import React from 'react';
import { Text, View, Share, TouchableOpacity } from 'react-native';
import styles from './style';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ResultImc(props) {

    const onShare = async () => {
        await Share.share({
            message: props.imcResult + ' é o meu IMC\n' + props.classification,
        });
    }

    return (
        <View style={styles.boxImc}>
            <Text style={styles.messageImc}>Seu IMC é</Text>
            <Text style={styles.resultImc}>{props.imcResult}</Text>
            <Text style={styles.messageImc}>{props.classification}</Text>

            <TouchableOpacity
                style={styles.ShareButton}
                onPress={onShare}
            >
                <Text style={styles.ShareText}>
                    <AntDesign name="sharealt" size={18} color="#FFFFFF" /> Share
                </Text>
            </TouchableOpacity>
        </View>
    );
}