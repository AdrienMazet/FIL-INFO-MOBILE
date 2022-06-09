import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({selected, onSelect}) => (
    <View style={styles.menu}>
        <OptionMenu title="Tous" selected={selected === 'Tous'} onPress={() => onSelect('Tous')}/>
        <OptionMenu title="Active" selected={selected === 'Active'} onPress={() => onSelect('Active')}/>
        <OptionMenu title="Done" selected={selected === 'Done'} onPress={() => onSelect('Done')}/>
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