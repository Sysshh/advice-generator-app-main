document.getElementById('dice-btn').addEventListener("click", async ()=>{
    try{
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        document.getElementById('advice-id').textContent = `${data.slip.id}`
        document.getElementById('advice').textContent = `"${data.slip.advice}"`
    }

    catch(err){
        console.log(err)
    }
})



// fetch('https://api.adviceslip.com/advice')
//  .then(res => res.json())
//    .then(data => {
//        document.getElementById('advice-id').textContent = `${data.slip.id}`
//        document.getElementById('advice').textContent = `"${data.slip.advice}"`
//    }).catch(err=>console.log(err))

