import React from 'react';
import {
  Container,
  Box,
  Text,
  Stack,
  Heading,
  Image,
  Link,
  Flex,
  Skeleton,
  SimpleGrid,
} from '@chakra-ui/react';
import herd from '../../assets/blog/herd.jpg';
import cashew from '../../assets/blog/cashew.jpg';
import greenhouse from '../../assets/blog/greenhouse.jpeg';
import { AuthorCategory } from './LatestArticle';

const posts = [
  {
    image: herd,
    date: '12 Jun 2021',
    sample:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
    author: 'Debo Ajikede',
    category: 'Technology',
    caption: 'Creating a system for agricultural exports and its advantages',
  },
  {
    image: cashew,
    date: '12 Jun 2021',
    sample:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
    author: 'Debo Ajikede',
    category: 'Technology',
    caption: 'Cyber attack on virtual  farms : The 2021 report analysis',
  },
  {
    image: greenhouse,
    date: '12 Jun 2021',
    sample:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
    author: 'Debo Ajikede',
    category: 'Farming',
    caption: 'Seven key roles in financial funding in farms',
  },
];
function FeatureCard({ post, loadingCategoryPosts }) {
  return (
    <Skeleton isLoaded={loadingCategoryPosts}>
      <Box
        as="div"

        // shadow="lg"
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
        width="100%"
      >
        <Box
          width="100%"
          minHeight="180px"
          height="180px"
          maxHeight="180px"
          zIndex="2"
          rounded="0"
          mb={4}
        >
          <Link
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
          >
            <Image
              borderTopRightRadius="10px"
              borderTopLeftRadius="10px"
              margin="auto"
              src={post.image}
              alt="some good alt text"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Link>
        </Box>

        <Stack>

          <Flex justify="space-between" pr={6}>
            <AuthorCategory
              category={post.category}
              author={post.author}
            />
            <Text as={'p'} className="qfont" fontSize="12px" color="textDark.100">
              {post.date}

            </Text>
          </Flex>

          <Box py={3} >
            <Heading
              className="qfont"
              fontSize='24px !important'
              lineHeight="1.4"

            >
              <Link
                className="afont"
                textDecoration="none"
                fontWeight='600 '
                _hover={{ textDecoration: 'none' }}
              >
                {post.caption}
              </Link>
            </Heading>
            <Text as="p" color="textDark" py={'10px'}>
              {post.sample}
            </Text>
            {/* <Link
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                      color="secondary.100"
                      fontWeight="normal"
                      className="qfont"
                    >
                      Read more
                    </Link> */}
          </Box>
        </Stack>
      </Box>

    </Skeleton>
  );
}

function FeaturedCards(props) {
  return (
    <Box bg="white" py="80px">
      <Container maxW="container.xl" px={8}>
        <SimpleGrid spacing="40px" columns={[1, 1, 2, 3]}>
          {props.posts &&
            props.posts.map((post, index) => {
              return (
                <FeatureCard
                  post={post}
                  key={index}
                  loadingCategoryPosts={props.loadingCategoryPosts}
                />
              );
            })}
          {!props.posts &&
            posts.map((post, index) => {
              return (
                <FeatureCard
                  post={post}
                  key={index}
                  loadingCategoryPosts={true}
                />
              );
            })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default FeaturedCards;
