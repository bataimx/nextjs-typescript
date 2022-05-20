import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSelector } from 'react-redux';
import ImagesList from '../components/imagesList';
import PageContainer from '../components/pageContainer';
import { PhotoModel } from '../models';
import { photoListSelector } from '../redux/selectors/PhotoListSelector';
import PhotoDialog from '../components/PhotoDialog';
import { wrapper } from '../redux/store';
import { GetCollections, GetPhotos } from '../Apis';

export default function Home() {
  const photoList = useSelector<any, PhotoModel[]>(photoListSelector);

  return (
    <div className={styles.container}>
      <Head>
        <title>Photo Blog</title>
      </Head>
      <main className={styles.main}>
        <PageContainer>
          <ImagesList data={photoList} />
          <PhotoDialog />
        </PageContainer>
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
  const Photos = await GetPhotos(null);
  const Collections = await GetCollections(null);

  await store.dispatch({
    type: "SERVER_UPDATE_STORE",
    payload: {
      Photos,
      Collections
    }
  });

  console.log('State on server', store.getState());

  return {
    props: {},
  };
});
