import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './componets/Header/Index'; // Corrigi "componets" para "components"

const App = () => {
    const [name, setName] = useState<string>('Nicolas');
    return (
        <SafeAreaView style={styles.App}>
            <Header name={name} title="learning React Native" />
            <Header name="VNL" title="LIGA DAS NAÇÕES" />
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
