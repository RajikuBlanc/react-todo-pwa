import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export const initGet = async (uid) => {
  const q = query(
    collection(db, "todo"),
    orderBy("createdAt", "desc"),
    where("uid", "==", uid)
  );

  const querySnapshot = await getDocs(q);

  let todos = [];
  querySnapshot.forEach((doc) => {
    todos.push({
      id: doc.id,
      content: doc.data().content,
      isComplete: doc.data().isComplete,
    });
  });

  return todos;
};

export const addTodo = (content, uid) => {
  addDoc(collection(db, "todo"), {
    content: content,
    uid: uid,
    isComplete: false,
    createdAt: serverTimestamp(),
  });
};

export const todoDelete = (id) => {
  deleteDoc(doc(db, "todo", id));
};

export const toggleComplete = async (id) => {
  const todo = doc(db, "todo", id);
  console.log(todo);
  await updateDoc(todo, {
    isComplete: true,
  });
};
