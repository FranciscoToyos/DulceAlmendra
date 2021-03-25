import axios from 'axios'

const baseUrl = 'http://localhost:3005/api/productos'

 export async function getProducts()  {
   try{
     const resp = await axios({
       url:baseUrl,
       method:'GET'
     })
     return resp
   }catch (err){
     console.log(err)
   }
 }


useEffect(()=> {
  fetch('')
    .then(resp => resp.json())
    .then(datos => {
        setProducts(datos)
        console.log(datos)
    })
}, [])