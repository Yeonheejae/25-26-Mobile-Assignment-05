import { Text,Pressable,StyleSheet } from "react-native";

function Button({title,onClick}) {
    return(
        <Pressable style = {styles.button} onPress={()=> onClick(1)}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
        flex: '2 2',
        backgroundColor: 'orange',
        width:'80',
        height: '80',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10',
    },

    text: {
    fontSize: 30,
    color : 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button