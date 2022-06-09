import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'

/**
 * Le composant saisie est un composant sans état.
 *
 * Il reçoit deux propriétés du composant parent :
 *
 * * `texteSaisie` : il s'agit du libellé à afficher dans le champ texte de saisie. Il va alimenter la propriété `value` de l'élément <TextInput>
 * * `evtTexteModifie`  : fonction permettant de notifier le composant parent qu'une modification a eu lieu.
 */
export const Saisie = ({texteSaisie, evtTexteModifie}) => (
    <View style={styles.conteneurSaisie}>
        <TextInput
            style={styles.texteSaisie}
            value={texteSaisie}
            onChangeText={(value) => evtTexteModifie(value)}
            placeholder='Quelle prochaine action ?'
            placeholderTextColor='#CACACA'
            selectionColor='#666666'/>
    </View>
)


const styles = StyleSheet.create({
    conteneurSaisie: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: {width: 2, height: 2},
    },
    texteSaisie: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10,
    },
})