import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';

interface mapProps{
    amberActive: boolean
}
interface Location {
  title: string;
  description: string;
  lat: string;
  long: string;
  date: string;
}

const fetchAllLocations = async (): Promise<Location[]> => {
    try {
        const response = await fetch("https://localhost:8080/people/locations"); // random url for now
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
        const response = await fetch("https://localhost:8080/people/amber"); // random url for now
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return [{
            title: json.title,
            description: json.description,
            lat: json.lat,
            long: json.long,
            date: json.date,
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
        <MapView
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
                    coordinate={{latitude: parseFloat(entry.lat), longitude: parseFloat(entry.long)}}
                    title={entry.title}
                    description={entry.description}
                />
            ))}
        </MapView>
    );
}
