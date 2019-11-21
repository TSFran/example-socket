import React, { useState } from 'react';
import socketIOClient from "socket.io-client";
import { Wrapper, BoxMessage, Input, Button } from './styled';
import { useInput } from './hooks/useInput';

export const Form: React.FC = () => {
  const input = useInput();

  const handleSend = () => {
    const isExistMessage: boolean = input.value !== '';
    const socket = socketIOClient(process.env.PATH_SERVER);

    if(isExistMessage) {
      socket.emit('chat message', input.value);
      input.resetValue();
    }
  };

  return(
  <Wrapper>
    <BoxMessage>
      <Input type="text" value={input.value} onChange={input.onChange} />
      <Button onClick={handleSend}>Send</Button>
    </BoxMessage>
  </Wrapper>
  );
};