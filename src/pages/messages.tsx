import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/messagesPage/Header';
import LatestMessage from '@/components/messagesPage/LatestMessage';
import MessagesList from '@/components/messagesPage/MessagesList';
import React from 'react';

const MessagesPage = () => {
  return (
    <AppLayout>
      <Header />
      <LatestMessage />
      <MessagesList />
    </AppLayout>
  );
};

export default MessagesPage;
