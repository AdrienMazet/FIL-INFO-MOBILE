import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Voyage } from "./ListerVoyages";
import { AjouterVoyage } from "./AjouterVoyage";

export const Tab = createBottomTabNavigator();

export function MyTabs({voyages, onAddVoyage, onAddLieu}) {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Lister des voyages">
                    {props => <Voyage {...props} voyages={voyages} onAddLieu={onAddLieu}/>}
                </Tab.Screen>
                <Tab.Screen name="Ajouter un voyage">
                    {props => <AjouterVoyage {...props} onAddVoyage={onAddVoyage}/>}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
