import React from "react";
import { Grid,TextField,Button } from "@mui/material";

export const Login=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField variant="outlined"fullWidth placeholder="Enter Email" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField variant="outlined" fullWidth placeholder="Enter Password" color="secondary" />
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" fullWidth >Submit</Button>
                    </Grid>
                    <Grid item xs={3}>
                       <Button variant="contained" fullWidth color="inherit">Reset</Button>
                       </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2}></Grid>

        </Grid>
    )
}