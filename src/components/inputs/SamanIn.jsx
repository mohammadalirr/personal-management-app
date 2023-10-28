import { Box, Typography, TextField, Grid, Select, MenuItem, FormControl, Divider, Button } from "@mui/material";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const SamanIn = () => {

    return (
        <>
            <Grid container sx={{ mt: 3 }}>

                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Box sx={{ border: 'solid 1px #1BA1E2', width: '20rem', borderRadius: '15px', pt: 3, pb: 3, m: 'auto' }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            بانک سامان
                        </Typography>
                        <Divider sx={{ ml: '5rem', mr: '5rem' }} />
                        <FormControl>
                            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 3 }}
                            >
                                <Box>
                                    <TextField
                                        label="تومان"
                                        id="filled-size-small"
                                        variant="outlined"
                                        size="small"
                                        color="primary"

                                    />
                                </Box>
                                <Box>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={0}
                                        label="نوع"
                                        // onChange={0}
                                        size="small"
                                        variant="outlined"
                                        sx={{ ml: 1 }}
                                    >
                                        <MenuItem value={10}><ArrowDropDownIcon sx={{ color: 'green' }} /></MenuItem>
                                        <MenuItem value={20}><ArrowDropUpIcon sx={{ color: 'red' }} /></MenuItem>
                                        <MenuItem value={30}>{" "}</MenuItem>

                                    </Select>
                                </Box>
                            </Box>
                            <Box>
                                <TextField
                                    id="outlined-basic"
                                    label="تاریخ"
                                    variant="outlined"
                                    size="small"
                                    sx={{ mt: 1, width: '17rem' }}
                                />
                            </Box>
                            <Box>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="توضیحات"
                                    multiline
                                    minRows={2}
                                    sx={{ mt: 1, mb:2, width: '17rem' }}

                                />
                            </Box>
                            <Button variant="filled" sx={{backgroundColor:'#1BA1E2'}}>
                                ثبت
                            </Button>

                        </FormControl>

                    </Box>


                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3} >
                </Grid>
            </Grid>
        </>
    )
}

export default SamanIn;