import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const EventList = ({ events, onEventClick }) => {
    console.log('Rendering EventList with events:', events); 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
          onClick={() => onEventClick(event)}
        >
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <Calendar size={16} className="mr-2" />
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
