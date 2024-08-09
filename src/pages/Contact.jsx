import { useState } from "react"


export function Contact() {
    
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [question , setComment] = useState("")
    


    function handleSubmit() {
        console.log("Name: ", name)
        console.log("Email: ", email)
        console.log("Question: ", question)
    }


    return (
        <>
            <h1>Contact us</h1>
            <input onChange={(e) => setName(e.target.value)} placeholder= "Name" type="text" />
            <input onChange={(e) => setEmail(e.target.value)} placeholder= "Email" type="text" />
            <input onChange={(e) => setComment(e.target.value)} placeholder= "Question/Comment" type="text" />

            <button onClick={()=>handleSubmit()}>Submit</button>
        </>
    )
}