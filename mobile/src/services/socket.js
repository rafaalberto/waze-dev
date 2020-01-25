import socketio from 'socket.io-client';
import { baseAppURL } from '../utils/constants';

const socket = socketio(baseAppURL, {
    autoConnect: false,
});

const subscribeToNewDevs = (subscribeFunction) => {
    socket.on('newDeveloper', subscribeFunction);
}

const connect = (latitude, longitude, techs) => {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };
    socket.connect();
}

const disconnect = () => {
    if (socket.connected) {
        socket.disconnect();
    }
}

export { subscribeToNewDevs, connect, disconnect };