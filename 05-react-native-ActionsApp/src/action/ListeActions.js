import React from 'react'
import {View} from 'react-native'
import {UneAction} from './UneAction'


export const ListeActions = ({ actions , completeAction, deleteAction, filter }) => {

    return (
        <View>
            {actions
                .filter(a => {
                    if (filter === "Actives")
                        return !a.done;
                    else if (filter === "Done")
                        return a.done;
                    else
                        return true;
                })
                .map((action, index) =>
                <UneAction action={action}
                           completeAction={() => completeAction(action)}
                           deleteAction={() => deleteAction(action)} key={index}/>
            )}
        </View>
    )
}