import io from 'socket.io-client';
import { useStore } from '~/store';

export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    const socket = io('http://localhost:5000' || process.env.PORT);
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
