
import React from 'React';
import './App.css';
import {Link} from 'react-router-dom';
import { Button, TextField, Divider } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icon/checkbox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const Signup=()=> {
  return (
    <div>
        <div className="icon">
            <div className="icon_class">
            <PersonAddIcon fontSize="large"/>
            </div>
            <div className="text">Signin</div>
        </div>

        <div className="row m-2">
            <div className="col-6 p-2">
                <TextField id="firstname" type="text" variant="outlined" lable="Enter First Name" fullWidth/>
            </div>

            <div className="col-6 p-2">
            <TextField id="lastname" type="text" variant="outlined" lable="Enter last Name" fullWidth/>
            </div>
            </div>

            <div className="row m-2">
            <TextField id="email" className="p-2" type="text" variant="outlined" lable="Enter Email Name" fullWidth/>
            <TextField id="password"  className="p-2" type="text" variant="outlined" lable="Enter password Name" fullWidth/>
            <FormControlLabel 
            control={
                <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                checkedIcon={<CheckBoxIcon fontsize="small"/>}
                name="checkedI"
                />
            }
            label="I agree to all terms and conditions."
            />
            <Button variant="contained" color="primary">create Account</Button> 
            </div>
            <Divider variant="middle"/>
            <p className="text-center">
                <Link to="login" className="text-black-50">
                   <h5>Already have an Account?</h5>
                </Link>
            </p>
            </div>
  )
}

export default Signup;