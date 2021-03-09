import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction } from './store/action';

const Counter = (props) => {
    const data = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    return(
    <View style = {styles.container}>
        <Button title="Tambah" onPress={() => dispatch(addition())} />
        <Text>{data}</Text>
        <Button title="Kurang" onPress={() => dispatch(subtraction())}/>
    </View>
    );
};
export default Counter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});