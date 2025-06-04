import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import ButtonComponent from '@atoms/ButtonComponent';

interface AccordionComponentProps {
  panelId: string;
  title?: string;
  description?: string;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanding: boolean) => void; 
  
}

export default function AccordionComponent({
  panelId,
  title,
  description,
  expanded,
  onChange 
}: AccordionComponentProps) {

  const handleDetailsClickToClose = () => {
    if (expanded) {
      onChange({} as React.SyntheticEvent, false);
    }
  };

  return (
    <div>
      <Accordion
        disableGutters
        elevation={0}
        sx={{
          '&:before': {
            display: 'none',
          },
        }}
        expanded={expanded}
        onChange={onChange}
      >
        <AccordionSummary
          aria-controls={`${panelId}-content`}
          id={`${panelId}-header`}
          sx={{
            padding: { xs: '6px 0px', sm: '8px 0px' },
            '& .MuiAccordionSummary-content': {
              margin: 0,
            }
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <Typography
              component="div"
              sx={{
                fontWeight: 'medium',
                fontSize: {
                  xs: '28px',
                  sm: '28px',
                  md: '28px',
                  lg: '32px',
                  xl: '44px',
                },
                color: '#232323',
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>
            {!expanded && (
              <ButtonComponent
                label="Leia mais"
                variant="ghost"
                size="small"
                leftIcon={<AddIcon className='text-charcoal' sx={{ fontSize: { xs: '1.1rem', md: '1.2rem' } }} />}
                className='text-charcoal font-medium rounded-[40px] w-fit px-0 py-0 min-w-fit mt-1 sm:mt-2'
              />
            )}
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{
          paddingLeft: '0px',
          paddingRight: '0px',
          paddingTop: { xs: '8px', sm: '12px' },
          paddingBottom: { xs: '16px', sm: '20px' }
        }}>
          <Typography
            className="text-base text-silver"
            sx={{
              lineHeight: '1.6',
              cursor: expanded ? 'pointer' : 'default',
            }}
            onClick={handleDetailsClickToClose}
          >
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}