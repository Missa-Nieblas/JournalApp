import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSalving: true,
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
            addNewEmptyNote: (state, action) => {

            },
            setActiveNote: (state, action) => {

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
    setActiveNote,
    setNotes,
    setSaving,
    updateNotes,
    deleteNodeById,
     } = journalSlice.actions;