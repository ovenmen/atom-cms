import React from 'react';
import type { FC } from 'react';

interface HeaderProps {
    title?: string
}

export const Header: FC<HeaderProps> = ({
    title
}) => (
    <h1 className="text-4xl">{title}</h1>
);
