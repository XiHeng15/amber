
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeAmberInfo() {
    const [infoText, setInfoText] = useState("Loading..."); 
    // fetch api, get current amber alert child info
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://10.200.9.5:3000/people/kid"); // random url for now
                if (!response.ok){
                    setInfoText("Failed to retrieve AMBER ALERT data.");
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                let firstName: string = json.firstName;
                let lastName: string = json.lastName;
                let lastSeen: string = json.lastSeen;
                let date: string = json.date;
                let clothingDetails: string = json.clothingDetails;
                let bounty: number = json.bounty;
                setInfoText(`LAST SEEN ${date} AT: ${lastSeen}\nNAME: ${firstName} ${lastName}\nWEARING: ${clothingDetails}\nBOUNTY: \$${bounty}`);
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
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(200, 101, 21, 0.5)'
    },
    text: {
        fontSize: 24,
        color: '#000'
    }
});