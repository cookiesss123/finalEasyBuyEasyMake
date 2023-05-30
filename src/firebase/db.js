import { initializeApp } from 'firebase/app'
// 取得資料
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const { VITE_API_KEY, VITE_AUTH_DOMAIN, VITE_URL, VITE_SENDERID, VITE_APPID, VITE_MEASUREMENTID } = import.meta.env

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  databaseURL: VITE_URL,
  projectId: 'easymakeeasyb',
  storageBucket: 'easymakeeasyb.appspot.com',
  messagingSenderId: VITE_SENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getDatabase(firebaseApp)
const auth = getAuth(firebaseApp)

// export default writeUserData

export { db, auth }
