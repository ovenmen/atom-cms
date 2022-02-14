import { FC } from 'react';
import { Container, Grid } from '@mui/material';

import SideMenu from '../components/side-menu';

const Home: FC = () => (
    <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <SideMenu />
            </Grid>
            <Grid item xs={10}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta distinctio quam molestiae quos tempora minus odit ad veritatis deleniti cum itaque quibusdam tempore cupiditate harum modi atque, quaerat nobis hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ab autem placeat, a expedita vero similique maxime eaque temporibus porro, labore modi tempora laborum corrupti repudiandae sed est saepe earum?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptatibus! Rem, temporibus obcaecati commodi dolores eius, repellendus, dolorum mollitia et alias ut consequuntur dignissimos! Rerum eveniet repellendus vero error provident?
            </Grid>
        </Grid>
    </Container>
    
);

export default Home;