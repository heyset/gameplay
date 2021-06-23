import { CategoryId } from "../src/assets/ts/categories";
import bonde_do_unicornio_icon from './assets/img/bonde_do_unicornio.jpg';
import otaku_fedido_icon from './assets/img/otaku_fedido.jpg';
import tryberna_icon from './assets/img/tryberna.jpg';

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