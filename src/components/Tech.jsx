import React from 'react';

import Tooltip from '@mui/joy/Tooltip';


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
    <div className="py-24">
			<div className='mb-16'>
				<div className='text-4xl font-bold font-txt text-center'>My Tech Stack</div>
				<div className='font-txt text-center mt-2 text-slate-500'>
					Technologies I've been working with recently
				</div>
			</div>
      <div className='flex flex-wrap justify-center items-center gap-12 md:mx-40'>
				<Tooltip title="HTML" variant="outlined" arrow placement="top" >
					<div>
						<Html5OriginalWordmark size="70"  />
					</div>
				</Tooltip>

				<Tooltip title="CSS" variant="outlined" arrow placement="top" >
					<div>
				<Css3OriginalWordmark size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Sass" variant="outlined" arrow placement="top" >
					<div>
				<SassOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Tailwind" variant="outlined" arrow placement="top" >
					<div>
				<TailwindcssPlain size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Material UI / Joy UI" variant="outlined" arrow placement="top" >
					<div>
				<MaterialuiOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="D3js" variant="outlined" arrow placement="top" >
					<div>
				<D3jsPlain size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="JavaScript" variant="outlined" arrow placement="top" >
					<div>
				<JavascriptOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="TypeScript" variant="outlined" arrow placement="top" >
					<div>
				<TypescriptOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="React" variant="outlined" arrow placement="top" >
					<div>
				<ReactOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Vue" variant="outlined" arrow placement="top" >
					<div>
				<VuejsOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Node" variant="outlined" arrow placement="top" >
					<div>
				<NodejsOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="MongoDB" variant="outlined" arrow placement="top" >
					<div>
				<MongodbOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Firebase" variant="outlined" arrow placement="top" >
					<div>
				<FirebasePlain size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Python" variant="outlined" arrow placement="top" >
					<div>
				<PythonPlain size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="C++" variant="outlined" arrow placement="top" >
					<div>
        <CplusplusOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Java" variant="outlined" arrow placement="top" >
					<div>
				<JavaOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Git" variant="outlined" arrow placement="top" >
					<div>
        <GitOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Github" variant="outlined" arrow placement="top" >
					<div>
        <GithubOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Gitlab" variant="outlined" arrow placement="top" >
					<div>
        <GitlabOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="VS Code" variant="outlined" arrow placement="top" >
					<div>
				<VscodeOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Android Studio" variant="outlined" arrow placement="top" >
					<div>
				<AndroidstudioOriginal size="70"  />
				</div>
				</Tooltip>
      </div>
    </div>
  );
}

export default Tech;
