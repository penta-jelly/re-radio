import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    backgroundImage: 'url("/asset/image/auth-background.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flexDirection: 'row-reverse',
  },
}));
