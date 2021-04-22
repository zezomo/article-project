import { response } from "express";
import {checkForlink} from './Checkerforlink'

const post = async (url = "", data = {}) => {
    const res = await fetch(url, {
      method: `POST`,
      credentails: `same-Origin`,
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    try{
        return await response.json()
    }catch (error) {
        console.log("error", error);
    }
};

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value
    const output = document.getElementById('results');
    if(checkForlink(formText)){
        post("http://localhost:8080/runner",{url:formText}).then(data =>{

        })

    }else{
        output.innerHTML='not url'
    }

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
