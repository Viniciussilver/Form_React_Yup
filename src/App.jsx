import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Image from './assets/form.jpg'

import {
  Form, 
  Label, 
  Input, 
  Button
} from './styles'

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
  password: yup.string().min(6, "minímo 6 caracters").required("A senha é obrigatório"),
  confirmePassword: yup.string().required("Confirmar a senha é obrigatório")
  .oneOf([yup.ref('password')], "As senhas devem ser iguais"),
  
}).required();


function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)});
  
function dadosForm(userData){
  
}

  return (
   <Form onSubmit={handleSubmit(dadosForm)}>
    <img src={Image} />
    <Label>Nome
      <Input type="text" {...register("name", {required:true})}/>
      <span>{errors.name?.message}</span>
    </Label>

    <Label>Email
      <Input type="email"{...register("email")}/>
      <span>{errors.email?.message}</span> 
    </Label>

    <Label>Senha
      <Input type="password" {...register("password")}/>
      <span>{errors.password?.message}</span> 
    </Label>

    <Label>Confirmar Senha
      <Input type="password" {...register("confirmePassword")}/>
      <span>{errors.confirmePassword?.message}</span> 
    </Label>
    <Button type="submit">Cadastrar-se</Button>
    </Form>
  )
}

export default App
