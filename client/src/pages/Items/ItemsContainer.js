import React, { Component } from 'react';
import Items from './Items';
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { } from '../../apollo/queries';


const GET_ITEMS = gql`
query getItems($id:ID!){
  items(filter:$id){
    id
    title
    itemowner{
      fullname
    }
    borrower{
      fullname
    }
    imageurl
    description
    tags{
      id
      title
    }
  }
}
`;



class ItemsContainer extends Component {
  render() {
    return (
      <Query query={GET_ITEMS} variables={{ id: 1 }} >
        {({ loading, error, data }) => {
          if (loading) return 'Loading'
          if (error) return `Error: ${error}`
          if (data) {
            console.log(data);
            return <Items items={data.items} />

          }
        }}
      </Query>
    );

  }
}


export default ItemsContainer;
