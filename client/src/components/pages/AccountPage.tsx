import React from 'react';
import EventForm from '../ui/EventForm';
import EventList from '../ui/EventList';
import MenuManager from '../ui/MenuManager';

export default function AccountPage(): JSX.Element {
  return (
    <>
      <MenuManager />
      <EventForm />
      <EventList />
    </>
  );
}
