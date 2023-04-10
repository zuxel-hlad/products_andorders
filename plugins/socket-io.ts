import io from 'socket.io-client';
import { useStore } from '~/store';

export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    fetch('/.netlify/functions/server').then((response) => response.json());
    const url = 'http://localhost:4000';
    const socket = io(`${url}`);
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
