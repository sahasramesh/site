import React from 'react';
import Project from './components/Project';

function App() {
  const illinimemoriesDescription = 
  `A social media platform built for current and former UIUC
  students. Create memories about special locations on campus,
  add flair to categorize and discover memories, and share
  your unique college experiences with the greater UIUC
  community. Built with React, Joy UI, Express, mongoose, 
  MongoDB and Firebase.`

  const connectusDescription =
  `Built for couples in long distance relationships, ConnectUs
  is a cross platform mobile app dedicated to bringing couples
  closer together. The app provides ways for couples to share
  memories, check in on one another in real time, and create 
  time capsules of their relationship. Built with React Native,
  Firebase, and Expo.`

  const structyDescription =
  `Print a folder's file structure to the console and save it to
  your clipboard with one command. Structy can be used to share 
  complex projects layouts with other developers, spruce up your 
  Github README, or explain file hierarchies 
  to LLMs when debugging code. Download the command-line tool 
  with Homebrew. Built with Node.js and Ruby`

  const chicagoartDescription =
  `Browse hundreds of rare and public domain artworks recently 
  uploaded to the Art Institue of Chicago's online archive. Search 
  for art by name or artist, filter and sort to discover just 
  what you're looking for, and view details for each artwork. Built
  with TypeScript and Axios, images courtesy of the Art Institute of
  Chicago public API.`

  const korvaisDescription =
  `A personal collection of korvais that I have been exposed to 
  in my ten years of playing Indian classical violin. Korvais are 
  mathematical patterns of melody and rhythm used in improvisational
  South Indian classical music. The goal of this project is to
  catalogue and highlight some of the korvais that continue to
  inspire my love for this artform.`

  return (
    <div className="flex flex-wrap justify-center items-center gap-5 mt-6">
      <Project 
      name={'Illini Memories'} 
      emoji={'🌎'} 
      description={illinimemoriesDescription} 
      mainLink={"https://illinimemories.onrender.com/"}
      projectLink={'https://gitlab.com/jcampo37/finalproject'}
      isOnGithub={false} />

      <Project 
      name={'ConnectUs'} 
      emoji={'💞'} 
      description={connectusDescription} 
      projectLink={'https://github.com/vmanep2/cs465project'}
      isOnGithub={true} />

      <Project 
      name={'Structy'} 
      emoji={'🌱'} 
      description={structyDescription} 
      projectLink={'https://github.com/sahasramesh/homebrew-structy'}
      isOnGithub={true} />

      <Project 
      name={'Chicago Art'} 
      emoji={'🖼️'} 
      description={chicagoartDescription} 
      mainLink={'https://sahasramesh.com/chicago-art/'}
      projectLink={'https://github.com/sahasramesh/chicago-art'}
      isOnGithub={true} />

      <Project 
      name={'Korvai Collection'} 
      emoji={'🎶'} 
      description={korvaisDescription} 
      mainLink={'https://sahasramesh.com/rajeshwari/'}
      projectLink={'https://github.com/sahasramesh/rajeshwari'}
      isOnGithub={true} />
    </div>
  );
}

export default App;
