import React from 'react';
import EventForm from '../ui/EventForm';
import EventList from '../ui/EventList';

export default function AccountPage(): JSX.Element {
  return (
    <>
      <EventForm />
      <EventList />
    </>
  );
}
