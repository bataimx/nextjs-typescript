import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../../components/Image';
import PageContainer from '../../components/pages/pageContainer';
import { PhotoModel } from '../../models';
import { photoByIdSelector } from '../../redux/selectors/PhotoListSelector';
import { isEmpty } from 'lodash';
import Head from 'next/head';

function PhotoPage(): React.ReactElement {
  const {
    query: { id: photoId },
  } = useRouter();
  const photoData = useSelector(photoByIdSelector(photoId as string)) as PhotoModel;

  return (
    <div>
      <Head>
        <title>PhotoPage Hello {photoData && photoData.title}!</title>
      </Head>
      <PageContainer>
        <h1>PhotoPage Hello {photoData && photoData.title}!</h1>
        {!isEmpty(photoData) && photoData && <Image data={photoData} />}
      </PageContainer>
    </div>
  );
}
export default PhotoPage;

