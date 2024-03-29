import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Icons from '../../components/Icons/Icons.js'
import { useState, useEffect } from 'react'
import profilePicture from '../../assets/profilePicture.jpg'

const useStyles = makeStyles(theme => ({
  homeContainer: {
    padding: '20px 30px',
    [theme.breakpoints.up('sm')]: {
      padding: '45px 50px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '45px 80px'
    }
  },
  avatar: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '75%',
      height: '75%'
    }
  },
  avatarContainer: {
    padding: '20px 10px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '50px',
      paddingLeft: '30px'
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '20px',
      paddingBottom: '25px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '45px'
    }
  },
  aboutMe: {
    marginTop: '20px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '25px'
    }
  },
  quoteContainer: {
    paddingTop: '50px'
  },
  quote: {
    padding: '20px 0',
    fontFamily: 'Poppins',
    fontWeight: 100
  },
  dividerContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  divider: {
    width: '50%'
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px'
  },
  paper: {
    padding: '6px 16px',
    [theme.breakpoints.up('md')]: {
      padding: '6px 40px'
    }
  },
  isVisible: {
    display: 'inline'
  },
  notVisible: {
    visibility: 'hidden'
  }
}))

function Home(props) {
  const [toggle, setToggle] = useState(false)

  const {
    homeContainer,
    avatar,
    avatarContainer,
    title,
    divider,
    dividerContainer,
    quote,
    quoteContainer,
    aboutMe,
    paper,
    isVisible,
    notVisible
  } = useStyles()

  useEffect(() => {
    setTimeout(() => {
      setToggle(!toggle)
    }, 500)
  }, [toggle])

  return (
    <Grid container className={homeContainer}>
      <Grid item xs={12} sm={6} md={8} lg={8}>
        <Paper elevation={3} className={paper}>
          <Typography variant='h5' className={title}>
            Hey! I'm Stefana
            <span className={toggle ? isVisible : notVisible}>_</span>
          </Typography>
        </Paper>

        <Typography className={aboutMe}>
          Happy to have you here! I am a Frontend enthusiast and an uncoditional animals lover, based in Cluj-Napoca, Romania.
          I am curios, determined, detail-oriented and passionate about Web since high school. I studied Web Development at The Informal School of IT, which I successfully graduated in March 2021. Since then, I have been working with various Frontend technology stacks, such as Angular, TypeScript, ReactJS, but also broke my confort zone barriers with the Backend technologies, for example MongoDB, Camunda, AzureDevops and .NET.
          I also followed an unexpected, but exciting path, beside the Software Development position, by becoming the SCRUM Master for my engineering team, role for which I completed the Professional SRUM Master I course.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <div className={avatarContainer}>
          <Avatar
            alt='profile-picture'
            src={profilePicture}
            className={avatar}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} className={quoteContainer}>
        <Divider variant='middle' />
        <Typography align='center' variant='h6' className={quote}>
          Make everyday a little less ordinary!
        </Typography>
        <div className={dividerContainer}>
          <Divider variant='middle' className={divider} />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Icons />
      </Grid>
    </Grid>
  )
}

export default Home
