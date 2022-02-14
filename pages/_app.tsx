import { FC } from 'react';
import { AppProps } from 'next/app';

const AtomCMSApp: FC<AppProps> = ({
    Component,
    pageProps
}) => (
    <Component {...pageProps} />
);

export default AtomCMSApp;