import React, {useState} from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import { db } from '../firebase';
import firebase from 'firebase';

function CharInput({channelName, channelId}) {
    const [input, setInput] = useState("");

    const sendMessage = (e) =>{
        e.preventDefault();
        if(!channelId){
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Peter',
            userImage: 'https://media-exp1.licdn.com/dms/image/C4E03AQFo7MUuazOnnw/profile-displayphoto-shrink_800_800/0/1597355012965?e=1640217600&v=beta&t=m6v7l64AupYWG4x0u0smGj7ZVNt7h7we7ZZLSg5I80c'

        })
    }

    

    return (
        <ChatInputContainer>
            <form>
               <input 
                value = {input}
                onChange = {(e)=> setInput(e.target.value)}
                placeholder = {`Message #ROOM`}/> 
               <Button hidden type = 'submit' onClick = {sendMessage}>
                   SEND
               </Button>
            </form>
            
        </ChatInputContainer>
    )
}

export default CharInput

const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border:1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none ;
    }

`