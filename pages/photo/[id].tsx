import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../../components/image';
import PageContainer from '../../components/pageContainer';
import { PhotoModel } from '../../models';
import { photoByIdSelector } from '../../redux/selectors/PhotoListSelector';
import { isEmpty } from 'lodash';
import Head from 'next/head';
import { GetCollections, GetPhotos } from '../../Apis';
import { wrapper } from '../../redux/store';

function PhotoPage({id}): React.ReactElement {
  const photoId = id;
  const photoData = useSelector(
    photoByIdSelector(photoId as string)
  ) as PhotoModel;

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
export async function getStaticPaths() {
  const Collections = await GetPhotos(null)
  return {
    paths: Collections.map(item => {
      return { params: { id: item.id } };
    }),
    fallback: true
  }
}

export const getStaticProps = wrapper.getStaticProps(store => async ({params}) => {
  const Collections = await GetCollections(null);
  const Photos = await GetPhotos(null);

  await store.dispatch({
    type: "SERVER_UPDATE_STORE",
    payload: {
      Collections,
      Photos
    }
  });

  return {
    props: {
      id: params.id
    },
  };
});


export default PhotoPage;
