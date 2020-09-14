import { Action } from '@ngrx/store';
import { BandaRock } from './banda-rock.model';


//ESTADO
export interface BandaRockSate {
    items: BandaRock[];
    loading: boolean;
    favorito: BandaRock;
}

export const intializeBandaRockState = function () {
    return {
        items: [],
        loading: false,
        favorito: null
    }
}

export enum BandaRockActionType {
    VOTE_UP = "[Banda Rock] Vote Up",
    VOTE_DOWN = "[Banda Rock] Vote Down"
}

export class VoteUpAction implements Action {
    type = BandaRockActionType.VOTE_UP;
    constructor(public banda: BandaRock) { }
}

export class VoteDownAction implements Action {
    type = BandaRockActionType.VOTE_DOWN;
    constructor(public banda: BandaRock) { }
}

export type BandaRockActions = VoteUpAction | VoteDownAction;

//REDUCERS
export function reducerBandaRock(
    state: BandaRockSate,
    action: BandaRockActions,
): BandaRockSate {
    switch (action.type) {
        // case DestinosViajesActionTypes.NUEVO_DESTINO: {
        //     return {
        //         ...state,
        //         items: [...state.items, (action as NuevoDestinoAction).destino]
        //     };
        // }
        // case DestinosViajesActionTypes.ELEGIDO_FAVORITO: {
        //     state.items.forEach(x => x.setSelected(false));
        //     let fav: DestinoViaje = (action as ElegidoFavoritoAction).destino;
        //     fav.setSelected(true);
        //     return {
        //         ...state,
        //         favorito: fav
        //     };
        // }
        case BandaRockActionType.VOTE_UP: {
            const d: BandaRock = (action as VoteUpAction).banda;
            d.voteUp();
            return { ...state };
        }
        case BandaRockActionType.VOTE_DOWN: {
            const d: BandaRock = (action as VoteDownAction).banda;
            d.voteDown();
            return { ...state };
        }
    }
    return state;
}
