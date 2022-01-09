import React from 'react'
import './DisplayCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function DisplayCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="displayCard-container">
            <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia
                    component="img"
                    height="300"
                    image="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="water-color"
                    />
                    <CardContent>
                    <Typography className='dis_card' gutterBottom variant="h5" component="div">
                        Ashok Desai
                    </Typography>
                    <Typography className='dis_cont' variant="body2" color="text.secondary">
                        Color's of the day
                    </Typography>
                    <Typography className='dis_cont' variant="body2" color="text.secondary">
                        15 x 15 inches
                    </Typography>
                    <Typography className='dis_cont' variant="body2" color="text.secondary">
                    Acrylic on canvas
                    </Typography>
                    <Typography className='dis_cont' variant="body2" color="text.secondary">
                        INR 12,000
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="Image Title"
                    aria-describedby="Image Description"
                >
                    <Box
                        component="img"
                        sx={ style }
                        alt="The house from the offer."
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                    />
                </Modal>
        </div>
    )
}

export default DisplayCard
