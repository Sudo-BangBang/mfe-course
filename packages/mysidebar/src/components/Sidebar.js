import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    padding: "20px",
    width: "100%"
    
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Sidebar
            </Typography>
            <div>
                <Button variant="contained" color="primary" className={classes.heroButtons}> 
                  Button 1 
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary" className={classes.heroButtons}>
                 Button 2
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary" className={classes.heroButtons}>
                 Button 3
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary" className={classes.heroButtons}>
                 Button 4
                </Button>
              </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
