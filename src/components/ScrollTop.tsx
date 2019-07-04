import { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IProps {
  location: any;
}

class ScrollToTop extends Component<IProps & RouteComponentProps<any>> {
    componentDidUpdate(prevProps: IProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
      }
    }

    render() {
      return this.props.children;
    }
  }

  export default withRouter(ScrollToTop);
