import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';
import dynamic from 'next/dynamic';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';

const DynamicComponent = dynamic(
  () => import('./test'),
  { ssr: false });

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <br />
        <div className={utilStyles.lightText}>
          {postData.id}
          <br />
          {postData.data}
          <br />
          <Date dateString={postData.date} />
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <br />
        <DynamicComponent />
        <br />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}