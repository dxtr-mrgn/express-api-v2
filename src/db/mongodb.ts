import { MongoClient } from 'mongodb'
import {SETTINGS} from '../settings';

console.log('MongoDB Connection String: ', SETTINGS.DB_URL);
export const client = new MongoClient(SETTINGS.DB_URL);

export const runDB = async (): Promise<boolean> => {

    try {
        await client.connect();
        await client.db('test').command({ping: 1})
        console.log('Database Connected')
        return true;
    } catch (err) {
        console.error(err);
        await client.close();
        return false
    }

}
