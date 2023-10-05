// TODO: Install the following package:
import { openDB } from "idb";

// Define the database name and version
const DB_NAME = "myDatabase";
const DB_VERSION = 1;

// TODO: Complete the initDb() function below:
const initdb = async () => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Create an object store if it doesn't exist
      if (!db.objectStoreNames.contains("myObjectStore")) {
        const store = db.createObjectStore("myObjectStore", {
          keyPath: "id",
          autoIncrement: true,
        });
        // You can define additional object store properties here
      }
    },
  });
  return db;
};

// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email) => {
  const db = await initdb();
  const tx = db.transaction("myObjectStore", "readwrite");
  const store = tx.objectStore("myObjectStore");
  const result = await store.add({ name, home, cell, email });
  await tx.done;
  return result;
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  const db = await initdb();
  const tx = db.transaction("myObjectStore", "readonly");
  const store = tx.objectStore("myObjectStore");
  const data = await store.getAll();
  return data;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  const db = await initdb();
  const tx = db.transaction("myObjectStore", "readwrite");
  const store = tx.objectStore("myObjectStore");
  const result = await store.delete(id);
  await tx.done;
  return result;
};

initdb();
