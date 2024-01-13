import React from 'react';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const Project = ({ name, emoji, description, mainLink, projectLink }) => {
  return (
    <div className="App">
      <Card 
      color="neutral"
      variant="soft"
      sx={{ width: 360 }}>
        <div>
          <div className="flex justify-start items-center gap-3 my-1">
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
								<OpenInNewIcon />
							</IconButton>
						}
						{projectLink &&
							<IconButton 
							size='lg'
							color="neutral" 
							variant="outlined" 
							onClick={() => { window.open(projectLink, '_blank'); }} 
							sx={{ borderRadius: '50%', ml: 2 }}>
								<GitHubIcon />
							</IconButton>
						}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Project;
