import { writable } from 'svelte/store';
import { DEFAULT_CARD } from './card';

/**
 * Active card in the game to be placed into the grid.
 */
const activeCard = writable(DEFAULT_CARD);

export { activeCard };
