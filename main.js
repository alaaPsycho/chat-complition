document.getElementById('button').addEventListener("click",()=>{
    chat()
})


function chat(){
    let value = document.getElementById('input').value

    let body= {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content":`${value}` }]
      };
      let headers ={
       Authorization:" Bearer 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"
       
      }
      axios.post('https://api.openai.com/v1/chat/completions',body,{headers:headers})
    
      .then((res)=> {
        let data = res.data.choices[0].message.content
        console.log( res.data.choices[0].message.content)
        document.getElementById('textarea').value=data
    
    }).catch((err)=>console.error(err))
    
}