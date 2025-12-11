import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIAccordion() {

     const [expanded, setExpanded] = React.useState (false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >Bölüm 1</AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione exercitationem harum assumenda quam odit error aperiam nihil possimus, ipsam eaque!</AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >Bölüm 1</AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione exercitationem harum assumenda quam odit error aperiam nihil possimus, ipsam eaque!</AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >Bölüm 1</AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione exercitationem harum assumenda quam odit error aperiam nihil possimus, ipsam eaque!</AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MUIAccordion
