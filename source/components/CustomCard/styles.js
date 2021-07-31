import { StyleSheet } from 'react-native';
import { heightPercentageToDP, normalize, widthPercentageToDP } from '../../utility/device';
// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: normalize(5),
        justifyContent: "center",
        alignItems: "center",
        width: widthPercentageToDP('19.6%'),
        height: heightPercentageToDP('10%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});
export default styles