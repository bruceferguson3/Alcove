import React from 'react';
import ResultThumbnail from './ResultThumbnail.jsx';

const ResultsList = ({ listings }) => (
  <ul>
    Results List
    {listings.map((item, index) => <ResultThumbnail listing={item} key={`${item.dateSubmitted}-${index}`} />)}
  </ul>
);

export default ResultsList;
