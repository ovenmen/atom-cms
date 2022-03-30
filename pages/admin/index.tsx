import Link from 'next/link';
import { FC } from 'react';
import { Button, Container, Grid } from 'semantic-ui-react';

const Home: FC = () => (
    <Container>
        <h1>Добро пожаловать в админку</h1>
        <Link href="/"><a>site name</a></Link>
    </Container>
);

export default Home;