import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './View.css';
// import $ from 'jquery';
// import DataTable from 'react-data-table-component';
// import { Link } from 'react-router-dom';

const API = 'https://fullstackdemo.000webhostapp.com/SignUpController/'
// const API = 'http://localhost/suman_php/CIfullStack/SignUpController/'

class View extends React.Component {
    constructor() {
        super();
        this.state = {
            userdata: [],
            userID: ''
        }
            
    }
    
    componentDidMount() {
        this.GetAllData()
    }

    GetAllData(){
        // let headers = new Headers();
        // headers.append('Content-type','application/json');      
        // headers.append('Access-Control-Allow-Origin','*'); 
        
        axios.get(API+'getAllData')
            .then(response => {
                    if (response.data.success == 1) {
                    // console.log(response.data.userdata);
                    this.setState({ userdata: response.data.userdata })
                        // console.log(this.state.userdata);
                }
                else {
                    console.log(response);
                }
            })
            .catch(err => {
                swal('Error!','Something went wrong. Please try again','error')
            })
    }

    SetUserByID = (e) => {
        this.setState({ userID: e.target.value });
    }

    ViewUserByID = (e) => {
        // let headers = new Headers();
        // headers.append('Content-type','application/json');      
        // headers.append('Access-Control-Allow-Origin','*'); 

        axios.post(API+'getDataByID', 
        JSON.stringify({
            userID: this.state.userID
        }))
            .then(response => {
                if (response.data.success == 1) {
                    // console.log(response.data.userdata);
                    this.setState({ userdata: response.data.userdata })

                }
                else {
                    console.log(response);
                }
            })
            .catch(err => {
                console.log('Err', err);
                swal('Error!','Something went wrong. Please try again','error')
            })
    }

    DeleteUser = (id) => {

        axios.post(API+'deleteUser', JSON.stringify({
            userID: id
        }))
            .then(response => {
                if (response.data.success == 1) {
                    swal('Success!', response.data.msg, 'success');
                    this.GetAllData()
                }
                else {
                    console.log(response);
                }
            })
            .catch(err => {
                // console.log('Err', err);
                swal('Error!','Something went wrong. Please try again','error')
            })
    }

    render() {
        return (
            <React.Fragment>
           
                <div className="Rapper">
                     <table id="user">
                        <thead>
                            <tr>
                                <td><b>ID</b></td>
                                <td><b>Name</b></td>
                                <td><b>Gender</b></td>
                                <td><b>Date Of Birth</b></td>
                                <td><b>Address</b></td>
                                <td><b>Contact</b></td>
                                <td><b>Email</b></td>
                                <td><b>Language</b></td>
                                <td><b>Country</b></td>
                                <td><b>Profile Image</b></td>
                                <td><b>Action</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.userdata.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.address}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.email}</td>
                                    <td>{item.language}</td>
                                    <td>{item.country}</td>
                                    {/* <td><img src={"suman_php/CIfullStack/uploads/" + item.files} height="100px" width="100px"></img> </td> */}
                                    <td><img src={item.file_path + item.files} height="100px" width="100px"></img> </td>
                                    <td colSpan="2">
                                        <Link to={{pathname:"/edit", id:(item.id)}}><button className="btn btn-primary">Edit</button></Link>
                                        <button className="btn btn-danger" onClick={() => this.DeleteUser(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> 


                     {/* -------------------- DataTable view -------------------------------------- 

                    {this.state.userdata.map((item) => (
                        <DataTable
                            columns={
                                [
                                    { name: "Name", selector: 'name', sortable: true },
                                    { name: "Gender", selector: 'gender', sortable: true },
                                    { name: "Dob", selector: 'dob', sortable: true },
                                    { name: "Address", selector: 'address', sortable: true },
                                    { name: "Contact", selector: 'contact', sortable: true },
                                    { name: "Email", selector: 'email', sortable: true },
                                    { name: "Language", selector: 'language', sortable: true },
                                    { name: "Country", selector: 'country', sortable: true },
                                    { name: "Image", selector: 'image', sortable: true },
                                    { name: "Action", selector: 'action', sortable: true },
                                ]
                            }
                            data={
                                [{
                                    name: item.name,
                                    gender: item.gender,
                                    dob: item.dob,
                                    address: item.address,
                                    contact: item.contact,
                                    email: item.email,
                                    language: item.language,
                                    country: item.country,
                                    image: <img src={item.file_path + item.files} height="100px" width="100px"></img>,
                                    action: <ul>
                                        <li>
                                            <Link to={{ pathname: "/edit", id: (item.id) }}>
                                                <button className="btn btn-success">Edit</button></Link>
                                        </li>
                                        <li><button className="btn btn-danger" onClick={() => this.DeleteUser(item.id)}>Delete</button></li>
                                    </ul>

                                }]
                            }
                        >
                        </DataTable>
                    ))} 
                    */}
                    <hr />
                    <h4>View By ID</h4>
                    <label>Enter ID</label>&nbsp;&nbsp;
                    <input type="text" name="userID" onChange={this.SetUserByID}></input>&nbsp;&nbsp;
                    <input className="showuserid-button" type="button" value="SHOW" onClick={this.ViewUserByID}></input>
                </div><br/> 
             </React.Fragment>
        );
    }
}

export default View;