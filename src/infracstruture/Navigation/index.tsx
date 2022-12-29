import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { init } from '../Redux/slice/authSlice';
import { RootState } from '../Redux/store';
import AuthNav from './AuthNav';
import MainApp from './MainApp';

const Navigation = (): React.ReactElement => {
  const { userToken } = useSelector((state: RootState) => state.auth);

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(init());
  }, [isLoggedIn, dispatch]);
  return (
    <NavigationContainer>
      {userToken ? <MainApp /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default Navigation;
