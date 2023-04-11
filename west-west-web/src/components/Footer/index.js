import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Box, Paper, Grid } from'@mui/material';
import logo from '../../assets/west-west-logo.png';

function Footer() {
    return (
        <section>
            <Box sx={{
            width: '100vw',
            // height: '11vh',
            backgroundColor: '#6F1D1B'
            }}>
                <Grid container className={'footer-text'}>
                    <Grid item className='footer' xs={6}>
                        <p>West & West Attorney at Law</p>
                        <a href='tel:2103402200' className='footer-text foot-hov'>(210) 340-2200</a> <br />
                        <a target="_blank" href='https://goo.gl/maps/b3Tmhkgno2U4hnTx8' className='footer-text foot-hov'>2929 Mossrock,<br/> San Antonio, TX 78230</a>

                    </Grid>
                    <Grid item xs={6}>
                        
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}

export default Footer;