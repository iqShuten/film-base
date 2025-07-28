//Для запросов с локального IP
import { initializeApp } from "firebase/app";
import { get, getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  databaseURL: import.meta.env.ITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Получение ссылки на базу данных
const db = getDatabase(app);

export async function fetchAllDataFirebase() {
  try {
    const snapshot = await get(ref(db));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("Данные отсутствуют");
      return null;
    }
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
}

