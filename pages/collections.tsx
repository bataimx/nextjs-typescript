import React from 'react';
import PageContainer from '../components/pages/pageContainer';
import CollectionsTabs from '../components/CollectionsTabs';
import AddCollectionDialog from '../components/AddCollectionDialog';
import { collectionsSelector } from '../redux/selectors/CollectionsSelector';
import { photosByCollectionIdSelector } from '../redux/selectors/PhotoListSelector';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default (): React.ReactElement => {
  const collections = useSelector(collectionsSelector);
  const {
    query: { id: collectionId },
  } = useRouter();
  const currentVal = collectionId || (collections[0] && collections[0].id) || 0;
  const photos = useSelector(photosByCollectionIdSelector(currentVal));

  return (
    <div>
      <Head>
        <title>Collections Blog</title>
      </Head>
      <PageContainer>
        <h1>Collections!</h1>
        {collections.length > 0 && (
          <CollectionsTabs
            value={currentVal}
            collections={collections}
            photos={photos}
          />
        )}
        <AddCollectionDialog />
      </PageContainer>
    </div>
  );
};
