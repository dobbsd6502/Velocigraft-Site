import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/footer';
import logo from '../assets/VelocigraftLogoTransparent.png';
import dalhartHeadshot from '../assets/DalhartHeadshot.jpg';
import aarushiHeadshot from '../assets/AarushiHeadshot.jpg';
import ashleyHeadshot from '../assets/AshleyHeadshot.jpg';
import ojasHeadshot from '../assets/OjasHeadshot.jpg';
import adityaHeadshot from '../assets/AdityaHeadshot.jpg';
import christineHeadshot from '../assets/ChristineHeadshot.jpg';
import joanneHeadshot from '../assets/JoanneHeadshot.jpg';
import pareeHeadshot from '../assets/PareeHeadshot.jpg';
import thoyaHeadshot from '../assets/ThoyaHeadshot.jpg';



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
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
        name: 'Dalhart Dobbs',
        bio: 'Cellular and Tissue Engineering - 2025',
        image: dalhartHeadshot,
        website: 'https://www.linkedin.com/in/dalhart-dobbs/'
    },
    {
        name: 'Aarushi Pant',
        bio: 'Immunoengineering 2026',
        image: aarushiHeadshot,
        website: 'https://www.linkedin.com/in/aarushi-pant-6885001b3/'
    },
    {
        name: 'Ashley Cluff',
        bio: 'Neuroengineering 2025',
        image: ashleyHeadshot,
        website: 'https://www.linkedin.com/in/ashleycluff/'
    },
    {
        name: 'Joanne Wang',
        bio: 'Biomedical Data Science 2024',
        image: joanneHeadshot,
        website: 'https://www.linkedin.com/in/jaeyoon-wang/'
    },
    {
        name: 'Aditya Srinivasan',
        bio: '2027',
        image: adityaHeadshot,
        website: 'https://www.linkedin.com/in/aditya-shrinivasan-26ba73264/'
    },
    {
        name: 'Christine Wang',
        bio: 'IDK 2024',
        image: christineHeadshot,
        website: 'https://www.linkedin.com/in/christinewang1001/'
    },
    {
        name: 'Thoya Raman',
        bio: '2027',
        image: thoyaHeadshot,
        website: 'https://www.linkedin.com/in/thoya-raman/'

    },
    {
        name: 'Paree Sharma',
        bio: '2027',
        image: pareeHeadshot,
        website: 'https://www.linkedin.com'
    },
    {
        name: 'Team Leader: Ojas Chahal',
        bio: 'Cellular and Tissue Engineering 2025',
        image: ojasHeadshot,
        website: 'https://www.linkedin.com/in/ojaschahal/'
    },
  ];

  return (
    <div className="team-container">
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px' }}>
  <h1>Meet The </h1>
  <img src={logo} alt="Logo" style={{width: '20%', minWidth: '100px', maxWidth: '300px', height: 'auto', margin: '0 10px'}} />
  <h1> Team</h1>
</div>
        <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} isLast={index === teamMembers.length - 1} />
            ))}
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px' }}>
            </div>
        <Footer />
    </div>
);
};
export default OurPeople;