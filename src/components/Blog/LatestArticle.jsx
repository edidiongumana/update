import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Container,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import bloghead from '../../assets/bloghead.jpg';

const AuthorCategory = props => {
  return (
    <Box id="author-category" className="qfont" pl={6}>
      <Text
        as={Link}
        href={`/blog/${props.category}`}
        // as="small"
        fontWeight="normal"
        fontSize="14px"
        color="primary.100"
        textTransform="capitalize"
        textDecoration="none"
        _hover={{ textDecoration: 'none' }}
      >
        {props.category}
      </Text>
      <Text as="p" color="textDark.100" fontSize="14px">
        By {props.author}
      </Text>
    </Box>
  );
};

const LatestArticle = ({ loadingCategoryPosts, latestPost }) => {
  return (
    <Container maxW="container.xl" px={8}>
      <Box
        pt={10}
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box
          display="flex"
          flex="1"
          mb={5}
          mr="25px"
          position="relative"
          alignItems="center"
          w='100%'
        >
          <Skeleton isLoaded={latestPost ? loadingCategoryPosts : true} w="100%">
            <Box width={{ base: '100%', sm: '100%' }}>
              <Link
                href={
                  latestPost
                    ? `/blog/${latestPost.category}/${latestPost.caption}`
                    : '/blog/updates/test'
                }
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
              >
                <Image
                  margin="auto"
                  borderRadius="lg"
                  src={latestPost ? latestPost.image : bloghead}
                  alt="some good alt text"
                  objectFit={['contain', 'cover']}
                  width="100%"
                  height="100%"
                />
              </Link>
            </Box>
          </Skeleton>
        </Box>

        <Box
          flex="1.2"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <Skeleton isLoaded={latestPost ? loadingCategoryPosts : true}>
            <AuthorCategory
              category={latestPost ? latestPost.category : 'Economics'}
              author={latestPost ? latestPost.author : 'Debo Ajikede'}
            />
          </Skeleton>

          <SkeletonText
            mt="4"
            noOfLines={4}
            spacing="4"
            isLoaded={latestPost ? loadingCategoryPosts : true}
            
          >
            <Heading
              marginTop="1"
              className="qfont"
              py={1}
              fontSize={['32px !important', '40px !important']}
            >
              <Link
                className="afont"
                textDecoration="none"
                fontWeight='bold !important'
                _hover={{ textDecoration: 'none' }}
                href={
                  latestPost
                    ? `/blog/${latestPost.category}/${latestPost.caption}`
                    : '/blog/updates/test'
                }
              >
                {latestPost
                  ? latestPost.caption
                  : 'Global News crisis southern vast ban on open grazing'}
              </Link>
            </Heading>
          </SkeletonText>

          <SkeletonText
            mt="4"
            noOfLines={2}
            spacing="4"
            isLoaded={latestPost ? loadingCategoryPosts : true}
            display={['none','none' ,'none','block']}
          >
            <Text
              pb={4}
              as="p"
              marginTop="2"
              color="textDark"
              fontSize="md"
              lineHeight="1.9"
            >
              {latestPost
                ? latestPost.sample
                : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            </Text>

            <Link
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
              color="#f8b458"
              fontWeight="bold"
              className="qfont"
              href={
                latestPost
                  ? `/blog/${latestPost.category}/${latestPost.caption}`
                  : '/blog/updates/test'
              }
            >
              Read more
            </Link>
          </SkeletonText>
        </Box>
      </Box>
    </Container>
  );
};

export default LatestArticle;
export { AuthorCategory };
