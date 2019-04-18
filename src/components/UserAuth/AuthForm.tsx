import React, {Component} from 'react';
import styled from "styled-components";
import { Form, Field } from 'react-final-form';

/** Components */
import { Input } from '../Input/Input';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import Box from '../Box/Box';
// import Flex from '../Flex/Flex';

const ErrorStyled = styled.span`
    color: red;
    font-size: 12px;
    letter-spacing: 0.6px;
    }
`;

const InputWrapper = styled(Box)`
    margin: 24px 0;
    
    }
`;

const SendingErrorStyled = styled(Box)`
    color: #333333;
    font-size: 14px;
    color: #EB5757;
    margin-top: 8px;
    }
`;

const buttonVariant = ({invalid, dirty, pristine, submitting,submitFailed }:any ) => {
    let variant = "default"
    if (!pristine){
        if ( submitting && invalid) {
            variant = "error"
        } else if (dirty && !invalid) {
            variant = "primary"
        } } else if (invalid && submitFailed) {
            variant = "error"
             }
    return variant
}

const inputVariant = ( {meta}:any ) => {
    let variant = "default";
    if (meta.active) {
        variant = "primary";
    } else if (meta.dirty && meta.active ) {
        variant = "error";
    }
    else if (meta.touched && meta.invalid) {
        variant = "error"
    }
    return variant;
}

const required = (value: any) => (value ? undefined : 'Обязательно для заполнения');

// const mustBeNumber = (value:number) => (isNaN(value) ? "Номер должен состоять из цифр" : undefined);
//
const passValidate = (min: any) => (value: any) => value.length >= min ? undefined: "Пароль должен содержать минимум 8 символов"

const composeValidators = (...validators: any) => (value: any) =>
    validators.reduce((error: any, validator: (arg0: any) => void) => error || validator(value), undefined);

export class ContactForm extends Component {
    state ={
        message: ""
    }

    handleSubmit = (values:any) => {
        this.setState({message: ""});
        let name = values.name;
        let phone = values.phone;
        let email = values.email;
        let comment = values.comment;
        let file = values.file;
        return fetch('./response.json',{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                comment: comment,
                file: file,
            }),
        })
            .then(res=>res.json())
            .then(data => {
                this.setState({message: ""})
                console.log(data) } )
            .catch(err => {
                this.setState({message: "Неверный логин или пароль"})
                console.log(err)
            });
    };

    // handleFileName = () => {
    //     const fileName: HTMLElement | null = document.getElementById("file").files[0].name;
    //     const fileType: HTMLElement | null = document.getElementById("file").files[0].type;
    //     const loadedFile: string = `${fileName} ${fileType}`;
    //     return loadedFile;
    //    }


    render() {
        return <Form
            onSubmit={this.handleSubmit}
        >
            {({ handleSubmit, submitting, pristine, invalid, dirty }:any) => (
                <form onSubmit={handleSubmit}>

                    <Field
                        name="login"
                        type="text"
                        validate={required}
                        component={Input}
                    >
                        {({ input, meta }:any) => (
                            <InputWrapper>
                                <Input {...input} placeholder={"Логин"} variant={inputVariant({meta})}/>
                                {meta.error && meta.touched && <ErrorStyled> {meta.error} </ErrorStyled>}
                            </InputWrapper>
                        )}
                    </Field>

                    <Field
                        name="pass"
                        type="text"
                        validate={composeValidators(required, passValidate(8))}
                        component={Input}
                    >
                        {({ input, meta }:any) => (
                            <InputWrapper>
                                <Input {...input} placeholder={"Пароль"} variant={ inputVariant({meta}) }/>
                                {meta.error && meta.touched && <ErrorStyled> {meta.error} </ErrorStyled>}
                            </InputWrapper>
                        )}
                    </Field>

                    <ButtonBase
                        type="submit"
                        size="medium"
                        variant={buttonVariant( {invalid, dirty, pristine, submitting } )}
                        disabled={submitting || pristine || invalid}>

                           Вход
                    </ButtonBase>
                    <SendingErrorStyled> {this.state.message} </SendingErrorStyled>
                </form>
            )}
        </Form>
    }}

export default ContactForm;