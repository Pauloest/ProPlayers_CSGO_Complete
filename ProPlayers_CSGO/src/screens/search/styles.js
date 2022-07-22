import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#000',
        color: '#BBBBBB',
        fontSize: 25,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',        
        padding: 5
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        backgroundColor: '#BBBBBB',
        borderRadius: 10,
        margin: 5,
        paddingBottom: 5
    },
    textName:{
        margin: 5,
        color:'#16226c'
    },
    textTeam:{
        color:'#16226c'
    },
    textScore:{
        color:'#16226c'
    },
    button: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#BBBBBB',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    addtofavorites: {
        backgroundColor:'#16226c',
        padding: 7,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    input: {
        padding: 10,
        color: '#16226c',
        width: '100%',
        height: 50,
        backgroundColor: '#BBBBBB',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 8,
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 15
    }
})