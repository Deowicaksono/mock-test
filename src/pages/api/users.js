import { ref, get, child, getDatabase } from "firebase/database";
import firebase from "../../services/firebase";

export default async function getUsers(req,res){
    try{

    const database = getDatabase(firebase);
    const databaseFirebase = await get(child(ref(database), "users"));
    let cekData = Object.values(databaseFirebase.val());
    console.log('masuk api')
    return cekData;

    }catch(err){
        console.log(err,"MASUK ERROR")
    }


}