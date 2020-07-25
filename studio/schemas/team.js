import member from './member'
export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'header',
        title: 'Header Image',
        type: 'image'
      },
      {
        name: 'ordering',
        title: 'Position',
        type: 'number'
      },
      {
        name: 'members',
        title: 'Members',
        type: 'array',
        of: [{type: 'member'}]
      }
    ]
  }