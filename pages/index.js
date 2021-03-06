import Head from 'next/head';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import Layout,
{
  siteTitle
} from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import db from '../pg_db/db';

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[blah]</p>
        <Link href="/posts/[id]" as="/posts/ssg-ssr"><a>ssg-ssr</a></Link>
        {' '}
        <Link href="/posts/[id]" as="/posts/pre-rendering"><a>pre-rendering</a></Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {

  const allPostsData = getSortedPostsData();

  console.log(db);

  db.manyOrNone(`select * from users;`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      allPostsData
    }
  }
}