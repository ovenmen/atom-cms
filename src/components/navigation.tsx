import React from 'react';
import type { FC } from 'react';
import type { Config } from '../../@types/config';

interface NavigationProps {
    readonly config: Config
}

export const Navigation: FC<NavigationProps> = ({
    config : { siteName, links }
}) => (
    <nav className="bg-sky-600">
        {links && (
            <ul className="flex flex-row">
                <li className="px-5 py-2 text-white font-semibold">
                    {siteName}
                </li>
                {links.map(link => (
                    <li key={link.title} className="px-5 py-2 hover:bg-sky-500">
                        <a href={link.href} className="text-white">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        )}
    </nav>
);

