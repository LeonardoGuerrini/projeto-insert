'use client'

import { useState } from "react"
import Button from "../components/Button"

export default function Login(){

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (e) => {
        setUsuario("")
        setSenha("")

        axios({
            method: 'post',
            url: 'http://localhost:8080/api/usuario/v1/'
        })
    }


    return (
        <div>
            <form>
                <label htmlFor="usuario">Usuário</label>
                <input type="text" name="usuario" id="usuario" onChange={}/>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" />
                <button>Entrar</button>
            </form>
        </div>
    )
}