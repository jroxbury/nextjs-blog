import Head from 'next/head';

import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/posts';
import Date from '../../components/dates';

export default function Post({post}){
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <h1>{post.title}</h1>
            <Date dateString={post.date}/>
            <div dangerouslySetInnerHTML={{__html: post.contentHtml}}/>
        </Layout>
    )
}

export async function getStaticPaths(){
    const ids = getAllPostIds();
    return {
        paths:ids,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const post = await getPostData(params.id);
    return {
        props:{
            post
        }
    }
}