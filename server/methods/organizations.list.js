/*
*/

Meteor.methods({
  'organizations.list': (o)=>{
    return {
      kind: 'organizations.list'
      items: [
        {name: Glendale},
        {name: Pasadena},
        {name: LA County},
        {name: Orange County}
      ]
    }
  }
})
