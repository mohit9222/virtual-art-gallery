import React from "react";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import '../StickyFilters/StickyFilters.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Numbers} from "@mui/icons-material";
import Stack from '@mui/material/Stack';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
}

function StickyFilters() {
    const [open,
        setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [age,
        setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <div className="filter">
                <Button onClick={handleOpen}>
                    <FilterAltRoundedIcon/>
                </Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500
                }}>
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                FILTERS
                            </Typography>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                <Box
                                    sx={{
                                    minWidth: 120
                                }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Artist Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Artist Type"
                                            onChange={handleChange}>
                                            <MenuItem value={10}>International</MenuItem>
                                            <MenuItem value={20}>National</MenuItem>
                                            <MenuItem value={30}>State</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Box>
                            </Typography>
                            <Typography
                                id="transition-modal-description"
                                sx={{
                                mt: 2
                            }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Painting Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Artist Type"
                                        onChange={Numbers}>
                                        <MenuItem value={1}>Water Colors</MenuItem>
                                        <MenuItem value={2}>Oil Paints
                                        </MenuItem>
                                        <MenuItem value={3}>Portrait Painting</MenuItem>
                                        <MenuItem value={4}>Acrylic Painting</MenuItem>
                                    </Select>
                                </FormControl>
                            </Typography>
                            <Typography
                                id="transition-modal-description"
                                sx={{
                                mt: 2
                            }}>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained" color="success">
                                        Submit
                                    </Button>
                                    <Button variant="contained" color="error">
                                        Reset
                                    </Button>
                               </Stack>
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </div>
    );
}

export default StickyFilters;