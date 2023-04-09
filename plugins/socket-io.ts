import io from 'socket.io-client';
import { useStore } from '~/store';

export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    const port = process.env.NODE_ENV === 'development' ? 5000 : 'https://inspiring-quokka-db122c.netlify.app';
    const socket = io(`http://localhost:${port}`);
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
