import io from 'socket.io-client';
import { useStore } from '~/store';

export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    const socket = io('https://unique-kitten-487a3d.netlify.app');
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
