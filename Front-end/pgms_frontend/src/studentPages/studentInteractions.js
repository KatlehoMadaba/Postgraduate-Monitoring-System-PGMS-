// import React, { useState } from 'react';
// import firebase from 'firebase/app2'
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { getFirestore, collection, addDoc, serverTimestamp, orderBy, query, limit } from 'firebase/firestore';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// const firebaseConfig={
//   apiKey: "AIzaSyCRKDk_siAd3B3Vs4hzV0JX1QOec47VBSU",
//   authDomain: "pgms-f007e.firebaseapp.com",
//   projectId: "pgms-f007e",
//   storageBucket: "pgms-f007e.appspot.com",
//   messagingSenderId: "821809007795",
//   appId: "1:821809007795:web:66da8e5629f79e8f9e34c6",
//   measurementId: "G-DD6Y67Q4VK"
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);

// function StudentInteraction() {
//   const [user] = useAuthState(auth);
//   const [formValue, setFormValue] = useState('');
//   return (
//     <>
//     <div>
//         {messages && messages.map(msg=><ChatMessage key={msg.id} message={msg}/>)}
//         </div>
//         <form onSubmit={sendMessage}>
//             <input value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
//             <button type="submit">Send</button>
//         </form>
//       {user ? <ChatRoom /> : <SignIn />}
//     </>
//   );
// }

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };

//   return (
//     <button onClick={signInWithGoogle}>Sign in with Google</button>
//   );
// }

// function SignOut(){
//     return auth.currentUser &&(
//         <button onClick={()=>auth.signOut}>Sign Out</button>
//     )
// }
// function ChatRoom() {
//   const messagesRef = firestore.collection('messages');
//   const query = messagesRef.orderBy('createdAt').limit(25);

//   const [messages] = useCollectionData(query, { idField: 'id' });
//   const [formValue,setFormValue]= useState('');

//   const sendMessage = async(e)=>{
//     e.preventDefault();
//     const {uid,photoURL}=auth.currentUser;
//     await messagesRef.add({
//         text:formValue,
//         createdAt:firebase.firebase.FieldValue.serverTimestamp(),
//         uid,
//         photoURL
//     });
//     setFormValue('');
//   }
//   return (
//     <div>
//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
//     </div>
//   );
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;
//   const messageClass=uid===auth.currentUser.uid?'sent':'recieved';
//   return (
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL} alt="Avatar" />
//       <p>{text}</p>







//     </div>
//   );
// }

// export default StudentInteraction;
