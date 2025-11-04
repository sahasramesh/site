import React from 'react';

function About() {
  return (
    <div className="py-24 px-8 md:px-32 text-left bg-white">
      <div className="text-4xl font-bold font-txt mb-8">Hi 👋</div>
      <div className="max-w-3xl text-lg text-slate-600 leading-relaxed font-txt">
        <p className="mb-4">
          I'm a software engineer with an interest in applied cognitive science, web development, and social and computer networking. 
          My research has covered infant mental health tracking through wearable device data, genome neighborhood visualizations for
          protein similarity, and automated solar cell manufacturing powered by machine learning. I've also written and implemented
          network testing software for distributed systems.
        </p>
        <p className="mb-4">
          I play the Indian classical violin, which has given me the opportunity to learn, teach, 
          and perform all over the world. In my spare time, I like 
          to <a className="text-blue-600" href="https://books.sahasramesh.com/" target="_blank" rel="noreferrer">read</a> and <a className="text-blue-600" href="https://sahasramesh.substack.com/" target="_blank" rel="noreferrer">write</a>.
        </p>
      </div>
    </div>
  );
}

export default About;
