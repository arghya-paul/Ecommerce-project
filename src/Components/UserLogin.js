import React from 'react';
// import axios from 'axios';
import swal from 'sweetalert';
import './AdminLogin.css';
import { Redirect } from 'react-router-dom';

// const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'

class UserLogin extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            email_error:'',
            password_error:'',
            login_status:false
        }
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


    handleValidation=(e)=>{
        e.preventDefault();
        let count=0;
        // email validation

        if (this.state.email == "") {
            this.setState({ email_error: 'Email ID should not be blank' })
            count++;
        }

        if (this.state.email !== "") {
            if (this.state.email.indexOf('@') <= 0) {
                this.setState({ email_error: '@ position error' })
                count++
            } else {
                this.setState({ email_error: '' })
            }
        }
        // password validation

        if(this.state.password ==""){
            this.setState({password_error:'Password should not be blank'})
            count++;
        }else{
            this.setState({password_error:''})
        }

        if(count!==0){
            return false;
        }else{
            this.setState({email:'',password:'',login_status:true})
            swal('Success','Login Successful','success');
            return true;
        }
    }


    render() {

        if(this.state.login_status==true){
            return <Redirect to="/userdashboard"/>
        }

        return (
            <div className="dispencer">
                <center>
                    <p>
                        <b>USER LOGIN</b>
                    </p>
                </center>
                <form >
                    <div class="form-group">
                        <label for="email"><b>Email</b></label>
                        <input name="email" className="form-control" aria-describedby="passwordHelp"
                            placeholder="Email" autoComplete="off" value={this.state.email} onChange={this.handleChange}></input>
                            <span className="text-danger font-weight-bold">{this.state.email_error}</span>
                    </div>

                    <div className="form-group">
                        <label for="password"><b>Password</b></label>
                        <input type="password" name="password" value={this.state.password} className="form-control" aria-describedby="passwordHelp"
                            placeholder="Password" onChange={this.handleChange}>
                        </input>
                        <span className="text-danger font-weight-bold">{this.state.password_error}</span>
                    </div><br />
                    <center>
                        <button className="btn btn-success" type="submit" onClick={this.handleValidation}>
                            Submit
                </button>
                    </center>
                </form>
            </div>
        )
    }

}
export default UserLogin;







