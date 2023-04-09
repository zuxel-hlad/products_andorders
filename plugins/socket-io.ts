import io from 'socket.io-client';
import { useStore } from '~/store';
// import { workport } from '~/server';
// console.log('WORKPORT', workport);
const port = process?.env?.PORT || 5000;
export default defineNuxtPlugin(({ $pinia }: any) => {
    console.log('port');
    const { setActiveSessions } = useStore($pinia);
    const socket = io(`http://localhost:${port}`);
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
