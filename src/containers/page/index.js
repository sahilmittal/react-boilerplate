/**
 *  Component: Page
 */

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { testAction } from '../../modules/page';
import Loader from '../../components/loader';

const propTypes = {
  testAction: PropTypes.func.isRequired,
  data: PropTypes.array
}

class Page extends React.Component {

  state = {
  }

  componentDidMount() {
  }

  render () {
    return (
      <div>
        <Loader />
      </div>
    )
  }
} 

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  testAction
}, dispatch)

Page.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);