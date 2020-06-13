import React from 'react'
import { Alert } from 'react-native'

export default function validacaoEmail(email) {
    let usuario = email.substring(0, email.indexOf("@"));
    let dominio = email.substring(email.indexOf("@")+ 1, email.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) && 
        (usuario.search("@")==-1) && 
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) && 
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&      
        (dominio.indexOf(".") >=1)&& 
        (dominio.lastIndexOf(".") < dominio.length - 1)){
            return true
        }else{
            return Alert.alert('Email invalido')
        }
}

