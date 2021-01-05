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
  menuTitle: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  }
}));

const buttonStyle = {
  marginTop: "20px",
  padding: "20px",
  width: "100%"
}

export default function Sidebar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.menuTitle}>
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
                <Button variant="contained" color="primary" style={buttonStyle}> 
                  Button 1 
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary" style={buttonStyle}> 
                 Button 2
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary" style={buttonStyle}> 
                 Button 3
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary" style={buttonStyle}> 
                 Button 4
                </Button>
              </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
