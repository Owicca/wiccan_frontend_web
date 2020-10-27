import React from 'react';
import SwaggerUI from 'swagger-ui-react';


function SwaggerUIWrapper(props) {
  return <SwaggerUI url="/openapi.yaml" />;
}

export default SwaggerUIWrapper;