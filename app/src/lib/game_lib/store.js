import { writable } from "svelte/store";

const activeCard = writable(0);

export { activeCard };
