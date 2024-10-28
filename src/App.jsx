import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventModal from './components/EventModal';
import { mockEvents } from './data/mockEvents';

const App = () => {
    console.log('App component rendered');
  const [events, setEvents] = useState(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = mockEvents.filter(event => 
      event.name.toLowerCase().includes(query.toLowerCase()) ||
      event.location.toLowerCase().includes(query.toLowerCase())
    );
    setEvents(filtered);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };
  

  return (
    
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={handleSearch} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Discover Amazing Events
        </h1>
        <EventList 
          events={events} 
          onEventClick={handleEventClick} 
        />
        {selectedEvent && (
          <EventModal 
            event={selectedEvent} 
            onClose={handleCloseModal} 
          />
        )}
      </main>
    </div>
  );
};

export default App;
