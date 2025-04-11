import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "nordicpro-30630.firebaseapp.com",
  projectId: "nordicpro-30630",
  storageBucket: "nordicpro-30630.firebasestorage.app",
  messagingSenderId: "156353830194",
  appId: "1:156353830194:web:44e7aed0b6dc6a44d80b2b",
  measurementId: "G-7DKLBZQN7L",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addWaiter(waiter: unknown) {
  const docRef = await addDoc(collection(db, "waitingList"), waiter);
}

export async function addCollaborator(collaborator: unknown) {
  const docRef = await addDoc(collection(db, "collaborators"), collaborator);
}
