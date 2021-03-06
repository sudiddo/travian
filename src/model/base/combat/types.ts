import { Unit } from '../../types';

/** place of battle with all bonuses, defensive buildings */
export type Place = {
    tribe: number,
    pop: number,
    durBonus: number,
    wall: {
        level: number,
        durability: number,
        bonus: (lvl: number) => { defBonus: number, def?: number },
    }
    def: number,
    party: boolean,
    // traps: number
};

/* attacking armies */
export type Off = {
    kind: 'off',
    pop: number,
    units: Unit[],
    numbers: number[],
    upgrades: number[],
    type: 'attack' | 'raid',
    targets: number[],
    // hero: Hero
    // metallurgy: number
    party: boolean,
    brew: number,
};

/* attacking armies */
export type Def = {
    kind: 'def',
    units: Unit[],
    numbers: number[],
    upgrades: number[],

    // hero: Hero
    // metallurgy: number
};

export type Side = Off | Def;

/** battle state and "registers" to save intermediate calculation values */
export type BattleState = {
    /** base points of armies, with all army effects (hero, items, upgrades),
     * but w/o global things like wall or moralebonus
     */
    base: {
        off: number,
        def: number,
    },
    /** final points with all bonuses */
    final: {
        off: number,
        def: number,
    },
    /** current level of wall, coincides with place.wall except for early ramming phase */
    wall: number,
    /** coefficient for battle */
    immensity: number,
    /** points ratio */
    readonly ratio: number,
};
