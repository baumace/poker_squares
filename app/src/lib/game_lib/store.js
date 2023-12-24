import { writable } from "svelte/store";
import { DEFAULT_CARD } from "./card";

const activeCard = writable(DEFAULT_CARD);

export { activeCard };
