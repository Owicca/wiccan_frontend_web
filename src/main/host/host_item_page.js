import React from 'react';
import {useParams} from 'react-router-dom';


function HostItemPage(props) {
  let {id} = useParams();
  return <p>item {id}</p>;
}

export default HostItemPage;