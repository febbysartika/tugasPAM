import React, { useReducer } from 'react';
import {View, Text, Button} from 'react-native';

const initialState = {count : 0 };

function counterReducer(state, action){
    switch (action.type) {
        case 'INCREMENT' :
            return { count : state.count + 1}
        case 'DECREMENT' :
            return { count : state.count - 1}
        default :
            throw new Error();
    }
}

export default function Counter(){
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <View>
            <Text>
                counter : {state.count}
            </Text>
            <Button title="increment" onPress={() => dispatch({type: 'INCREMENT'})} />
            <Button title="decrement" onPress={() => dispatch({type: 'DECREMENT'})} />
        </View>
    )
}