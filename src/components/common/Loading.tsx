import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({  
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
});

interface IProps {
  classes: any;
  loading: any;
}

function Loading(props: IProps) {
  const { classes, loading } = props;
  return (
    <div style={loading ? { display: 'block' } : { display: 'none' }} className={classes.loadingMessage}>
      <span role='img' aria-label='emoji' style={{ fontSize: 58, textAlign: 'center', display: 'inline-block', width: '100%' }}>👋</span>
      <Typography variant="h6">
        Waiting for input
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Loading);