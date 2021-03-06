import * as React from 'react';
import { Building } from '../model/base/buildings';
import { SLOT } from '../model/t5/buildings';
import { Lang } from '../lang';
import DefInner from './DefInner';

export default class Def extends React.Component<
    { buildings: Building[], lang: Lang }
> {
    public render() {
        const walls: Building[] = [];
        const bases: Building[] = [];
        const ditch: Building[] = [];
        const { buildings, lang } = this.props;
        // build configuration
        buildings.forEach(building => {
            const bonus = building.f(0);
            if (typeof bonus !== 'object') { return; }
            if ('defBonus' in bonus) {
                if (building.r && building.r.r) {
                    walls.push(building);
                } else if (building.s === SLOT.DITCH) {
                    ditch.push(building);
                }
            } else if ('def' in bonus) {
                bases.push(building);
            }
        });
        return <DefInner
            buildings={buildings}
            walls={walls}
            bases={bases}
            ditch={ditch}
            lang={lang} />;
    }
}
