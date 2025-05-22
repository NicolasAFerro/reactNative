import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Header from './componets/Header/Index'; // Corrigi "componets" para "components"

const App = () => {
    const [name, setName] = useState<string>('Nicolas');
    const [title, setTitle] = useState<string>('LearningReact');

    /* Effect */
    //#region
    useEffect(() => {
        //console.log('mountingg');
        setTitle(oldTitle => {
            //console.log('updateing');
            if (oldTitle === 'LIGA DS NAÇÕES') return 'Cria de RJ';
            else return 'LIGA DS NAÇÕES';
        });
        //return console.log('unmountig');
    }, [name]);
    //#endregion

    /* Callback */
    //#region
    //Minha forma--------------------------------------------------
    //Isso é uma função callback, pois estou passando como parametro
    /* function onButtonClick() {
        if (name === 'Nicolas') setName('Oliver');
        else setName('Nicolas');
    } */

    //------------------------------------
    const handlePressButton = () => {
        //assim voce gerencia o estado do obj certinho garantindo que seja uma
        //das duas
        setName(old => {
            if (old === 'Nicolas') return 'oliver';
            else return 'Nicolas';
        });
    };
    //Use CallBack-------------------------------------------
    // usando UseCallBack, acessa um CallBack sem alocar memoria
    // ou instaciar a função novamente na memória quando o componente
    // é construido;
    /* é um event listener na função, que só atualiza a função quando sua depencia é atualizada */
    //se deixar sem depencia, não cria a função, mas se eu passar como dependencia, que fica escutando, ai atualiza
    /*   console.log(`state: ${name}`);
    const handlePressButton = useCallback(() => {
        console.log('to aquyi');
        if (name === 'Nicolas') {
            console.log(`callback: ${name}`);
            setName('oliver');
        } else setName('Nicolas');
    }, [name]); */

    //#endregion

    //useMemo ---------------------------------------
    /*  ao inves de manter uma função, manter um valor na memória que não
    será atualizado com o re-render do componente */
    /* mesma CompressionStream, se eu não acrescentar no event listener ele não atualiza e mantém
    o estado na memória */
    /*  const nameChanged = useMemo(() => {
        return `${name} | ${new Date()}`;
    }, [name]); */

    /* Refs */
    //também é uma referencia em valor na memória, não importa quantas vezes ele re-render,
    /* o valor em memória é constante */
    const inputRef = useRef<TextInput>({} as TextInput);
    return (
        <SafeAreaView style={styles.App}>
            <Header name={name} /* name={nameChanged} */ title={title} />
            <Button
                title="Change Name"
                onPress={handlePressButton} /* onPress={() => {
                    console.log('to press');
                    inputRef.current.blur();
                }} */
            />
            {/*   <TextInput
                style={styles.Input}
                ref={inputRef}
                onChangeText={text => setName(text)}></TextInput> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'white',
    },
    /*     Input: {
        backgroundColor: 'rgba(0,0,0,0.5)',

        marginTop: 20,
        color: 'white',
        fontSize: 14,
    }, */
});

export default App;
