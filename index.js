//fetch('https://restcountries.com/v3.1/all')
//.then(res=>res.json())
//.then(data=>console.log(data))
//.catch(error=>console.log(error))

// asyn and await

async function getCountries(){
    try{
        let res= await fetch('https://restcountries.com/v3.1/all')
        let country = await res.json()
        console.log(country)
        return country
    } catch (error){
        console.log(error)
    }
}
getCountries()