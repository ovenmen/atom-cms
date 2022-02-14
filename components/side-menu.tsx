import { FC } from 'react';
import { MenuItem, MenuList, Paper, Stack } from '@mui/material';

const SideMenu: FC = () => (
    <Stack direction="row" spacing={2}>
        <Paper>
            <MenuList>
                <MenuItem>Профиль</MenuItem>
                <MenuItem>Сообщения</MenuItem>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </Paper>
    </Stack>
);

export default SideMenu;