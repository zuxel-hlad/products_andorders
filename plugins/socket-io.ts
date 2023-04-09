import io from 'socket.io-client';
import { useStore } from '~/store';

export default defineNuxtPlugin(({ $pinia }: any) => {
    const { setActiveSessions } = useStore($pinia);
    const url = 'http://localhost:5000';
    // process.env.NODE_ENV === 'development'
    //     ? 'http://127.0.0.1:5173/sessions'
    //     : 'https://orders-products.netlify.app';
    const socket = io(`${url}`);
    socket.on('sessions', (sessions) => {
        setActiveSessions(sessions);
    });
});
