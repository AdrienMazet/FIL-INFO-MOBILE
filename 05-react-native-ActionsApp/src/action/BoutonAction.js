import React from 'react'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

/**
 * Le composant BoutonAction est paramétrable via son nom.
 *
 * Si le nom vaut 'Supprimer' alors le libellé du bouton sera 'Supprimer'.
 *
 */
export const BoutonAction = ({nom, variant, onPress}) => (
    <TouchableHighlight
        onPress={onPress}
        underlayColor='#efefef'
        style={styles.bouton}>
        <Text style={[styles.texte, variant === "delete" ? styles.supprimer : variant === "done" && styles.termine]}>
            {nom}
        </Text>
    </TouchableHighlight>
)
const styles = StyleSheet.create({
    bouton: {
        alignSelf: 'flex-end',
        padding: 7,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5,
    },
    texte: {
        color: '#666666',
    },
    termine: {
        color: 'green',
        fontWeight: 'bold',
    },
    supprimer: {
        color: 'rgba(175, 47, 47, 1)',
    },
})