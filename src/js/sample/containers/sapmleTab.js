import { connect } from 'react-redux';
import { tab } from '../modules/sampleAction';
import sampleTab from '../components/sampleLabel';



function mapStateToProps(state) {
  return {
      value: state.sample.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    tab: () => dispatch(tab())

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(sampleTab);