import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBvmCD_4TjoE6AMkdcj6AlV1VwBqYA5uHI',
  authDomain: 'mernstack-practice-3c966.firebaseapp.com',
  projectId: 'mernstack-practice-3c966',
  storageBucket: 'mernstack-practice-3c966.appspot.com',
  messagingSenderId: '335539957510',
  appId: '1:335539957510:web:06065cc3adbf34cdb2f887',
};

const app = initializeApp(firebaseConfig);

const globalAuth = getAuth(app);
export default globalAuth;
