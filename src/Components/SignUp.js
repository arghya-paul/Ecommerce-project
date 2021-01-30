import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './signUp.css';
const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            address: '',
            phone: '',
            email_id: '',
            dob: '',
            gender: '',
            language: [],
            country: '',
            files: [],
            password: '',

            name_error: '',
            address_error: '',
            phone_error: '',
            email_id_error: '',
            dob_error: '',
            gender_error: '',
            language_error: '',
            country_error: '',
            files_error: '',
            password_error: '',



        }
    }

    handleChange = (e) => {
        let index;
        if (e.target.name == 'language') {
            if (e.target.checked) {
                this.state.language.push(e.target.value);
            } else {
                index = this.state.language.indexOf(e.target.value);
                this.state.language.splice(index, 1);
            }
            console.log(this.state);
        } else {
            this.setState({ [e.target.name]: e.target.value })
            console.log(this.state.country);

        }
    }

    handleValidation = (e) => {
        e.preventDefault();
        let count = 0;

        //Name Vlaidaion

        if (this.state.name == "") {
            this.setState({ name_error: 'Name should not be blank' })
            count++;
        } else {
            this.setState({ name_error: '' })
        }

        //Address Validation

        if (this.state.address == "") {
            this.setState({ address_error: 'Address should not be blank' })
            count++;
        } else {
            this.setState({ address_error: '' })
        }

        //Phone validation

        if (this.state.phone == "") {
            this.setState({ phone_error: 'Phone should not be blank' })
            count++;
        } else {
            this.setState({ phone_error: '' })
        }
        if (this.state.phone !== "") {
            if (isNaN(this.state.phone)) {
                this.setState({ phone_error: 'Must be in number' })
                count++;
            } else if ((this.state.phone.length < 10) || (this.state.phone.length > 10)) {
                this.setState({ phone_error: 'phone no. must be in 10 digit' })
                count++;
            } else {
                this.setState({ phone_error: '' })
            }
        }

        //Email Validation

        if (this.state.email_id == "") {
            this.setState({ email_id_error: 'Email ID should not be blank' })
            count++;
        }

        if (this.state.email_id !== "") {
            if (this.state.email_id.indexOf('@') <= 0) {
                this.setState({ email_id_error: '@ position error' })
                count++
            } else {
                this.setState({ email_id_error: '' })
            }
        }

        //Date of Birth validation

        if (this.state.dob == "") {
            this.setState({ dob_error: 'Date Of Birth should not be blank' })
            count++
        } else {
            this.setState({ dob_error: '' })
        }

        //Gender Validation

        if (this.state.gender == "") {
            this.setState({ gender_error: 'Gender Missing' })
            count++
        } else {
            this.setState({ gender_error: '' })
        }

        //Language Validation

        if (this.state.language == "") {
            this.setState({ language_error: 'Language missing' })
            count++;
        } else {
            this.setState({ language_error: '' })
        }

        //Country Validation

        if (this.state.country == "") {
            this.setState({ country_error: 'Country missing' });
            count++;
        }
        else {
            this.setState({ country_error: '' });
        }

        //Files Validation

        if (this.state.id == "") {
            this.setState({ files_error: 'Files missing' })
            count++;
        } else {
            this.setState({ files_error: '' })
        }

        if (this.state.password == "") {
            this.setState({ password_error: 'Password should not be blank' })
            // this.setState.country_error.style.color="red";
            count++;
        } else {
            this.setState({ password_error: '' })
        }

        if (count !== 0) {
            // alert('Form error')
            return false;
        } else {
            this.handleClick();
            this.setState({name:'',address:'',phone:'',email_id:'',dob:'',gender:'',language:'',
        country:'',files:'',password:''})
            return true;

        }

    }

    handleClick() {
        axios.post(API + 'insertData',
            JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                address: this.state.address,
                contact: this.state.phone,
                email: this.state.email_id,
                dob: this.state.dob,
                gender: this.state.gender,
                language: this.state.language,
                country: this.state.country,
                password: this.state.password,
            })
        )
            .then(response => {
                if (response.data.success == 1) {
                    swal('Success!', response.data.msg, 'success')
                } else {
                    swal('Error!', response.data.msg, 'error')
                }
            })
            .catch(err => {
                swal('Error1', 'something went wrong', 'error')
            })
    }

    handleFileupload = (e) => {
        if (e.target.files.length > 0) {
            let formData = new FormData();
            for (let i = 0; i < e.target.files.length; i++) {
                formData.append('files[' + i + ']', e.target.files[i],
                    e.target.files[i].name);
            }
            axios.post(API + 'uploadFile', formData)
                .then(response => {
                    // console.log(response.data.id)
                    if (response.data.success == 1) {
                        this.setState({ id: response.data.id });
                        swal('Success!', response.data.msg,
                            'success');
                    }
                    else {
                        swal('Error!', response.data.msg, 'error');
                    }
                })
                .catch(err => {
                    console.log(err);
                    swal('Error!', 'Something went wrong. Please try again', 'error')
                })
        }
    }



    render() {
        return (
                <div className="whole-form">
                    <center>
                    <h3>SIGNUP FORM</h3>
                    </center>
                    <form method="POST">
                        
                            <div className="form-group">
                                <label><b>Name:</b></label>
                                <input type="text" value={this.state.name} className="form-control" name="name" placeholder="Name" onChange={this.handleChange} />&nbsp;&nbsp;
                                <span className="text-danger font-weight-bold">{this.state.name_error}</span>
                                
                            </div>

                            <div className="from-group">
                                <label><b>Address:</b></label>
                                <input type="text" value={this.state.address} className="form-control" name="address" placeholder="Address" onChange={this.handleChange} />&nbsp;&nbsp;
                                <span className="text-danger font-weight-bold">{this.state.address_error}</span>
                            </div>

                            <div className="form-group">
                                <label><b>Phone:</b></label>
                                <input type="text" value={this.state.phone} className="form-control" name="phone" value={this.state.phone} placeholder="Phone" onChange={this.handleChange} />&nbsp;&nbsp;
                                <span className="text-danger font-weight-bold">{this.state.phone_error}</span>
                            </div>

                            <div className="from-group">
                                <label><b>Email ID:</b></label>
                                <input type="text" value={this.state.email_id}className="form-control" name="email_id" placeholder="Email ID" onChange={this.handleChange} />&nbsp;&nbsp;
                                <span className="text-danger font-weight-bold">{this.state.email_id_error}</span>
                            </div>

                            <div className="form-group">
                                <label><b>Date Of Birth:</b></label>
                                <td><input type="date" value={this.state.dob} className="form-control" name="dob" placeholder="Date Of Birth" onChange={this.handleChange} />&nbsp;&nbsp;
                                <span className="text-danger font-weight-bold">{this.state.dob_error}</span>
                                </td>
                            </div>

                            <div className="form-group">
                                <label className="form-check-label"><b>Gender:</b></label>
                                <div>
                                    <input type="radio" name="gender" className="form-check-input" value="Male" onChange={this.handleChange} />&nbsp;Male&nbsp;&nbsp;&nbsp;
                                    <input type="radio" name="gender" className="form-check-input" value="Female" onChange={this.handleChange} />&nbsp;Female&nbsp;&nbsp;&nbsp;
                                    <input type="radio" name="gender" className="form-check-input" Value="Others" onChange={this.handleChange} />&nbsp;Others&nbsp;&nbsp;&nbsp;
                                    <span className="text-danger font-weight-bold">{this.state.gender_error}</span>
                                </div>
                            </div>

                            <div className="form-check">
                                <label><b>Language:</b></label>
                                <div> 
                                    <input type="checkbox" name="language" className="from-check-input" value="Bengali" onChange={this.handleChange}/>&nbsp;Bengali&nbsp;&nbsp;
                                    <input type="checkbox" name="language" className="from-check-input" value="Bengali" onChange={this.handleChange}/>&nbsp;Bengali&nbsp;&nbsp;
                                    <input type="checkbox" name="language" className="from-check-input" value="English" onChange={this.handleChange}/>&nbsp;English&nbsp;&nbsp;
                                    <span className="text-danger font-weight-bold">{this.state.language_error}</span>
                                </div>                            
                            </div>

                            <div className="form-group">
                                <label><b>Country:</b></label>
                                    <select name="country" className="form-control" onChange={this.handleChange}>
                                        <option value="">--Select--</option>
                                        <option value="India">India</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Canada">Canada</option>
                                    </select> &nbsp;&nbsp;
                            <span className="text-danger font-weight-bold">{this.state.country_error}</span>
                            </div>

                            <div className="form-group">
                                <label><b>Upload file:</b></label>
                                <input type="file" name="files[]" className="form-control" onChange={this.handleFileupload} />&nbsp;&nbsp;
                                <span className="text-danger font-weight-bold">{this.state.files_error}</span> 
                            </div>

                        <div className="form-group">
                            <label>
                                <b>Password:</b>
                            </label>
                                <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleChange} />
                                <span className="text-danger font-weight-bold">{this.state.password_error}</span>
                        </div><br/>


                            <div style={{ textAlign: 'center' }}>
                                <button type="submit" className="btn btn-success" onClick={this.handleValidation}>Submit</button>
                            </div>
                    </form>
                </div>
                
        
        )
    }
}
export default SignUp;