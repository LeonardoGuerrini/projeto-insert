'use client'

import { useState } from "react"
import Button from "../components/Button"

export default function Login(){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (e) => {
        setUsuario("")
        setSenha("")

        try{
            const response = await axios.post('http://localhost:8080/api/usuario/v1/login', {
                usuario: `${usuario}`,
                senha: `${senha}`
            })
            console.log(response)
        } catch(err){
            console.error(err)
        }
    }


    return (
        <div>
            <form>
                <label htmlFor="usuario">Usuário</label>
                <input type="text" name="usuario" id="usuario" onChange={(e) => e.target.value(setUsuario)}/>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" />
                <button>Entrar</button>
            </form>
        </div>
    )
}