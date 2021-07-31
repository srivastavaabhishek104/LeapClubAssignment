//import liraries
import React from 'react';
import { View, } from 'react-native';

import styles from './styles';

// create a component
const Card = ({ children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};



//make this component available to the app
export default Card;
