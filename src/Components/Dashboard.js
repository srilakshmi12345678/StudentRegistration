import React, { Component } from 'react'
import './Dashboard.css';
class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            students: [],
            student_ID: '',
            student_Name: '',
                Email: '',
                Class: '',
                Year: '',
                City: '',
                Country: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    ondel=(student)=>{
        this.setState({
            students:this.state.students.filter((currentStudent)=>{
                return currentStudent!=student
            })
        })
    }
    cleardetails=()=>{
        this.setState({
            student_ID: '',
            student_Name: '',
                Email: '',
                Class: '',
                Year: '',
                City: '',
                Country: '' 
        })
    }
    

    savedetails = (e) => {
        e.preventDefault();
        this.setState({
            students: [
                ...this.state.students,
                {
                    student_ID: this.state.student_ID,
                    student_Name: this.state.student_Name,
                    Email: this.state.Email,
                    Class: this.state.Class,
                    Year: this.state.Year,
                    City: this.state.City,
                    Country: this.state.Country
                }
            ]
        })
    }
    
    render() {
        return (
            <div className="container details">
                
                <form className="fields">
                <h1>DASHBOARD</h1>
                    <label for="Student ID"><b>ID</b></label>
                    <input type="text" className="form-control" onChange={this.onChange} name="student_ID" placeholder="ID" />

                    <label for="Student Name"><b>Name</b></label>
                    <input type="text" className="form-control" onChange={this.onChange} name="student_Name" placeholder="Name" />

                    <label for="Email"><b>Email</b></label>
                    <input type="email" className="form-control" onChange={this.onChange} name="Email" placeholder="Email" />

                    <label for="Class"><b>Class</b></label>
                    <input type="text" className="form-control" onChange={this.onChange} name="Class" placeholder="Class" />

                    <label for="Year"><b>Year</b></label>
                    <input type="text" className="form-control" onChange={this.onChange} name="Year" placeholder="Year" />

                    <label for="City"><b>City</b></label>
                    <input type="text" className="form-control" onChange={this.onChange} name="City" placeholder="City" />

                    <label for="Country"><b>Country</b></label>
                    <input type="text" className="form-control" onChange={this.onChange} name="Country" placeholder="Country" />

                    <button onClick={this.savedetails} className="btn btn-light btn-block" id="save">Save</button>
                    <button onClick={this.cleardetails} className="btn btn-light btn-block" id="clear">Clear</button><br/><br/>
                </form><br/>
                <table className="table table-bordered table-striped">
                    <tbody>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Year</th>
                        <th>City</th>
                        <th>Country</th>
                        <th></th>
                        
                    </tr>

                             {
                                this.state.students.map((student, index) => {
                                    return <tr key={index}>
                                        <td>{student.student_ID}</td>
                                        <td>{student.student_Name}</td>
                                        <td>{student.Email}</td>
                                        <td>{student.Class}</td>
                                        <td>{student.Year}</td>
                                        <td>{student.City}</td>
                                        <td>{student.Country}</td> 
                                        <td><button>Edit</button>
                                        <button onClick={()=>{
                                this.ondel(student);
                                        }}>Delete</button></td>
                                        </tr>
                                })
    }
                </tbody>
                </table>

            </div>
        )
    }
}
export default Dashboard;