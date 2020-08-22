import { Grid, Image, List, ListItem } from "@chakra-ui/core";
import Link from "next/link";
import { fetchAPI } from "../lib/api_prismic";

interface Post {
  node: {
    _meta: {
      uid: string;
    };
    title: string;
    thumbnail: {
      url: string;
      alt: string;
    };
    content: string;
  };
}

interface ProfileProps {
  posts: Post[];
}

export default function Profile({ posts }: ProfileProps) {
  return (
    <Grid as="main" height="100vh" templateColumns="repeat(4, 1fr)">
      <List>
        {posts.map((post) => (
          <ListItem key={post.node._meta.uid}>
            <Image
              rounded="full"
              size="150px"
              src={post.node.thumbnail.url}
              alt={post.node.thumbnail.alt}
            />
            <Link href={`${post.node._meta.uid}`}>
              <a>{post.node.title}</a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export async function getServerSideProps() {
  const posts = await fetchAPI(
    `query {
    allPosts{
      edges{
        node{
          _meta{
            uid
          }
          title
          thumbnail
          content
        }
      }
    }
  }`,
    {}
  );

  return {
    props: {
      posts: posts.allPosts.edges,
    },
  };
}
