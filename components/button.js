import Typography from '@material-ui/core/Typography';

function Button({children, align="center", variant="h4"}) {
    return <Typography align={align} variant={variant}  color="textSecondary" component="p" gutterBottom>{children}</Typography>
}

export default Button