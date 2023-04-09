import io from 'socket.io-client';
import { useStore } from '~/store';

export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    const url =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:5000'
            : 'https://inspiring-quokka-db122c.netlify.app';
    const socket = io(`${url}`);
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
