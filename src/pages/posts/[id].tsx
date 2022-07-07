import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";

import { getAllPostIds, getPostData, Post } from "../../../lib/posts";
import utilStyles from "../../../styles/utils.module.css";
import Date from "../../components/date";
import Layout from "../../components/layout";


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
      props: {
        postData,
      },
    };
}

const PostPage: FunctionComponent<{postData: Post}> = ({ postData }) => {
    return (
        <>
            <Layout home={false}>
                <Head>
                    <title>{postData.title}</title>
                </Head>
                <article>
                    <h1 className="tex text-xl">{ postData.title }</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={postData.date} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml! }} />
                </article>
            
            </Layout>
        </>
    )
}
export default PostPage;