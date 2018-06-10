import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadNotifications } from './actions';
import { makeSelectNotifications } from './selectors';
import reducer from './reducer';
import saga from './saga';
import NotificationsPage from './NotificationsPage';

const mapDispatchToProps = (dispatch) => ({
  loadNotifications: () => dispatch(loadNotifications()),
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  notifications: makeSelectNotifications(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

// export default compose(withReducer, withSaga, withConnect)(HomePage);
export default compose(withReducer, withSaga, withConnect)(NotificationsPage);
export { mapDispatchToProps };
