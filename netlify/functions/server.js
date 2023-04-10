const port = 4000;
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: ['http://localhost:3000', 'https://orders-products.netlify.app', 'http://localhost:8888'],
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true,
    },
});

let sessions = 0;

io.on('connection', (socket) => {
    sessions++;
    io.emit('sessions', sessions);

    socket.on('disconnect', () => {
        sessions--;
        io.emit('sessions', sessions);
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export const handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            data: sessions,
        }),
    };
};