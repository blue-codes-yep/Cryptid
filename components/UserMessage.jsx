import React, { Component } from 'react'
import styled from "styled-components";
import { Store, CTX } from './Store'

const UserMessage = () => {
    const { allChats, sendChatAction } = React.useContext(CTX);
    const channel = Object.keys(allChats);
    const [activeChannel, changeActiveChannel] = React.useState(channel[0])

    return (
        <div>
            <div>
                {
                    allChats[activeChannel].map((chat, i) => (
                        <UserMessageWrapper key={i}> <UserName><p>{chat.from}</p></UserName><UserMessageStyle><p>{chat.msg}</p></UserMessageStyle></UserMessageWrapper>
                    ))
                }
            </div>
        </div>
    )
}

const UserName = styled.div`
color: white;
height: 50px;
width: 50px;
margin-right: 50px;
`

const UserMessageWrapper = styled.div`
display: flex;
height: 40px;
width: 500px;
color: white;
`

const UserMessageStyle = styled.div`
color: white;


`
export default UserMessage;