import React from 'react';

import Tooltip from '@mui/joy/Tooltip';

import AmazonwebservicesOriginalWordmark from 'devicons-react/lib/icons/AmazonwebservicesOriginalWordmark';
import SqliteOriginal from 'devicons-react/lib/icons/SqliteOriginal';
import RaspberrypiOriginal from 'devicons-react/lib/icons/RaspberrypiOriginal';
import OpenglOriginal from 'devicons-react/lib/icons/OpenglOriginal';
import ROriginal from 'devicons-react/lib/icons/ROriginal';
import GithubcodespacesOriginal from 'devicons-react/lib/icons/GithubcodespacesOriginal';
import PlotlyOriginal from 'devicons-react/lib/icons/PlotlyOriginal';
import TensorflowOriginal from 'devicons-react/lib/icons/TensorflowOriginal';


import CplusplusOriginal from 'devicons-react/lib/icons/CplusplusOriginal';
import FirebaseOriginal from 'devicons-react/lib/icons/FirebaseOriginal';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import MaterialuiOriginal from 'devicons-react/lib/icons/MaterialuiOriginal';
import MongodbOriginal from 'devicons-react/lib/icons/MongodbOriginal';
import NodejsOriginal from 'devicons-react/lib/icons/NodejsOriginal';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import SassOriginal from 'devicons-react/lib/icons/SassOriginal';
import TailwindcssOriginal from 'devicons-react/lib/icons/TailwindcssOriginal';


function Tech() {
  return (
    <div className="py-24">
			<div className='mb-16'>
				<div className='text-4xl font-bold font-txt text-center'>My Tech Stack</div>
				<div className='font-txt text-center mt-2 text-slate-500'>
					Tools I've enjoyed working with recently
				</div>
			</div>
      <div className='flex flex-wrap justify-center items-center gap-12 md:mx-40'>
				<Tooltip title="Amazon Web Services" variant="outlined" arrow placement="top" >
					<div>
						<AmazonwebservicesOriginalWordmark size="70"  />
					</div>
				</Tooltip>

				<Tooltip title="SQLite" variant="outlined" arrow placement="top" >
					<div>
						<SqliteOriginal size="70"  />
					</div>
				</Tooltip>

				<Tooltip title="Raspberry Pi" variant="outlined" arrow placement="top" >
					<div>
						<RaspberrypiOriginal size="70"  />
					</div>
				</Tooltip>

				<Tooltip title="OpenGL" variant="outlined" arrow placement="top" >
					<div>
						<OpenglOriginal size="70"  />
					</div>
				</Tooltip>

				<Tooltip title="R" variant="outlined" arrow placement="top" >
					<div>
						<ROriginal size="70"  />
					</div>
				</Tooltip>

				<Tooltip title="Github Codespaces" variant="outlined" arrow placement="top" >
					<div>
						<GithubcodespacesOriginal size="70"  />
					</div>
				</Tooltip>

				<Tooltip title="Plotly" variant="outlined" arrow placement="top" >
					<div>
						<PlotlyOriginal size="70"  />
					</div>
				</Tooltip>

				<Tooltip title="TensorFlow" variant="outlined" arrow placement="top" >
					<div>
						<TensorflowOriginal size="70"  />
					</div>
				</Tooltip>

				<Tooltip title="Sass" variant="outlined" arrow placement="top" >
					<div>
				<SassOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Tailwind" variant="outlined" arrow placement="top" >
					<div>
				<TailwindcssOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Material UI / Joy UI" variant="outlined" arrow placement="top" >
					<div>
				<MaterialuiOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="JavaScript" variant="outlined" arrow placement="top" >
					<div>
				<JavascriptOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="React" variant="outlined" arrow placement="top" >
					<div>
				<ReactOriginal size="70"  />
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
				<FirebaseOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="Python" variant="outlined" arrow placement="top" >
					<div>
				<PythonOriginal size="70"  />
				</div>
				</Tooltip>

				<Tooltip title="C++" variant="outlined" arrow placement="top" >
					<div>
        <CplusplusOriginal size="70"  />
				</div>
				</Tooltip>
      </div>
    </div>
  );
}

export default Tech;
