import React, { useState } from 'react';
import socketIOClient from "socket.io-client";
import { Wrapper, BoxMessage, Input, Button } from './styled';

export const Form: React.FC = () => {
  const [ message, setMessage ] = useState('');

  const onChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSend = () => {
    const isExistMessage: boolean = message !== '';
    const socket = socketIOClient(process.env.PATH_SERVER);

    if(isExistMessage) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return(
  <Wrapper>
    <BoxMessage>
      <Input type="text" value={message} onChange={onChange} />
      <Button onClick={handleSend}>Send</Button>
    </BoxMessage>
  </Wrapper>
  );
};