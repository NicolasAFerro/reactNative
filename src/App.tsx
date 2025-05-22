import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import Header from './componets/Header/Index'; // Corrigi "componets" para "components"

const App = () => {
    const [name, setName] = useState<string>('Nicolas');
    const [title, setTitle] = useState<string>('LearningReact');

    //Isso é uma função callback, pois estou passando como parametro
    /* Callback */

    //Minha forma
    /* function onButtonClick() {
        if (name === 'Nicolas') setName('Oliver');
        else setName('Nicolas');
    } */
    const handlePressButton = () => {
        //assim voce gerencia o estado do obj certinho garantindo que seja uma
        //das duas
        setName(old => {
            if (old === 'Nicolas') return 'oliver';
            else return 'Nicolas';
        });
    };
    return (
        <SafeAreaView style={styles.App}>
            <Header name="VNL" title="LIGA DS NAÇÕES" />
            <Button
                title="Change Name"
                /* onPress={onButtonClick} */ onPress={
                    handlePressButton
                }></Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default App;
