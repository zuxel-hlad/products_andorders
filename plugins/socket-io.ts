import io from 'socket.io-client';
import { useStore } from '~/store';

export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    console.dir(process.env);
    const port = process.env.NODE_ENV === 'development' ? 5000 : process.env.PORT;
    const socket = io(`http://localhost:${port}`);
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
