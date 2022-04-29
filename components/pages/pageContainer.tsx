import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAppDataAsync } from '../../redux/actions';
import { Box, Container } from '@mui/material';
import Header from '../Header';
import Loading from '../Loading';

interface PageContainerInterface {
  children?: React.ReactNode;
}
export default ({ children }: PageContainerInterface): React.ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppDataAsync());
  }, []);
  
  return (
    <div>
      <Loading />
      <Header />
      <Container>
        <Box
          sx={{
            margin: 'auto',
          }}
        >
          <div className="page">
            <div className="page-wrapper">{children}</div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

const PageContainerWrapper = (WrapperComponent: React.ComponentType) => {
  return (props: any): React.ReactElement => {
    return (
      <div className="page">
        <div className="page-wrapper">
          <WrapperComponent {...props} />
        </div>
      </div>
    );
  };
};
export { PageContainerWrapper };
