import React from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export const MessageCentre = ({message}) => (
    <View style={styles.empty}>
        <Text style={styles.message}>{message}</Text>
    </View>
)

const couleurs = {
    primaire: '#1976D2'
}

const styles = StyleSheet.create({
    empty: {
        padding: 12,
        borderBottomWidth: 4,
        borderBottomColor: couleurs.primaire
    },
    message: {
        alignSelf: 'center',
    }
})
