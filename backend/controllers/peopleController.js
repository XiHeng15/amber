
import {Person, Kid} from '../models/Person.js';

export async function getAllLocations(req, res) {
    console.log("attempting to get all locations...");
    try {
        const users = await Person.find(); // query the database
        const locations = users.map(user => ({"title": user.firstName + " " + user.lastName, "description": user.date + "\nAge:" + user.age,
             "lat": user.lat, "long": user.long}));
        res.json(locations);
    } 
        catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
}

export async function getAmberLocation(req, res) {
    res.send(`User with ID ${id}`);
}

export async function getTitleKid(req, res) {
    console.log("getting home screen child info...");
    const kid = await Kid.find();
    res.json(kid[0]);
}

