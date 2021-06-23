import { CategoryId } from "../src/assets/ts/categories";

export const guilds = [
  {
    id: '123',
    name: 'Tryberna',
    icon: null,
  },
  {
    id: '321',
    name: 'Bonde do Unicórnio',
    icon: null,
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
]