import * as alt from 'alt';
import * as chat from 'chat';

console.log(chat);

const spawnPos = {
    x: -2639.872,
    y: 1866.812,
    z: 160.135
};

alt.on('playerConnect', (player) => {
    player.model = 'mp_m_freemode_01';
    player.spawn(spawnPos.x, spawnPos.y, spawnPos.z, 1000);
});

chat.registerCmd('hello', (player, arg) => {
    chat.send(player, 'world');
});