import 'react-native-gesture-handler';
import {useState} from 'react';

import {MyTabs} from "./src/MenuPrincipal";


export default function App() {

    const [voyages, setVoyages] = useState([]);

    const addVoyage = (voyage) => {
        setVoyages((oldVoyages) => [...oldVoyages, voyage]);
    }

    const addLieu = (voyage, lieu) => {
        const newVoyages = JSON.parse(JSON.stringify(voyages));
        const newVoyage = JSON.parse(JSON.stringify(voyage));
        newVoyage.lieux.push(lieu);
        const index = newVoyages.findIndex(v => v.id === voyage.id);
        newVoyages.splice(index, 1, newVoyage);
        setVoyages(newVoyages);
    }

    return (
        <MyTabs screenProps={{}}
                voyages={voyages}
                onAddVoyage={addVoyage}
                onAddLieu={addLieu}/>
    );
}
