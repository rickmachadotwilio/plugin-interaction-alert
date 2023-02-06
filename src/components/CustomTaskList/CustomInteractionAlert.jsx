import React, { useState, useEffect } from 'react';

const CustomInteractionAlert = () => {
  const [audio, setAudio] = useState(
    new Audio('https://cdn.pixabay.com/download/audio/2022/10/16/audio_10bebc0b9f.mp3?filename=call-to-attention-123107.mp3')
  );

  // Play the audio file when the task alert is triggered - volume 30%
  const playAudio = () => {
    audio.volume = 0.3;
    audio.play();
  };

  // Add a Notification Listner and Play Audio File with notification id is IncomingTask
  useEffect(() => {
    Twilio.Flex.Notifications.addListener("beforeAddNotification", (payload) => {
      //console.log('#### Notification Add Listener Payload ', payload);
      if (payload.id === "IncomingTask") {
        console.log('##### Custom IncomingTask Notification');
        playAudio();
      }
    });
  }, []);

  return <></>;
};

export default CustomInteractionAlert;