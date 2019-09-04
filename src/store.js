import { getReviews, setReviews } from "./localStorage";
import { writable } from "svelte/store";

export const reviews = writable(getReviews());

export const editing = writable(null);
