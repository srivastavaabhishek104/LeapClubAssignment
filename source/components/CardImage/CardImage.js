//import liraries
import React from 'react';
import { Text,Image } from 'react-native';

import Card from '../CustomCard/Card';

import styles from './styles';

// create a component
const CardImage = ({isFlipped,text,isInActive}) => {
    return (
        <Card>
             {
                !isInActive ?
                    isFlipped ? <Text style={styles.cardDataTextStyle}>{text}</Text> : <Image style={styles.imageStyle} source={require('../../../assets/flip.jpeg')}/> :
                    <Text style={styles.cardDataTextStyle}>{text}</Text>
             }
        </Card>
    );
};
//make this component available to the app
export default CardImage;
