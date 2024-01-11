import React from 'react';

import AndroidstudioOriginal from 'devicons-react/lib/icons/AndroidstudioOriginal';
import CplusplusOriginal from 'devicons-react/lib/icons/CplusplusOriginal';
import Css3OriginalWordmark from 'devicons-react/lib/icons/Css3OriginalWordmark';
import D3jsPlain from 'devicons-react/lib/icons/D3jsPlain';
import FirebasePlain from 'devicons-react/lib/icons/FirebasePlain';
import GitOriginal from 'devicons-react/lib/icons/GitOriginal';
import GithubOriginal from 'devicons-react/lib/icons/GithubOriginal';
import GitlabOriginal from 'devicons-react/lib/icons/GitlabOriginal';
import Html5OriginalWordmark from 'devicons-react/lib/icons/Html5OriginalWordmark';
import JavaOriginal from 'devicons-react/lib/icons/JavaOriginal';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import MaterialuiOriginal from 'devicons-react/lib/icons/MaterialuiOriginal';
import MongodbOriginal from 'devicons-react/lib/icons/MongodbOriginal';
import NodejsOriginal from 'devicons-react/lib/icons/NodejsOriginal';
import PythonPlain from 'devicons-react/lib/icons/PythonPlain';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import SassOriginal from 'devicons-react/lib/icons/SassOriginal';
import TailwindcssPlain from 'devicons-react/lib/icons/TailwindcssPlain';
import TypescriptOriginal from 'devicons-react/lib/icons/TypescriptOriginal';
import VscodeOriginal from 'devicons-react/lib/icons/VscodeOriginal';
import VuejsOriginal from 'devicons-react/lib/icons/VuejsOriginal';



function Tech() {
  return (
    <>
			<div className='m-10'>
				<div className='text-4xl font-bold font-txt text-center'>My Tech Stack</div>
				<div className='font-txt text-center mt-2 text-slate-500'>
					Technologies I've been working with recently
				</div>
			</div>
      <div className='flex flex-wrap justify-center items-center gap-12 md:mx-40'>
				<Html5OriginalWordmark size="70"  />
				<Css3OriginalWordmark size="70"  />
				<SassOriginal size="70"  />
				<TailwindcssPlain size="70"  />
				<MaterialuiOriginal size="70"  />
				<D3jsPlain size="70"  />
				<JavascriptOriginal size="70"  />
				<TypescriptOriginal size="70"  />
				<ReactOriginal size="70"  />
				<VuejsOriginal size="70"  />
				<NodejsOriginal size="70"  />
				<MongodbOriginal size="70"  />
				<FirebasePlain size="70"  />
				<PythonPlain size="70"  />
        <CplusplusOriginal size="70"  />
				<JavaOriginal size="70"  />
        <GitOriginal size="70"  />
        <GithubOriginal size="70"  />
        <GitlabOriginal size="70"  />
				<VscodeOriginal size="70"  />
				<AndroidstudioOriginal size="70"  />
      </div>
    </>
  );
}

export default Tech;
