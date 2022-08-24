import React from 'react';
import {HStack, Image, Link, Tag} from '@chakra-ui/react';
import {NavLink as RouterLink} from "react-router-dom";

const BlogTags = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Link as={RouterLink}  to={'category/' + tag}
                          state={{ category: tag }} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                            {tag}
                        </Tag>
                    </Link>

                );
            })}
        </HStack>
    );
};

export default BlogTags;

