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
    color: white;
    font-size: 20px;
    }
`;

const buttonVariant = ({invalid, dirty, pristine, submitting}:any ) => {
    let variant = "default"
    if (!pristine){
        if ( submitting && invalid) {
            variant = "error"
        } else if (dirty && !invalid) {
            variant = "primary"
        } }
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
// const mailValidate = (min: any) => (value: any) => value.length >= min ? undefined: "Некорректный адрес эл.почты"
//
// const composeValidators = (...validators: any) => (value: any) =>
//     validators.reduce((error: any, validator: (arg0: any) => void) => error || validator(value), undefined);

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
                this.setState({message: "Форма успешно отправлена :)"})
                console.log(data) } )
            .catch(err => {
                this.setState({message: "Произошла ошибка при отправке формы"})
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
                        name="name"
                        placeholder="Имя"
                        type="text"
                        validate={required}
                        component={Input}
                    >
                        {({ input, meta }:any) => (
                            <InputWrapper>
                                <Input {...input} placeholder={"Имя"} variant={inputVariant({meta})}/>
                                {meta.error && meta.touched && <ErrorStyled> {meta.error} </ErrorStyled>}
                            </InputWrapper>
                        )}
                    </Field>

                    <Field
                        name="phone"
                        placeholder="Телефон"
                        type="tel"
                        validate={required}
                        component={Input}
                    >
                        {({ input, meta }:any) => (
                            <InputWrapper>
                                <Input {...input} placeholder={"Телефон"} variant={ inputVariant({meta}) }/>
                                {meta.error && meta.touched && <ErrorStyled> {meta.error} </ErrorStyled>}
                            </InputWrapper>
                        )}
                    </Field>

                    <ButtonBase
                        type="submit"
                        variant={buttonVariant( {invalid, dirty, pristine, submitting } )}
                        disabled={submitting || pristine || invalid}>

                           Вход
                    </ButtonBase>
                    <SendingErrorStyled> {this.state.message} </SendingErrorStyled>
                    {/*<pre> {JSON.stringify(values)} </pre>*/}
                </form>
            )}
        </Form>
    }}

export default ContactForm;