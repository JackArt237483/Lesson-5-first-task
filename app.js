// const som = document.querySelector("#som")
// const usd = document.querySelector("#usd")
// const rub = document.querySelector("#rub")

// const handleConvert = (elem,target,isTrue) => {
//   elem.addEventListener("input", () =>{
//     const request = new  XMLHttpRequest()
//     request.open("GET", "data.json");
//     request.setRequestHeader("content-type" ,"application/json")
//     request.send()
//     request.addEventListener("load", () => {
//         const response = JSON.parse(request.response)
//         isTrue
//             ?(target.value = (elem.value / response.usd).toFixed(2))
//             :(target.value = (elem.value * response.usd).toFixed(2))
//          elem.value === "" && (target.value = "") 
//     })
//   })
// }

// handleConvert(som,usd, 42)
// handleConvert(usd,som, "")


// const som = document.querySelector("#som")
// const usd = document.querySelector("#usd")
// const rub = document.querySelector("#rub")

// const handleConvert = (elem,target, target2,isTrue,isTrue2) => {
//   elem.addEventListener("input", () =>{
//     const request = new  XMLHttpRequest()
//     request.open("GET", "data.json");
//     request.setRequestHeader("content-type" ,"application/json")
//     request.send()
//     request.addEventListener("load", () => {
//         const response = JSON.parse(request.response)
//         if(isTrue){
//           (target.value = (elem.value / response.usd).toFixed(2))
//           (target2.value = (elem.value * response.rub).toFixed(2))
//         }else if(isTrue2){
//           (target.value = (elem.value / response.rub).toFixed(2))
//           (target2.value = (elem.value * response.rub / response).toFixed(2))
//         }
//          else{
//             (target.value = (elem.value * response.usd).toFixed(2))
//             (target2.value = (elem.value * response.usd/ response.rub).toFixed(2))
//           }
    
//          elem.value === "" && (target.value = "") 
//          elem.value === "" && (target2.value = "") 
//     })
//   })
// }

// handleConvert(som,usd,rub, 42)
// handleConvert(usd,som,rub)
// handleConvert(rub,usd,som)

// const som = document.querySelector("#som")
// const usd = document.querySelector("#usd")
// const rub = document.querySelector("#rub")

const handleConvert = (elem,target, target2,) => {
  elem.addEventListener("input", () =>{
    const request = new  XMLHttpRequest()
    request.open("GET", "data.json");
    request.setRequestHeader("content-type" ,"application/json")
    request.send()
    request.addEventListener("load", () => {
        const response = JSON.parse(request.response)
        if(elem === som){
          (target.value = (elem.value / response.usd).toFixed(2))
          (target2.value = (elem.value * response.rub).toFixed(2))
        }else if(elem === rub){
          (target.value = (elem.value / response.rub).toFixed(2))
          (target2.value = (elem.value * response.rub / response.usd).toFixed(2))
        }
         else if(elem === usd){
            (target.value = (elem.value * response.usd).toFixed(2))
            (target2.value = (elem.value * response.usd/ response.rub).toFixed(2))
          }
    
         elem.value === "" ? (target.value = "") :null;
         elem.value === "" ? (target2.value = "") :null;
    })
  })
}

handleConvert(som,usd,rub)
handleConvert(rub,som,usd)
handleConvert(usd,som,rub)
