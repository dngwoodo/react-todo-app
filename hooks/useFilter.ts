import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { filterActions } from '../slices/filterSlice';
import { useAppDispatch, useAppSelector } from '../store/configureStore';

const useFilter = () => {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const actions = useMemo(() => bindActionCreators(filterActions, dispatch), [dispatch]);
  return [filter, actions] as const;
};

export default useFilter;
