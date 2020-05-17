
   export function handleSubmit(event) {
        event.preventDefault()
        let form = document.getElementById('name').value
     
	    postData('/api', form)
}


    
 export const postData = async ( url='', data={})=>{
    const response = await fetch("http://localhost:8081/api", {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
              
        body: JSON.stringify(data), 
    });
    console.log(data);
    
};
//export { postData }