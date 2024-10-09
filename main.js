document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const breedName = document.querySelector('input').value
    try{
        const response = await fetch(`https://toy-dog-breeds-api-1.onrender.com/api/${breedName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = `${data.name} ${data.height} ${data.weight} ${data.origin_regions} ${data.reputation}`
    }catch(error){
        console.log(error)
    }
}