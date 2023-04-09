import io from 'socket.io-client';
import { useStore } from '~/store';
// import { workport } from '~/server';
// console.log('WORKPORT', workport);

console.log(process.env.port);
export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    const socket = io('http://localhost:5000');
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
