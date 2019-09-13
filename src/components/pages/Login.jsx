import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import validator from 'validator';
import Axios from 'axios';


class Login extends Component
{
    constructor( props )
    {
        super( props )
        this.state = {
            fields: {
                email: '',
                password: ''
            },
            error: {}
        }
        
    }
    handleValidation (callback)
    {
        let { fields } = this.state;
        let error = {};
        let formIsValid = true;

        // Email Validation
        if ( validator.isEmpty( fields.email ) )
        {
            formIsValid = false;
            error["email"] ="فیلد ایمیل نمیتواند خالی بماند"
        } else if ( ! validator.isEmail( fields.email ) )
        {
            formIsValid = false;
            error["email"]="فرمت ایمیل اشتباه می باشد"
        }


        // Password Validation
        if ( validator.isEmpty( fields.password ) )
        {
            formIsValid = false;
            error["password"] = "فیلد پسورد نمیتواند خالی بماند"
        } else if ( ! validator.isLength( fields.password, {min : 6 , max:undefined } ) )
        {
            formIsValid = false;
            error["password"] = "پسورد نمیتواند کمتر از 6 کاراکتر باشد"
        }

        this.setState( { error }, () =>
        {
            return callback( formIsValid );
            
        });
        

    }

    handleRequest ()
    {
        const { email, password } = this.state.fields;
        let data = new FormData();
        data.append( 'email', email );
        data.append( 'password', password );
        console.log( data );               

        Axios.post( 'http://roocket.org/api/login', data )
        .then( respons => console.log( respons ))
        .catch ( error => console.log( error ))
        
        
    }

    handelSubmit (event)
    {
        event.preventDefault();

        this.handleValidation( (valid) =>
        {
            if ( valid )
            {
                this.handleRequest()
            } 
        })
     
    }

    handleChange(event){
        let fields = this.state.fields;
        let target = event.target;
        fields[target.name]=target.value;
        this.setState( fields );
        


    }



    render() {
        const { email, password } = this.state.fields;
        const { error } = this.state;

        return (
            <div>
                <form className='col-lg-5' onSubmit={this.handelSubmit.bind(this)}>
                    <div className="form-group">
                        <label >Email address</label>
                        <input 
                        type="text" 
                        className={["form-control", error["email"] ? 'is-invalid' : ''].join( ' ' )}  
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={email} 
                        onChange={this.handleChange.bind(this)} 
                        placeholder="Enter email" 
                        name='email'
                        />
                        
                        <span className="invalid-feedback rtl" style={{display : error["email"] ? 'block' : 'none'}}>{error["email"]}</span>
                            
                    </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input 
                            type="password" 
                            className={["form-control", error["password"] ? 'is-invalid' : ''].join(' ')} 
                            id="exampleInputPassword1" 
                            value={password} 
                            onChange ={this.handleChange.bind(this)} 
                            placeholder="Password" 
                            name='password'
                        />

                        <span className="invalid-feedback rtl" style={{ display: error["password"] ? 'block' : 'none'}}>{error["password"]}</span>
                        
                        </div>

                         <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login


