import React from "react";
import withLayout from "../components/Layout";

function Search(props: any) {
  return (<div>Search {JSON.stringify(props)}</div>);
};

Search.getInitialProps = ({ query }) => {
  return {
    search: query.q
  }
}

export default withLayout(Search);
