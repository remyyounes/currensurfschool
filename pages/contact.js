import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Image from 'next/image'


function Field({ children, id, label, multiline }) {
    return <div>
        <TextField id={id} label={label}  multiline={multiline} fullWidth/>
    </div>
}

function Form() {
    return <form noValidate autoComplete="off" >

        <Field label="Nom" />
        <Field label="Prénom" />
        <Field label="Téléphone" />
        <Field label="Email" />
        
        <InputLabel id="demo-simple-select-label">Formules</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
        >
          <MenuItem value={10}>Cours de Surf</MenuItem>
          <MenuItem value={20}>Stage (5 Cours)</MenuItem>
          <MenuItem value={20}>Club (10 Cours)</MenuItem>
          <MenuItem value={20}>Particulier (1h)</MenuItem>

        </Select>
        <Field label="Message" multiline />
        <Button variant="contained" color="primary">
        Reserver
        </Button>

    </form>
}
export default function Contact() {
    return <Grid container spacing={3}>
        <Grid item xs={6}>
            <Paper >
            <Typography variant="h6" color="inherit" noWrap >
                 N'HESITEZ PLUS! ECRIVEZ-NOUS!
                </Typography>
            Prenez le temps de remplir toutes les cases du formulaire. Nous vous répondrons dans les plus brefs délais.

            </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
            <Paper>
                <Form></Form>
            </Paper>
        </Grid>
    </Grid>
}