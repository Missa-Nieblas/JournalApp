import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        //active: {
            //id:'ABC123',
            //title: '',
            //body: '',
            //date: 1234567,
            //imageUrls: [],
        //}
    },
    reducers: {
            savingNewNote: (state) => {  
                state.isSaving = true;
            },
            addNewEmptyNote: (state, action) => {
                state.notes.push( action.payload );
                state.isSaving = false;
            },
            setActiveNote: (state, action) => {
                state.active = action.payload;
            },
            setNotes: (state, action) => {

            },
            setSaving: (state) => {

            },
            updateNotes: (state, action) => {

            },
            deleteNodeById: (state, action) => {

            },
        },
    }
);


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    deleteNodeById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNotes,
     } = journalSlice.actions;