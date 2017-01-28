import React, { Component }   from 'react';
import { Tabs, Tab }          from 'material-ui';
import SwipeableViews         from 'react-swipeable-views';
import { withRouter }          from 'react-router';

/* component styles */
import { styles } from './styles.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      slideIndex: 0
    }
  }


  handleRoute() {
    const { route } = this.props;
    switch(route) {
      case 'record':
        this.handleChange(0, false);
        break
      case 'recordings':
        this.handleChange(1, false);
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    this.handleRoute();
  }

  componentWillReceiveProps(nextProps){
    this.handleRoute();
  }

  handleChange(index, routeToURL) {
    this.setState({
      slideIndex: index
    });

    if(routeToURL !== false) { this.pushRoute(index) };
  }

  pushRoute(index){
    switch(index){
      case 0:
        this.props.router.push('/record');
        break;
      case 1:
        this.props.router.push('/recordings');
        break;
      default:
        break;
    }
  }

  render() {
    const { content } = this.props;

    return(
      <div className={styles}>
        <Tabs
          className="tabs"
          value={this.state.slideIndex}
          onChange={this.handleChange}>
          <Tab
            label="Record"
            value={0}>
          </Tab>
          <Tab
            label="Listen"
            value={1}>
          </Tab>
        </Tabs>
        <div id="view-1">
          {content}
        </div>
      </div>
    );
  }

}

export default withRouter(Navigation);