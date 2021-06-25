import { CategoryId } from "../src/assets/ts/categories";
import bonde_do_unicornio_icon from './assets/img/bonde_do_unicornio.jpg';
import otaku_fedido_icon from './assets/img/otaku_fedido.jpg';
import tryberna_icon from './assets/img/tryberna.jpg';

import { UserStatus } from "../src/components/gameplayDetails/UserCard";

export const users = [
  {
    id: '123',
    username: 'Set',
    iconSrc: 'https://github.com/heyset.png',
    status: UserStatus.AVAILABLE,
  },
  {
    id: '321',
    username: 'xRazzor',
    iconSrc: 'https://scontent.frvd2-1.fna.fbcdn.net/v/t1.6435-9/30726960_1406490359452708_1034986336928399360_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=84a396&_nc_eui2=AeG40MC1rgKrWDtMWDpxpZmmzvH-2hIFb4XO8f7aEgVvhaJbhveRpHONCLQWakWAqn8&_nc_ohc=At8iC7qOYucAX_3DIPN&_nc_ht=scontent.frvd2-1.fna&oh=c73a4ff2e0ea341fe99c2db0d96505a3&oe=60DBA11D',
    status: UserStatus.UNAVAILABLE,
  },
  {
    id: '522',
    username: 'Zoi',
    iconSrc: 'https://scontent.frvd2-1.fna.fbcdn.net/v/t31.18172-8/26910704_187352705342547_9109445845156021366_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_eui2=AeEMrqL-9OWNncQ4Xz22_k5jFX2T56X8j5gVfZPnpfyPmKL8pAX3uadR-kzkMGl1B0Q&_nc_ohc=fq3oYGlQLYcAX-kD4_O&_nc_ht=scontent.frvd2-1.fna&oh=a12f4d53effad3f1b8fb75a7c3260c73&oe=60DAFE22',
    status: UserStatus.AVAILABLE,
  },
];

export const guilds = [
  {
    id: '123',
    name: 'Tryberna',
    icon: tryberna_icon,
  },
  {
    id: '321',
    name: 'Bonde do Unicórnio',
    icon: bonde_do_unicornio_icon,
  },
  {
    id: '444',
    name: 'Otaku Fedido',
    icon: otaku_fedido_icon,
  },
]

export const gameplays = [
  {
    id: '101010',
    guild: guilds[0],
    category: CategoryId.FUN,
    date: '26/06 às 20:10',
    host: true,
  },
  {
    id: '240921',
    guild: guilds[1],
    category: CategoryId.RANKED,
    date: '27/06 às 20:10',
    host: false,
  },
  {
    id: '28921',
    guild: guilds[2],
    category: CategoryId.TRAINING,
    date: '28/06 às 20:10',
    host: false,
  },
  {
    id: '240933',
    guild: guilds[1],
    category: CategoryId.DUEL,
    date: '01/07 às 01:30',
    host: true,
  },
]