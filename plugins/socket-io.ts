import io from 'socket.io-client';
import { useStore } from '~/store';
console.log('PROCESS ENVV!!!!!!',process.env);
export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    const socket = io(`http://localhost:${process?.env?.PORT || 5000}`);
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
