

export default function CreateclimateApp() {
  //variables privadas
  //DOM

  const container = document.createElement("div")
  container.classname= ""

  //hago el header
  const header = document.createElement("header")

  //Hago el main
  const main = document.createElement("main")
  
  
  //pintamos todos en el DOM
  container.appendChild(header)


  //funcionalidades

  const searchCrad= createSearchaCard(callback)

  return{ 
    
  }
}
