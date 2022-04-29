import React from 'react';
import { useSelector } from 'react-redux';
import ImagesList from '../imagesList';
import PageContainer from './pageContainer';
import { PhotoModel } from '../../models';
import { photoListSelector } from '../../redux/selectors/PhotoListSelector';
import PhotoDialog from '../PhotoDialog';

export default (): React.ReactElement => {
  const photoList = useSelector<any, PhotoModel[]>(photoListSelector);

  return (
    <PageContainer>
      <ImagesList data={photoList} />
      <PhotoDialog />
    </PageContainer>
  );
};
