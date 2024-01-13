import React from 'react';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import logo from '.././img/logo.png';


const Footer = () => {
  return (
    <div className='bg-white p-10 flex justify-between md:items-end flex-col items-center gap-6 md:flex-row'>
			<img src={logo} width='50' alt='Logo' />
      <div className="flex justify-end md:gap-24 flex-col gap-6 items-center md:flex-row">
				<Link 
				underline='none'
				color='neutral'
				onClick={() => { window.open('mailto:sahasramesh03@gmail.com', '_blank'); }}>
					<div className="font-txt">contact@sahasramesh.com</div>
				</Link>
				<div className="flex space-x-8">
					<IconButton 
					size='md'
					variant="soft" 
					onClick={() => { window.open("https://github.com/sahasramesh", '_blank'); }} 
					sx={{ borderRadius: '50%', p: 1 }}>
							<GitHubIcon />
					</IconButton>

					<IconButton 
					size='md'
					variant="soft" 
					onClick={() => { window.open('https://twitter.com/sahasramesh', '_blank'); }} 
					sx={{ borderRadius: '50%', p: 1 }}>
							<XIcon />
					</IconButton>

					<IconButton 
					size='md'
					variant="soft" 
					onClick={() => { window.open('https://www.linkedin.com/in/sahas-ramesh-533247225/', '_blank'); }} 
					sx={{ borderRadius: '50%', p: 1 }}>
							<LinkedInIcon />
					</IconButton>
				</div>
      </div>
    </div>
  );
};

export default Footer;
