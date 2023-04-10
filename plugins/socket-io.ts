import io from 'socket.io-client';
import { useStore } from '~/store';

export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    // const port = 'http://localhost:4000';
    const port = 'http://localhost:5000';
    const socket = io(`${port}`);
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
