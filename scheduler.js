const cron = require('node-cron');
const Event = require('./models/eventModel');
const sendNotification = require('./utils/nodemailer');

cron.schedule('0 9 * * *', async () => {
  const events = await Event.find({
    date: { $gte: new Date(), $lt: new Date(new Date().setDate(new Date().getDate() + 1)) },
  }).populate('attendees', 'email');

  events.forEach((event) => {
    event.attendees.forEach((attendee) => {
      sendNotification(
        attendee.email,
        `Reminder: Upcoming Event - ${event.title}`,
        `Don't forget about the event "${event.title}" happening on ${new Date(event.date).toLocaleString()}.`
      );
    });
  });
});
