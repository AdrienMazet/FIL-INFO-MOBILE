import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({selected, onSelect}) => (
    <View style={styles.menu}>
        <OptionMenu title="Toutes" selected={selected === 'Toutes'} onPress={() => onSelect('Toutes')}/>
        <OptionMenu title="Actives" selected={selected === 'Actives'} onPress={() => onSelect('Actives')}/>
        <OptionMenu title="Terminées" selected={selected === 'Done'} onPress={() => onSelect('Done')}/>
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu