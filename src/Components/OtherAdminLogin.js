import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import swal from 'sweetalert';
// import AdminDashboard from './AdminDashboard';



// const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'

class OtherAdminLogin extends React.Component {

    state = {
        email: '',
        password: '',

        email_err: '',
        password_err: '',

        adminlogin: false
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleValidation = (e) => {
        e.preventDefault();

        let count = 0;

        // email validation
        if (this.state.email == "") {
            this.setState({ email_err: 'Email ID should not be blank' })
            count++;
        }

        if (this.state.email !== "") {
            if (this.state.email.indexOf('@') <= 0) {
                this.setState({ email_err: '@ position error' })
                count++
            }
            else {
                this.setState({ email_err: '' })
            }
        }

        // password validation

        if (this.state.password == "") {
            this.setState({ password_err: "Password should not be blank" });
            count++;
        }
        else {
            this.setState({ password_err: "" });
        }

        // admin validation

        // if (this.state.adminlogin == true) {
        //     return <Link to="/admindashboard" ></Link>
        // }
        // else {
        //     this.setState({ adminlogin: "" });
        // }



        if (count != 0) {
            // alert("error");
            return false;
        }

        else {
            swal('Success', 'Login Successful', 'success');
            this.setState({ email: "", password: "" });
            return true;
        }

    }


    render() {

        // if (this.state.adminlogin == true) {
        //     return <Redirect to="/admindashboard" />
        // }


        return (
            <React.Fragment>

                <center>

                    <form >
                        <table border="4" cellpadding="2" cellspacing="5">

                            <tr style={{ color: 'red', backgroundColor: 'black', textAlign: 'center' }}>
                                <td colspan="2">
                                    Admin

                                </td>
                            </tr>

                            <tr>
                                <td>EMAIL ID :-</td>
                                <td> <input type="email" name="email" onChange={this.handleChange} placeholder="email" value={this.state.email} style={{ textAlign: 'center' }}>
                                </input>
                                    <span name="email_err">{this.state.email_err}</span> </td>
                            </tr>

                            <tr>
                                <td>PASSWORD :-</td>
                                <td>
                                    <input type="password" name="password" onChange={this.handleChange} placeholder="password" value={this.state.password} style={{ textAlign: 'center' }}></input>
                                    <span name="password_err">{this.state.password_err}</span>
                                </td>
                            </tr>

                            <tr style={{ textAlign: 'center' }}>
                                <td colspan="2">

                                    <button style={{
                                        color: 'black',
                                        backgroundColor: 'white'
                                    }} type="submit" value="Submit" onClick={this.handleValidation}><Link to="/admindashboard">Submit</Link></button>

                                </td>
                            </tr>
                            
                            {/* <tr style={{ textAlign: 'center' }}>
                                <td colspan="2">
                                   
                                        <button style={{
                                            color: 'black',
                                            backgroundColor: 'white'
                                        }} type="submit" value="Submit" onClick={this.handleValidation}> <Link to={{ pathname: "/admindashboard", component: (AdminDashboard) }}>Submit</Link></button>
                                    
                                </td>
                            </tr> */}

                        </table>
                    </form>

                </center>
            </React.Fragment>

        )
    }

}
export default OtherAdminLogin;