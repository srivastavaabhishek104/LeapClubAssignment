import { StyleSheet } from "react-native";
import Color from "../../utility/colors";
import { fontScale, normalize } from '../../utility/device';

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        //backgroundColor:Color.white
    },
    cardContainer: {
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: Color.white,
        marginHorizontal:normalize(10),
        paddingVertical:normalize(10),
        paddingHorizontal:normalize(5),
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    movesContainer:{
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:normalize(20),
    },
    moveTextStyle:{
        fontWeight:"bold",
        fontSize:fontScale(14),
    },
    moveValueStyle:{
        fontWeight:"normal",
    },
    headingText:{
        fontWeight:"bold",
        fontSize:fontScale(14),
        marginTop:normalize(20),
        marginBottom:normalize(10),
        textAlign:"center"
    },
    subHeadingText:{
        marginHorizontal:normalize(15),
        marginBottom:normalize(10),
        fontSize:fontScale(12),
        textAlign:"center"
    },
    buttonConatiner:{
        marginVertical:normalize(10),
    }
});

export default styles;