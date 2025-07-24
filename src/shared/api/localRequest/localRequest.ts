//Для запросов с локального IP
import { initializeApp } from "firebase/app";
import { get, getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQqFSo3-4Ogbo5cOJYzeXgDlNY4f7QKKk",
  authDomain: "film-base-77890.firebaseapp.com",
  databaseURL: "https://film-base-77890-default-rtdb.firebaseio.com",
  projectId: "film-base-77890",
  storageBucket: "film-base-77890.firebasestorage.app",
  messagingSenderId: "354741670102",
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

// fetchAllData().then(data => filmBase = data);
// export { filmBase };