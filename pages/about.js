import LinkNext from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import PhoneIcon from '@material-ui/icons/Phone';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Text from '../components/button'

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


function GoogleIcon() {
    return <Image unoptimized={true} src="/google.png" width={24} height={24}/>
}
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    borderBottom: `4px solid rgb(255 218 1);`,
  },
  toolbar: {
    flexWrap: 'wrap',
    background: COLOR_BLUE,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(0, 1),
  },
  heroContent: {
    padding: theme.spacing(2, 0, 2),
  },
  cardHeader: {
    'border-bottom': '1px solid rgba(0 0 0 / 20%)',
    backgroundColor:
      theme.palette.type === 'light' ? 'transparent' : 'transparent',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    title: "Cours d'initiation",
    subheader: 'Enfants/Adultes',
    price: {
      on: '55',
      off: '45',
    },
    description: ['6 Elèves max', '1h30', 'Materiel inclus'],
    buttonText: 'Reserver initiation',
    buttonVariant: 'contained',
  },
  {
    title: 'Stage',
    subheader: '5 cours',
    price: {
      on: '250',
      off: '220',
    },
    description: ['6 Elèves max', '1h30', 'Materiel inclus'],
    buttonText: 'Reserver stage',
    buttonVariant: 'contained',
},
{
    title: 'Club',
    subheader: '10 cours',
    price: {
      on: '450',
      off: '400',
    },
    description: ['6 Elèves max', '1h30', 'Materiel inclus'],
    buttonText: 'Reserver club',
    buttonVariant: 'contained',
  },
{
    title: 'Surf Coaching',
    subheader: 'Surfeurs experimentés',
    price: {
      on: '40',
      off: '30'
    },
    description: ['6 Elèves max', '1h30', 'Materiel inclus', '+20€ debrief video'],
    buttonText: 'Reserver coaching',
    buttonVariant: 'contained',
  },
{
    title: 'Coaching Particulier',
    subheader: 'Surfeurs experimentés',
    price: {
      on:'100',
      off:'80',
    },
    description: [ '1h', 'Materiel inclus', 'debrief video inclus'],
    buttonText: 'Reserver coaching particulier',
    buttonVariant: 'contained',
  },
{
    title: 'Cours particuliers',
    subheader: '1 cours',
    price: {
      on: '120',
      off: '100',
    },
    description: ['1h', 'Materiel inclus'],
    buttonText: 'Reserver particulier',
    buttonVariant: 'contained',
  },

];


function Book({onClick}) {
  
  return <center>
    <Box m={2}>
      <Link href="#book" onClick={onClick} >
        <Button  variant="contained" color="primary"><b>Reserver</b></Button>
      </Link>
    </Box>
  </center>
}

function Phone() {
    return <Grid container direction="row" alignItems="flex-end" style={{color: '#ffd900'}}>
    <Grid item><PhoneIcon /></Grid>&nbsp;
    <Grid item>
    <Typography variant="h5" color="inherit" noWrap > + 33 6 29 46 13 63</Typography>
    </Grid>
  </Grid>
}

const COLOR_BLUE = '#0b0d3b'
const COLOR_YELLOW = '#ffd900'
const COLOR_RED = '#d1010f'

const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#fff',
          main: COLOR_BLUE,
          dark: '#000',
          contrastText: 'white',
        },
        secondary: {
          light: COLOR_YELLOW,
          main: COLOR_YELLOW,
          dark: COLOR_YELLOW,
          contrastText: COLOR_BLUE,
        },
    },
    typography: {
      fontFamily: [
        'Didact Gothic',
        'sans-serif',
      ].join(','),
   },});


   const seasonText = {
     'on': 'Pleine Saison: Avril - Octobre',
     'off': 'Basse Saison: Novembre - Mars',
   }

