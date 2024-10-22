/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore, where, query, addDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDDsYc9dfuWegNzBEHI6edIwvSbbVkglo",
    authDomain: "react-dietetica-curcuma.firebaseapp.com",
    projectId: "react-dietetica-curcuma",
    storageBucket: "react-dietetica-curcuma.appspot.com",
    messagingSenderId: "768416526553",
    appId: "1:768416526553:web:96984c31dddc28463a8ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//enviar un solo prod
export async function ObtenerProd(id) {
    const docRef = doc(db, 'productos-diet', id);

    try{
        const snapshot = await getDoc(docRef)
        if (snapshot.exists()){
            return snapshot.data();
        }else{
            console.log("el documento no existe")
        }

    }catch(error){
        console.log(error);
    }
}

//enviar toda una colección
export async function ObtenerProds() {
    try{
        const querySnapshot = await getDocs(collection(db, 'productos-diet'))
        if (querySnapshot.size!==0) {
            const listaProductos = querySnapshot.docs.map(producto =>{
                return {
                    id: producto.id,
                    ...producto.data()
                }
            })
            return listaProductos;
        }else{
            console.log(error)
        }
    }catch(error){
        console.log(error);
    }
}

//filtrar por cat
export async function FiltroProds(categoria) {
    try{
    const filtrarCat = query(collection(db, "productos-diet"), where("categoria","==",categoria));
    const querySnapshot = await getDocs(filtrarCat)
    if (querySnapshot.size!==0) {
        const listaProductos = querySnapshot.docs.map(producto =>{
            return {
                id: producto.id,
                ...producto.data()
            }
        })
        return listaProductos;
    }else{
        console.log(error)
    }
    }catch(error){
        console.log(error)
    }
}

//enviar ordenes
export async function enviarOrdenes(orden){
    const ordenesCollect = collection(db, "ordenes-diet");

    try{
        const docRef = await addDoc(ordenesCollect, orden)
        return docRef.id;
    }catch (error){
        console.log(error)
    }
}