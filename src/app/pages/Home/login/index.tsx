import React, { useState } from 'react';

import './login.scss'

import { ReactComponent as Male } from '../../../../shared/assets/icons/male.svg';
import { ReactComponent as Female } from '../../../../shared/assets/icons/female.svg';
import { ReactComponent as Add } from '../../../../shared/assets/icons/circle-letter.svg';
import ButtonLogin from 'src/app/components/buttonsLogin';


interface IFormValue {
    sexo?: string,
    username: string,
    mail: string,
    interesse?: number
}

const Login: React.FC<any> = (props) => {

    
    const [formValues, setFormValues] = useState<IFormValue>({
        sexo: 'male',
        username: '',
        mail: '',
        interesse: 0
    })

 

    const handlerFormValue = (event: any) => {     
        let nam = event.target.name;
        let val = event.target.value;
        setFormValues({...formValues, [nam]: val });
    }

    const submitForm = (e: any) => {
        e.preventDefault();
        window.alert('Aqui estão todos os dados do formulário' +
            JSON.stringify(formValues))

    }

    return (
        <form className="form-login" onSubmit={submitForm}>
            <header className="form-header">
               <ButtonLogin />
            </header>
            <section>
                <button
                    id="male"
                    type="button"
                    value="male"
                    name="sexo"

                    className={
                        formValues.sexo === 'male' ?
                            "active" : ""}
                    onClick={handlerFormValue}
                >
                    <Male />
                </button>
                <button
                    id="female"
                    type="button"
                    value="female"
                    name="sexo"
                    className={
                        formValues.sexo === 'female' ?
                            "active" : ""}
                    onClick={ handlerFormValue}
                >
                    <Female />
                </button>
            </section>
            <main>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                    onChange={handlerFormValue}
                />
                <input
                    type="text"
                    placeholder="Mail"
                    name="mail"
                    required
                    onChange={handlerFormValue}
                />
             
                <select
                    name="interests"
                    defaultValue={0}
                    onChange={handlerFormValue}
                >
                    <option className="default" value="0" disabled hidden>
                       What Are Your Interests?
                    </option>                

                </select>
             

            </main>
            <section id="add">
                <button
                    className="button_icon btn"
                    type="submit"
                >
                    <Add />
                </button>
            </section>
        </form >
    )
}

export default Login;