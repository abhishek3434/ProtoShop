import { createSelector } from "reselect";
const directoryState=state=>state.directory;

export const selectDirectory=createSelector(
    [directoryState],
    directory=>directory.items
);