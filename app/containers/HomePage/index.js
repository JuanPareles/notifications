import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { 
  changeUsername,
  loadNotifications,
} from './actions';
import {
  makeSelectUsername,
  makeSelectNotifications,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';
import NotificationsPage from './NotificationsPage';

const mapDispatchToProps = (dispatch) => ({
  onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  },
  loadNotifications: (evt) => dispatch(loadNotifications()),
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
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
