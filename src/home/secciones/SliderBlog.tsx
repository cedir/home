import { useTheme } from '@mui/material/styles';
import { Box, MobileStepper } from '@mui/material';
import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import TextEditor from './TextEditor';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SliderBlog({ blogs, edit }: SliderBlogProps) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
  return (<>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
            {blogs.map((blog, index) => (
            <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (<>
                    <Box
                      component="img"
                      sx={{
                        height: 255,
                        display: 'block',
                        maxWidth: 400,
                        overflow: 'hidden',
                        width: '100%',
                      }}
                      src={blog.image}
                    />
                    <Box sx={ { width: '100%', padding: '1rem' } }>
                        <TextEditor
                          text={ `<p>${blog.descripcion}</p>` }
                          classNames='text-secondary'
                          edit={ edit }
                        />
                    </Box>
                </>) : null}
            </div>
            ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          activeStep={activeStep}
          steps={ blogs.length }
          variant='dots'
          position='static'
          backButton={ <></> }
          nextButton={ <></> }
        />
    </>)
}

interface Blog {
    image: any;
    descripcion: string;
}

interface SliderBlogProps {
    blogs: Blog[];
    edit?: boolean;
}

export default SliderBlog;
