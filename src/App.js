import './App.css';
import contacts from './contacts.json'
import React, { useState, useEffect } from 'react';



function App() {
  let [contactArr, setContacts] = useState(()=> {
   return contacts.splice(0,5);
  })

  const ContactListItem = () => {
    return contactArr.map((contact, index) => {
      return (
        <tr>
          <td><img src={contact.pictureUrl} alt={contactArr[0].name}></img></td>
          <td>{contact.name}</td>
          <td>{Math.round((contact.popularity)*100)/100}</td>
          <td><button onClick={(event)=>Delete(index)}>Delete</button></td>
        </tr>
      )
    })
  }

  const Delete = (index) => {
    let newArr = [...contactArr];
    newArr.splice(index,1)
    setContacts(newArr)

  }

  const AddRandomContact = () => {
    let newArr = [...contactArr];
    let randInt = Math.floor(Math.random() * contacts.length);
    newArr.push(contacts[randInt]);
    setContacts(newArr);
  }

  const SortContactsByName = () => {
    let newArr = [...contactArr];
    newArr.sort((a,b) => {
      if (a.name < b.name){
        return -1;
      } else if (a.name > b.name){
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(newArr);
  }


  const Pop = () => {
    let newArr = [...contactArr];
    newArr.sort((a,b) => b.popularity-a.popularity);
    setContacts(newArr)
  } 


   return (
     
     <>
     <h1>Ironhack Contacts</h1>
     <button onClick={AddRandomContact}>Generate Random Contact</button>
     <button onClick={SortContactsByName}>Sort Contacts By Name</button>
     <button onClick={Pop}>Sort Contacts By Popularity</button>
     <table>
       <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Remove</th>
          </tr>
       </thead>
       <tbody>
         <ContactListItem />
       </tbody>
     </table>
     </>
   );
}

export default App;
