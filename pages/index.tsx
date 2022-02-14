import { FC } from 'react';
import { Container, Grid } from '@mui/material';

import ResponsiveAppBar from '../components/responsive-app-bar';
import Post from '../components/post';

const Home: FC = () => (
    <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ResponsiveAppBar />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    {[0,1,2,3,4,5,6,7,8,9].map((post, index) => (
                        <Grid item xs={12} sm={6} lg={3} md={4} key={index}>
                            <Post key={index} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    </Container>
);

export default Home;