import { toast } from 'react-toastify';

const handleRSVP = async () => {
  try {
    await rsvpEvent(event._id);
    toast.success('RSVP successful! You will receive a reminder before the event.');
  } catch (error) {
    toast.error('Error RSVPing to event');
    console.error('Error RSVPing to event', error);
  }
};
