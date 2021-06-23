import React from 'react';
import Duel from '../img/duel.svg'
import Fun from '../img/fun.svg';
import Ranked from '../img/ranked.svg';
import Training from '../img/training.svg';

import { SvgProps } from 'react-native-svg';

export enum CategoryId {
  DUEL,
  FUN,
  RANKED,
  TRAINING,
}

export type Category = {
  id: CategoryId;
  name: string;
  icon: React.FC<SvgProps>;
}

export const categories : Category[] = [
  {
    id: CategoryId.DUEL,
    name: 'Duelo 1x1',
    icon: Duel,
  },
  {
    id: CategoryId.FUN,
    name: 'Diversão',
    icon: Fun,
  },
  {
    id: CategoryId.RANKED,
    name: 'Ranqueada',
    icon: Ranked,
  },
  {
    id: CategoryId.TRAINING,
    name: 'Treino',
    icon: Training,
  },
]
