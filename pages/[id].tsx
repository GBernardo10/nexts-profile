import { fetchAPI } from "../lib/api_prismic";
import { GetStaticPropsContext } from "next";
import {
  Elements,
  RichText,
  RichTextBlock,
  RichTextProps,
} from "prismic-reactjs";
import React from "react";
import { Grid, Heading, Image } from "@chakra-ui/core";

interface PostProps {
  post: {
    title: string;
    thumbnail: {
      url: string;
      alt: string;
    };
    content: RichTextBlock[];
  };
}

interface ContentProps {
  props: {
    children: Array<ContentProps>;
  };
}

function Post({ post }: PostProps) {
  const title: ContentProps = RichText.render(post.content);

  console.log(title);
  

  return (
    <Grid as="main" height="100vh" templateColumns="repeat(4, 1fr)">
      <Heading as="h1">{post.title}</Heading>
      <Image src={post.thumbnail.url} alt={post.thumbnail.alt} />
      <Heading as="h1">{title.props.children[0].props.children[0]}</Heading>
    </Grid>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const post = await fetchAPI(
    `query($slug: String!, $lang: String!){
      post(uid: $slug, lang: $lang){
        title
        thumbnail
        content
      }
    }`,
    {
      slug: ctx.params.id,
      lang: "en-us",
    }
  );

  return {
    props: {
      post: post.post,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const {
    allPosts: { edges },
  } = await fetchAPI(
    `query {
      allPosts{
        edges{
          node{
            _meta{
              uid
            }
          }
        }
      }
    }`,
    {}
  );
  return {
    paths: edges.map(({ node }) => `/${node._meta.uid}`) || [],
    // paths: edges.map(({ node }) => `/posts/${node._meta.uid}`) || [],
    fallback: false,
  };
}

export default Post;
