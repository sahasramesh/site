import React from 'react';
import Profile from './components/Profile';
import Tech from './components/Tech';
import Project from './components/Project';
import Header from './components/Header';
import Footer from './components/Footer';

import profile from './img/profile.png';

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
  your clipboard with one command. Share complex projects layouts 
  with other developers, spruce up your 
  Github README, or explain file hierarchies 
  to LLMs when debugging code. Download the command-line tool 
  with Homebrew. Built with Node.js and Ruby.`

  const chicagoartDescription =
  `Browse hundreds of rare and public domain artworks recently 
  uploaded to the Art Institue of Chicago's online archive. Search 
  for art by name or artist, filter and sort to create specific queries
  , and view details for each artwork. Built
  with TypeScript and Axios, images courtesy of the Art Institute of
  Chicago public API.`

  const korvaisDescription =
  `Korvais are mathematical patterns of melody and rhythm used in improvisational
  South Indian classical music. This is a personal collection of korvais that I have been exposed to 
  in my ten years of playing Indian classical violin. The goal of this project is to
  catalogue and highlight korvais that
  inspire my love for this artform.`

  return (
    <>
      <Profile pic={profile}/>
      <Tech />
      <div className='text-4xl font-bold font-txt m-10 mt-24 text-center'>Projects</div>
      <div className="flex flex-wrap justify-center items-center gap-5 my-6">
        <Project 
        name={'Illini Memories'} 
        emoji={'🌎'} 
        description={illinimemoriesDescription} 
        mainLink={"https://illinimemories.onrender.com/"} />

        <Project 
        name={'ConnectUs'} 
        emoji={'💞'} 
        description={connectusDescription} 
        projectLink={'https://github.com/vmanep2/cs465project'} />

        <Project 
        name={'Structy'} 
        emoji={'🌱'} 
        description={structyDescription} 
        projectLink={'https://github.com/sahasramesh/homebrew-structy'} />

        <Project 
        name={'Chicago Art'} 
        emoji={'🖼️'} 
        description={chicagoartDescription} 
        mainLink={'https://sahasramesh.com/chicago-art/'}
        projectLink={'https://github.com/sahasramesh/chicago-art'} />

        <Project 
        name={'Korvai Collection'} 
        emoji={'🎶'} 
        description={korvaisDescription} 
        mainLink={'https://sahasramesh.com/rajeshwari/'}
        projectLink={'https://github.com/sahasramesh/rajeshwari'} />
      </div>
      {/* <Header /> */}
      <Footer />
    </>
  );
}

export default App;
