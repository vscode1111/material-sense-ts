import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  primary: {
    marginRight: theme.spacing.unit * 2
  },
  secondary: {
    // background: theme.palette.secondary['100'],
    background: theme.palette.secondary.main,
    color: 'white'
  },
  spaceTop: {
    marginTop: 20
  }
})

interface IProps {
  classes: any
}

class ButtonBar extends React.Component<IProps> {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.spaceTop}>
        <Button
          className={classes.primary}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.secondary}
        >
          Edit
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonBar);