import { StyleSheet } from "react-native"
import {normalize,widthPercentageToDP,heightPercentageToDP} from '../../utility/device';
const styles = StyleSheet.create({
    cardDataTextStyle:{
        fontWeight:"bold",
        fontSize:normalize(20),
    },
    imageStyle:{
        resizeMode:"contain",
        width: widthPercentageToDP('19%'),
        height: heightPercentageToDP('10%'),
    }
});

export default styles;