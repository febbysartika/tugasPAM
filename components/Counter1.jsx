import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';

const Counter1 = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Text>
                counter : {counter}
            </Text>
            <Button title="increment" onPress={() => setCounter(counter + 1)} />
            <Button title="decrement" onPress={() => setCounter(counter - 1)} />
            
        </View>
    )
}