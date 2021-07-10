import React from 'react';
import PropTypes from "prop-types";


import { Container } from '@material-ui/core';
import {HorizontalSidebar} from '../components/navigration/horizontalNavbar';
import { Grid } from '@material-ui/core';

const PublicLayout = ({ children, noNavbar, noFooter }) => (
    <Container maxWidth="lg">
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <HorizontalSidebar/>
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    </Container>
);
  
PublicLayout.propTypes = {
/**
 * Whether to display the navbar, or not.
 */
noNavbar: PropTypes.bool,
/**
 * Whether to display the footer, or not.
 */
noFooter: PropTypes.bool
};

PublicLayout.defaultProps = {
    noNavbar: false,
    noFooter: false
};

export default PublicLayout;

