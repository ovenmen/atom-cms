import { FC } from 'react';
import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';

const AtomCMSApp: FC<AppProps> = ({
    Component,
    pageProps
}) => (
    <Component {...pageProps} />
);

export default AtomCMSApp;