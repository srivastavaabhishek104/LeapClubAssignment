//import liraries
import React from 'react';
import { Text } from 'react-native';

import Card from '../CustomCard/Card';

import styles from './styles';

// create a component
const CardImage = ({isFlipped,text,textStyle,isInActive}) => {
    return (
        <Card>
             {
                !isInActive ?
                    isFlipped ? <Text style={styles.cardDataTextStyle}>{text}</Text> : <Text>Press Me!</Text> :
                    <Text style={styles.cardDataTextStyle}>{text}</Text>
             }
        </Card>
    );
};
//make this component available to the app
export default CardImage;