function Pricing({classes, setBookingType}) {

  const [season, setSeason] = React.useState('on');

  const handleSeason = (event, newSeason) => {
    setSeason(newSeason);
  };
  return <>
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography id="formules"  component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{paddingTop:60}}> Formules </Typography>      
    </Container>
    
    <Box display="flex" component="main" justifyContent="center" paddingBottom={5}>
      <ToggleButtonGroup
        value={season}
        exclusive
        onChange={handleSeason}
        aria-label="Saison"
        >
        <ToggleButton value="on" aria-label="Pleine saison">
          Pleine Saison
        </ToggleButton>
        <ToggleButton value="off" aria-label="Basse saison">
          Basse Saison
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
    
    <Box display="flex" component="main" justifyContent="center" paddingBottom={5}>

    <Text>{seasonText[season]}</Text>
    </Box>

    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-start">
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                action={tier.title === 'Pro' ? <StarIcon /> : null}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    {tier.price[season]}
                  </Typography>
                    <Typography variant="h4" color="textSecondary">
                    €
                  </Typography>
                </div>
                <ul>
                  {tier.description.map((line) => (
                    <Typography component="li" variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
              <LinkNext href="#book">
                <Button fullWidth variant={tier.buttonVariant} color="primary" onClick={(event) => {
                  // event.preventDefault();
                  setBookingType(tier.title)}
                  }>
                  {tier.buttonText}
                </Button>
              </LinkNext>
                  
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
}
   
export default function Main() {
  const classes = useStyles();

  const [formState, setForm] = React.useState({ type: tiers[0].title})
  const handleFormChange = function(event) {
    const {name, value} = event.target
    setForm({
      ...formState,
      [name]: value
    })
    console.log({name, value})
  }

  const setBookingType = function(value) {
    setForm({
      ...formState,
      type: value
    })
  }

  return (
    <ThemeProvider theme={theme}>
        <Head>
        <title>Curren Surf School</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet"/>
      </Head>
      <CssBaseline />
      <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div style={{position: 'absolute', top: 5}}><Image unoptimized={true} src="/logo.png" width={100} height={100} /></div>
          <nav style={{marginLeft: 110}}>
            <Link variant="button" color="textPrimary" href="#formules" className={classes.link}>
              <span style={{color: 'white'}}>
                <b>Formules</b>
              </span>
            </Link>

          </nav>
          <Box display="flex" flex={1} justifyContent="flex-end" color="primary.contrastText" >
          <div style={{margin: "2px 5px 0 5px " }}>
              <Link href="#book" style={{textDecoration: 'none'}}>
                <Button variant="contained" color="secondary" >
                  <b>

                  Reserver
                  </b>
                </Button>
              </Link>
            </div>
            <div style={{margin: "0 5px 0 5px " }}>
            <Link href="tel:+33 6 29 46 13 63" color="inherit">
            <span style={{color: COLOR_YELLOW}}>
              <PhoneIcon style={{fontSize: 38}}></PhoneIcon>
            </span>
            </Link>
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      <center style={{paddingTop: 60}}> 
        <Image unoptimized={true} src="/nathan_final.jpg" width={5071} height={2406} layout="responsive"/>
      </center>

      <Book/>

      {/* Hero unit */}
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Box p={2}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Welcome to Curren Surf School</Typography>
        </Box>
        <Box display="flex" justifyContent="center" paddingBottom={5}>
          <Image unoptimized={true} src="/logo.png" width={300} height={300} />
        </Box>
        <Box p={2}>

          <Text>Les Curren sont une famille incontournable dans le monde du surf.</Text>
          <Text>
            L’école Curren Surf School transmet à ses élèves une expertise unique acquise depuis 3 générations.
          </Text>
          <Text>
            Vos moniteurs seront heureux de partager leur passion avec vous pour acquérir rapidement des sensations sur la vague dans un cadre sécurisé. 
          </Text>
          <Text>
            Les petits groupes familiaux de 6 élèves pour un moniteur de surf vous permettront de progresser plus rapidement. 
          </Text>
          <Text>
            Nous proposons également une section exclusive de coaching avancé, avec un suivi video pour les surfeurs les plus expérimentés.
          </Text>
          </Box>
      </Container>

      <Book onClick={() => setBookingType(tiers[0].title)}/>
      <center>

      <Image unoptimized={true} src="/beginners.jpg" width={1605} height={692} layout="responsive"/>
      </center>

      <Pricing classes={classes} setBookingType={setBookingType}></Pricing>

      <Container maxWidth="md" component="main" className={classes.heroContent} >
        <Box p={5}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Join the Family!
          </Typography>
          <Text>
            Les cours sont assurés principalement par Nathan Curren titulaire des diplômes ISA, PSE1 et d’une Carte Professionnelle d’Éducateur Sportif.
          </Text>
          <Text>
            Que vous soyez débutant ou expérimenté, une expérience unique vous attend. Rejoignez l’école Curren Surf School sur Instagram, Facebook et Google Reviews . Nous vous accueillons toute l'année avec plaisir!
          </Text>
        </Box>
      </Container>
      
      <Image unoptimized={true} src="/familly.jpg" width={1200} height={675} layout="responsive"/>

     <Container maxWidth="md" component="main" className={classes.heroContent} >
        <Box p={5} justifyContent="center" >
          <Typography id="book" component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            S'inscrire
          </Typography>
          <Text>
            Il ne vous reste que quelques cliques pour vous lancer, les vagues vous attendent et le plaisir est à porté de main. N’hésitez plus!
          </Text>
          <Form handleFormChange={handleFormChange} values={formState}/>
        </Box>
      </Container> 

      <Container maxWidth="md" className={classes.heroContent} >
        <center>
          <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
            <Grid item>
              <Link href="http://instagram.com/currensurfschool" target="_blank">
                <InstagramIcon/>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.facebook.com/Curren-Surf-School-116677250176599" target="_blank">
                <FacebookIcon/>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://g.page/currensurfschool?gm" target="_blank">
                <GoogleIcon/>
              </Link>
            </Grid>
          </Grid>
        </center>
      </Container>
    </ThemeProvider>
  );
}


function Field({ children, id, name, label, multiline, onChange }) {
  return <Box paddingBottom={2}>
    <TextField name={name} id={id} label={label}  multiline={multiline} fullWidth onChange={onChange}/>
  </Box>
}


function Form({handleFormChange, values}) {

  const onValidate = function(){
    console.log({values})    
  }
  console.log(values.type)
    return <form noValidate autoComplete="off" >

        <Field onChange={handleFormChange} name="lastName" label="Nom" value={values.lastName}/>
        <Field onChange={handleFormChange} name="firstName" label="Prénom" value={values.firstName}/>
        <Field onChange={handleFormChange} name="telephone" label="Téléphone" value={values.telephone}/>
        <Field onChange={handleFormChange} name="email" label="Email" value={values.email}/>
        
        <Box paddingBottom={2}>
          <Select
            id="demo-simple-select"
            name="type"
            fullWidth
            value={values.type}
            style={{marginTop: 14}}
          >
            {tiers.map( ({title}) => <MenuItem value={title}>{title}</MenuItem>)}
          </Select>
        </Box>
        <Field onChange={handleFormChange} name="message" label="Message" multiline />
        <center>
          <Box m={2}>
            <Button variant="contained" color="primary" onClick={onValidate}>Envoyer le formulaire</Button>
          </Box>
        </center>
    </form>
}