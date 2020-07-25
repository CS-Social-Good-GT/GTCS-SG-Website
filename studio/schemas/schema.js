import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blogPost from './blogPost';
import sponsor from './sponsor';
import project from './project';
import member from './member';
import team from './team';
import about from './about';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    /* Your types here! */
    blogPost,
    sponsor,
    project,
    member,
    team,
    about,
  ])
})