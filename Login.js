
import React from 'React';
import './App.css';
import {Link} from 'react-router-dom';
import { Button, TextField, Divider } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/Checkbox';
import PersonIcon from '@material-ui/icons/Person';
const Login=()=> {
  return (
    <div>
        <div className="icon">
            <div className="icon_class">
            <PersonIcon fontSize="large"/>
            </div>
            <div className="text">Log in</div>
        </div>

      
            <div className="row m-2">
            <TextField id="email" className="p-2" type="text" variant="outlined" lable="Enter Email Name" fullWidth/>
            <TextField id="password" className="p-2" type="text" variant="outlined" lable="Enter password Name" fullWidth/>
            <FormControlLabel 
            control={
                <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                checkedIcon={<CheckBoxIcon fontsize="small"/>}
                name="checkedI"
                />
            }
            label="Remember me"
            />
            <Button variant="contained" color="primary">Log in</Button> 
            </div>
            <Divider variant="middle"/>
            <p className="text-center">
                <Link to="signup" className="text-black-50">
                    <h5>create Account</h5>
                </Link>
            </p>
            </div>
  )
}

export default Login;
