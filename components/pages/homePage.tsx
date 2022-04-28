import React from 'react';
// import { useSelector } from 'react-redux';
import ImagesList from '../imagesList';
import PageContainer from './pageContainer';
// import { PhotoModel } from '../models';
// import { photoListSelector } from '../redux/selectors/PhotoListSelector';
// import PhotoDialog from '../components/PhotoDialog';

export default (): React.ReactElement => {
  // const photoList = useSelector<PhotoModel[]>(photoListSelector);

  return (
    <PageContainer>
      <ImagesList data={[]} />
      {/* <PhotoDialog /> */}
      <h1>here</h1>
    </PageContainer>
  );
};
