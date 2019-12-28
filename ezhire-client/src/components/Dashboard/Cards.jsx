import React from 'react';
import {JOBS} from './jobtest';
import Column from './Column.jsx';
import Card2 from './Card.jsx';
import { faPenSquare } from '@fortawesome/fontawesome-free-solid';


import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, Button, UncontrolledCollapse } from 'reactstrap';

state = {
    jobs: JOBS
}
RenderJobCard = ({item}) => {
     return (
       <div>
           <Card body inverse style={{ width: '90%', backgroundColor: '#DB6A53', borderColor: 'Yellow', color: 'White' }} >
               <CardHeader><strong>{item.company}</strong></CardHeader>
               <CardTitle><i>{item.position}</i></CardTitle>
               <CardBody>
                   <CardText>{item.description}</CardText>
               </CardBody>
           </Card>
       </div>
     );
 }

const Cards = ({item}) => (
    <div className = "Cards">
    
  </div>
);

export default Cards;
