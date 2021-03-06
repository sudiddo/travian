import { extend } from '../../utils';

import buildings, { ID } from '../t4/buildings';

const f = buildings[ID.TRADE_OFFICE].f;

export default extend(buildings, {
    [ID.TRADE_OFFICE]: { f: (l: number) => (f(l) as number) * 2 },
});
