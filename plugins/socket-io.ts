import io from 'socket.io-client';
import { useStore } from '~/store';
console.log(window.location.port);
export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    const socket = io('http://localhost:5000');
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
