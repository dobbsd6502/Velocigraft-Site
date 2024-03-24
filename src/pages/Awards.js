import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/footer';
import logo from '../assets/VelocigraftLogoTransparent.png';
import CBIDLogo from '../assets/CBIDLogo.jpg';
import Rice360Logo from '../assets/Rice360Logo.jpg';



const TeamMember = ({ member, isLast }) => {
  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    small: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    logo: {
      width: '100%',
      height: 0,
      paddingBottom: '100%',
      borderRadius: '50%',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }));
  const classes = useStyles();

  const memberComponent = (
    <Grid item xs={12} sm={6} md={4} lg={3} align="center">
      <a href={member.website} target="_blank" rel="noopener noreferrer">
        <div 
          className={classes.logo} 
          style={{ backgroundImage: `url(${member.image})` }}
        />
      </a>
      <h2>{member.name}</h2>
      <p>{member.bio}</p>
    </Grid>
  );

  return isLast ? (
    <Grid container justifyContent="center">
      {memberComponent}
    </Grid>
  ) : (
    memberComponent
  );
};

const OurPeople = () => {
  const teamMembers = [
    {
        name: '2024 Rice 360 Global Health Technologies Design Competition',
        bio: 'Semi-finalist',
        image: Rice360Logo,
        website: 'https://www.rice360.rice.edu/design-competition'
    },
    {
        name: '2024 Johns Hopkins Healthcare Design Competition',
        bio: 'Finalist',
        image: CBIDLogo,
        website: 'https://cbid.bme.jhu.edu/news-events/design-competition/'
    },

  ];

return (
    <div className="team-container">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px' }}>
            <img src={logo} alt="Logo" style={{ width: '20%', minWidth: '100px', maxWidth: '300px', height: 'auto', margin: '0 10px' }} />
            <h1> Awards</h1>
        </div>
        <Grid container spacing={4} style={{ justifyContent: 'center' }}>
            {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} />
            ))}
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px' }}>
        </div>
        <Footer />
    </div>
);
};
export default OurPeople;