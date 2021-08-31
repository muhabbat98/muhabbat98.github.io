import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';

export const useActionCreators = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};