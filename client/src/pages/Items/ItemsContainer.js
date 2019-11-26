import React, { Component } from "react";
import Items from "./Items";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
import { ALL_ITEMS_QUERY } from "../../apollo/queries";
import Loading from "../../components/Loading";
import { ViewerContext } from "../../context/ViewerProvider";

class ItemsContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => {
          return (
            <Query query={ALL_ITEMS_QUERY} variables={{ filter: viewer.id }}>
              {({ loading, error, data }) => {
                if (loading) return <Loading />;
                if (error) return `Error: ${error}`;
                if (data) {
                  return <Items items={data.items} />;
                }
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

export default ItemsContainer;
