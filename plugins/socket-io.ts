import io from 'socket.io-client';
import { useStore } from '~/store';

export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    const url = 'https://sessions-count.netlify.app';
    const socket = io(`${url}`);
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
