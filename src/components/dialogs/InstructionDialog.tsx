import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BaseDialog from './BaseDialog';
import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({  
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  bottomMargin: {
    marginBottom: theme.spacing.unit * 2
  }
});

interface IProps {
  classes?: any;
  open?: boolean;
  onClose?: (event: any) => void;  
}

class InstructionDialog extends React.Component<IProps & RouteComponentProps> {
  render() {
    const { classes } = this.props;
    return (
      <BaseDialog {...this.props} >
        <div className={classes.bottomMargin}>
          <Typography variant="body2" gutterBottom>
            This is a sample introduction
          </Typography>
        </div>
        {/* <Button component={() => <Link to='/dashboard' />} className={classes.bottomMargin} variant='contained' onClick={this.handleClose} color="primary" autoFocus> */}
        <Button component={() => <Link to='/dashboard' />} className={classes.bottomMargin} variant='contained' color="primary" autoFocus>
          Getting started
        </Button>
        {/* <Button component={() => <Link to='/dashboard' />} variant='outlined' onClick={this.handleClose} color="primary" autoFocus> */}
        <Button component={() => <Link to='/dashboard' />} variant='outlined' color="primary" autoFocus>
          Dashboard
        </Button>
      </BaseDialog>
    )
  }
}

export default withRouter(withStyles(styles)(InstructionDialog));
