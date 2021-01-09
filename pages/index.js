import Head from 'next/head'
import Link from 'next/link';
import Date from '../components/dates';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts';

function Home({posts}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am Joe!</p>
      </section>

        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>
                <a>{title}</a>
              </Link>
              <p><Date dateString={date}/></p>
            </li>
          ))}
        </ul>

    </Layout>
  )
}


export async function getStaticProps() {
  const posts = getSortedPostsData();
  // const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  // let post = await result.json();
  // post = post.slice(0,3);
  return { props: {posts} }
}

export default Home;