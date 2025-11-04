import { TypeAnimation } from 'react-type-animation';

const Profile = ({ pic }) => {
  return (
    <>
      <div className="z-1 text-center flex flex-col gap-12 lg:flex-row justify-center items-center bg-gradient-to-r from-red-500 to-orange-500 lg:p-24 py-24">
        <div className="mask1">
          <img src={pic} width='320' alt="Profile" className='translate-x-3' />
        </div>
        <div>
          <div className='text-6xl font-bold font-txt text-slate-50 mb-2'>Sahas Ramesh</div>
            <code>
							<TypeAnimation
								sequence={[
									'Building full stack apps',
									1000,
									'Building developer tools',
									1000,
									'Building data visualizations',
									1000,
									'Building distributed systems',
									1000,
								]}
								wrapper="span"
								speed={35}
								style={{ fontSize: '1.2em', display: 'inline-block', color: 'white' }}
								repeat={Infinity}
							/>
						</code>
        	</div>
      	</div>
    </>
  );
};

export default Profile;
