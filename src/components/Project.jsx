import React from 'react';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';

import { Open20Filled } from '@ricons/fluent'
import { LogoGithub } from '@ricons/carbon'
import { GitlabFilled } from '@ricons/antd'


const Project = ({ name, emoji, description, mainLink, projectLink, isOnGithub }) => {
  return (
    <div className="App">
      <Card 
      color="neutral"
      variant="soft"
      sx={{ width: 360 }}>
        <div>
          <div className="flex justify-start items-center gap-3 my-1">
            {/* <img src={logo} width="50px" height="50px" alt={name} /> */}
						<div className="text-3xl">{emoji}</div>
            <div className="text-lg font-bold font-txt">{name}</div>
          </div>
          <Divider />
          <div className="text-sm my-4">
            {description}
          </div>
          <div className="flex justify-end">
						{mainLink &&
							<IconButton 
							size='lg'
							color="primary" 
							variant="outlined" 
							onClick={() => { window.open(mainLink, '_blank'); }} 
							sx={{ borderRadius: '50%', p: 1 }}>
								<Open20Filled />
							</IconButton>
						}
						{projectLink &&
							<IconButton 
							size='lg'
							color="neutral" 
							variant="outlined" 
							onClick={() => { window.open(projectLink, '_blank'); }} 
							sx={{ borderRadius: '50%', ml: 2 }}>
								<LogoGithub />
							</IconButton>
						}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Project;
