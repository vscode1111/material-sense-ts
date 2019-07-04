import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
  classes: any;
  open: any;
  onClose: any;
}

class BaseDialog extends React.Component<IProps> {
  render() {
    const { classes, open, onClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll='body'
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className={classes.container}>
              {this.props.children}
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    )
  }
}

export default withStyles(styles)(BaseDialog);