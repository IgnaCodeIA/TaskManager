import React from 'react';
import Typography from '@mui/material/Typography';
import './HeaderTitle.css';

const HeaderTitle = () => {
    
    return (
        <div className='HeaderTitleContainer'>
            <Typography 
            variant="h3"
            component="h1" 
            gutterBottom
            sx={{color: '202329',
                fontWeight: 'bold'
            }}
            >
                Gestor de Tareas
            </Typography>
        </div>
    );

};

export default HeaderTitle;