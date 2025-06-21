
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
        padding: 10,
        marginBottom: '6%',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        backgroundColor: 'rgba(200, 101, 21, 0.75)'
    },
    text: {
        fontSize: 24,
        color: '#000'
    }
});