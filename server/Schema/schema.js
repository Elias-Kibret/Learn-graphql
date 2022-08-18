const graphql=require('graphql')
const {GraphQLObjectType,GraphQLString,GraphQLSchema}=graphql
const _=require('lodash')
var books=[
    {
        name:'Name of the wind',
        genre: "Fanatasy",
        id:1
    },
    {
        name:'The Final Empire',
        genre: "Fanatasy",
        id:2
    },
    {
        name:'The Long Earth',
        genre: "Fanatasy",
        id:3
    },
]

const BBookType= new GraphQLObjectType({
    name:"Book",
    fields:()=>({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
})


const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BBookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                // code to get data from db ./other source
              return _.find(books,{id:args.id})
            }
        
        }
    }
})

module.exports=new GraphQLSchema({
    query:RootQuery
})