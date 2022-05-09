import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSelector } from 'react-redux';
import ImagesList from '../components/imagesList';
import PageContainer from '../components/pageContainer';
import { PhotoModel } from '../models';
import { photoListSelector } from '../redux/selectors/PhotoListSelector';
import PhotoDialog from '../components/PhotoDialog';

export default function Home() {
  const photoList = useSelector<any, PhotoModel[]>(photoListSelector);

  return (
    <div className={styles.container}>
      <Head>
        <title>Photo Blog</title>
      </Head>
      <main className={styles.main}>
        <h3>Welcome to Next.js!</h3>
        <PageContainer>
          <ImagesList data={photoList} />
          <PhotoDialog />
        </PageContainer>
      </main>
    </div>
  );
}
