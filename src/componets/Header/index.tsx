import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {Props} from './types';
const Index = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.Title}>{props.title}</Text>
            <Text style={styles.SubTitle}>{props.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50, // ou marginTop: 10
        borderWidth: 1,
        borderColor: 'red',
    },
    Title: {
        color: 'black',
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'red',
    },
    SubTitle: {
        color: 'black',
        fontSize: 20,
    },
});

export default Index;
