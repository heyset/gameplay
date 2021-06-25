import { CategoryId } from "../assets/ts/categories";
import { UserStatus } from "../components/gameplayDetails/UserCard";

export const dict = {
  category: {
    [CategoryId.DUEL]: 'Duelo 1x1',
    [CategoryId.FUN]: 'Diversão',
    [CategoryId.RANKED]: 'Ranqueada',
    [CategoryId.TRAINING]: 'Treino',
  },
  status: {
    [UserStatus.AVAILABLE]: 'Disponível',
    [UserStatus.UNAVAILABLE]: 'Ocupado',
  },
}
