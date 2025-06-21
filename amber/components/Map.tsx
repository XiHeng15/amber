import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

interface mapProps{
    amberActive: boolean
}
interface Location {
  title: string;
  description: string;
  lat: number;
  long: number;
}

const fetchAllLocations = async (): Promise<Location[]> => {
    try {
        const response = await fetch("http://10.200.9.5:3000/people/locations");
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.log(`${error}`);
        return [];
    }
}

const fetchAmberLocation = async (): Promise<Location[]> => {
    try {
        const response = await fetch("http://10.200.9.5:3000/people/amber");
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return [{
            title: json.title,
            description: json.description,
            lat: json.lat,
            long: json.long,
        }];
    }
    catch (error) {
        console.error(error);
        return [];
    }
}

export default function Map({amberActive}: mapProps) {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
    const load = async () => {
        const res = amberActive ? await fetchAmberLocation() : await fetchAllLocations();
        setLocations(res);
    };
    load();
    }, [amberActive]);

    return (
        <MapView style={styles.map}
            initialRegion={{
            latitude: 43.515314425916664,
            longitude: -80.51357570258793,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05
        }}
        >
            {locations.map((entry, index) => (
                <Marker
                    key={index}
                    coordinate={{latitude: entry.lat, longitude: entry.long}}
                    title={entry.title}
                    description={entry.description}
                />
            ))}
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%'
    }
});