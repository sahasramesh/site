import React from 'react';
import Divider from '@mui/joy/Divider';

import Profile from './components/Profile';
import Tech from './components/Tech';
import Project from './components/Project';
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

  const picstokicksDescription =
  `Generate a shoe colorway based on the color palette of any
  inputted image. Open a GUI from the command line, choose an image
  with your native file viewer, and add a name to generate custom kicks.
  Built in Python with OpenCV, PIL, and Tkinter, and repackaged as
  a Discord bot using discord.py and Replit.`

  const blabberDescription =
  `Make 2D speech animation less tedious with Blabber, a command line tool
  that transforms an audio file into a png sequence of timed mouth frames.
  Uses AWS Transcribe and S3 to transform audio into text, the CMU Pronouncing 
  Dictionary to match words to syllabes, and Python to match syllabes to
  mouth shapes.`

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
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12">
        <div className='text-4xl font-bold font-txt m-10 text-center text-slate-50'>Projects</div>
        <div className="flex flex-wrap justify-center items-center gap-5 my-6">
          <Project 
          name={'korvais.com'} 
          emoji={'🎶'} 
          description={korvaisDescription} 
          mainLink={'https://korvais.com/'}
          projectLink={'https://github.com/sahasramesh/korvais'} />
          
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
          name={'PICSTOKICKS'} 
          emoji={'👟'} 
          description={picstokicksDescription} 
          mainLink={'https://sahasramesh.com/picstokicks'}
          projectLink={'https://github.com/sahasramesh/picstokicks'} />

          <Project 
          name={'Blabber'} 
          emoji={'🗣️'} 
          description={blabberDescription} 
          mainLink={'https://www.youtube.com/watch?v=GQyRmB_UWmc'} />
        </div>
      </div>
      <Divider />
      <Footer />
    </>
  );
}

export default App;
