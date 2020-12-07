import Typography from '@material-ui/core/Typography';

function Button({children}) {
    return <Typography variant="h6"  color="textSecondary" component="p" gutterBottom>{children}</Typography>
}

export default Button