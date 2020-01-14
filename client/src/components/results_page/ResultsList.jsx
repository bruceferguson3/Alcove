import React from 'react';
import { CardColumns } from 'react-bootstrap';
import ResultThumbnail from './ResultThumbnail.jsx';
import './Results.css';

const ResultsList = ({ listings }) => (
  <div id="results-list-container">
    <CardColumns>
      {listings.map((item, index) => <ResultThumbnail listing={item} key={`${item.dateSubmitted}-${index}`} />)}
    </CardColumns>
  </div>
);

export default ResultsList;
