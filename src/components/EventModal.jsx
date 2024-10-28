import React from 'react';
import { X, Calendar, MapPin, Clock, Tag } from 'lucide-react';

const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-all"
          >
            <X size={24} />
          </button>
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
          <div className="space-y-3 text-gray-600 mb-6">
            <div className="flex items-center">
              <Calendar size={20} className="mr-3" />
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="mr-3" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="mr-3" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center">
              <Tag size={20} className="mr-3" />
              <span>{event.price}</span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            {event.description}
          </p>
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
