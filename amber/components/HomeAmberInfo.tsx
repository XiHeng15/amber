
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeAmberInfo() {
    const [infoText, setInfoText] = useState("Loading..."); 
    // fetch api, get current amber alert child info
    useEffect(() => {
        async () => {
            try {
                const response = await fetch("https://localhost:8080/people/amber"); // random url for now
                if (!response.ok){
                    setInfoText("Failed to retrieve AMBER ALERT data.");
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                let firstName: string = json.firstName;
                let lastName: string = json.lastName;
                let lastSeen: string = json.lastSeen;
                let clothingDetails: string = json.clothingDetails;
                let bounty: number = json.bounty;
                setInfoText(`LAST SEEN: ${lastSeen}\nNAME: ${firstName} ${lastName}\nWEARING: ${clothingDetails}\nBOUNTY: \$${bounty}`);
            }
            catch (error) {
                setInfoText("Failed to retrieve AMBER ALERT data.");
            }
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text>{infoText}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        color: '#000'
    }
});