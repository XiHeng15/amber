
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SERVER_URL } from "@/config";

export default function HomeAmberInfo() {
    const [infoText, setInfoText] = useState("Loading..."); 

    // fetch api, get current amber alert child info
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${SERVER_URL}/people/kid`); 
                if (!response.ok){
                    setInfoText("Failed to retrieve AMBER ALERT data.");
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                setInfoText(`LAST SEEN ${json.date} AT: ${json.lastSeen}\nNAME: ${json.firstName} ${json.lastName}\nWEARING: ${json.clothingDetails}\nBOUNTY: \$${json.bounty}`);
            }
            catch (error) {
                setInfoText("Failed to retrieve AMBER ALERT data.");
            }
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{infoText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        padding: 20,
        paddingBottom: '10%',
        marginBottom: '8%',
        marginRight: 20,
        marginLeft: 20,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: '#5e554c'
    },
    text: {
        fontSize: 14,
        color: '#ffcb6d',
    }
});
