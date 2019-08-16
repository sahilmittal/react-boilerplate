/**
 *  Component: Page
 */

import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Dimmer, Loader} from 'semantic-ui-react';

import {testAction} from '../../modules/page';

const propTypes = {
  testAction: PropTypes.func.isRequired,
  data: PropTypes.array,
};

class Page extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      testAction,
    },
    dispatch,
  );

Page.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
