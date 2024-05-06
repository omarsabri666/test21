export  async function getCities(){
    const res = await fetch(
      "https://vivid-staging.grandtransfer.io/api/cities",);
     const data = await res.json()
     return data
    
}
export  async function getServices(){
    const res = await fetch(
      "https://vivid-staging.grandtransfer.io/api/services",
    );
     const data = await res.json()
     return data
    
}