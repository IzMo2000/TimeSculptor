import React from "react";
import { useState } from "react";
import { Dialog, DialogTitle, DialogActions, DialogContent } from "@mui/material";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { v4 as uuid } from "uuid"

// This is the dialog box component, 
// NOTE: addEvent method has been passed in, but not used yet
// NOTE: close button is working, submit button has no functionality
export default function AddDialog({open, closeFunction, addEvent})
{
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [color, setColor] = useState("");

    const unique_id = uuid();

    const nameChange = (event) => {
        setName(event.target.value);
    };

    const dateChange = (event) => {
        setDate(event.target.value);
    };

    const timeChange = (event) => {
        setTime(event.target.value)
    };

    const colorChange = (event) => {
        setColor(event.target.value);
    }

    const formSubmit = () => {
        const newEvent = {
            id: unique_id,
            title: name,
            date: date,
            time: time,
            color: color,
            icon: "/assets/images/login.png"
        }

        addEvent(newEvent);

        closeFunction();
    };

    return (
        <>
            <Dialog open={open}>
                <DialogTitle>Add an Event</DialogTitle>
                <DialogContent>
                    <TextField
                    // text field for event name
                        id="eventName"
                        label="Event Name"
                        fullWidth
                        variant="filled"
                        value = {name}
                        onChange={nameChange}
                    />
                    <TextField
                    // text field for event date
                        id="date"
                        label="Date"
                        variant="filled"
                        value={date}
                        onChange={dateChange}
                    />
                    <TextField
                    // text field for event time
                        id="time"
                        label="Time"
                        variant="filled"
                        value={time}
                        onChange={timeChange}
                    />
                    <TextField
                        id="color"
                        label="Color"
                        type="color" 
                        variant="filled"
                        value={color}
                        onChange={colorChange} 
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick = {formSubmit}> Submit </Button>
                    <Button onClick={() => closeFunction()}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}