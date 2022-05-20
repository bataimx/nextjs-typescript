import React from 'react';
import PageContainer from '../../components/pageContainer';
import CollectionsTabs from '../../components/CollectionsTabs';
import AddCollectionDialog from '../../components/AddCollectionDialog';
import { collectionsSelector } from '../../redux/selectors/CollectionsSelector';
import { photosByCollectionIdSelector } from '../../redux/selectors/PhotoListSelector';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { wrapper } from '../../redux/store';
import { GetCollections, GetPhotos } from '../../Apis';

export default ({ id }): React.ReactElement => {
  const collections = useSelector(collectionsSelector);
  const collectionId = id;
  const photos = useSelector(photosByCollectionIdSelector(collectionId));

  return (
    <div>
      <Head>
        <title>Collection Id {collectionId}</title>
      </Head>
      <PageContainer>
        <h1>Collections!</h1>
        {collections.length > 0 && (
          <CollectionsTabs
            value={collectionId}
            collections={collections}
            photos={photos}
          />
        )}
        <AddCollectionDialog />
      </PageContainer>
    </div>
  );
};

export async function getStaticPaths() {
  const Collections = await GetCollections(null)
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
