import React from 'react';
import {useParams} from 'react-router-dom';


function AnalysisItemPage(props) {
  let {id} = useParams();
  return <p>item {id}</p>;
}

export default AnalysisItemPage;
