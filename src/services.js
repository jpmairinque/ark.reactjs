const getCompanies = async () => {
  const res = await fetch("http://localhost:8000/api/companies/");
  const data = await res.json();
  return data;
};

export const getChamados = async () => {
  const res = await fetch("http://localhost:8000/api/chamados/");
  const data = await res.json();
  console.log(data);
  return data;
};

const getEquipments = async () => {
  const res = await fetch("http://localhost:8000/api/equipments/");
  const data = await res.json();
  return data;
};

export const getMoreEquipments = async () => {
  const allComp = await getCompanies();

  var moreEquipments = 0;
  var biggestLength = 0;

  allComp.forEach((obj) => {
    if (obj.qtequipments > biggestLength) {
      biggestLength = obj.qtequipments;
      moreEquipments = obj.id;
    }
  });

  const moreEquipComp = allComp.find((x) => x.id === moreEquipments).nome;

  return [moreEquipComp, biggestLength];
};

export const getMoreChamados = async () => {
  const allEquip = await getEquipments();

  console.log(allEquip);

  var moreChamados = 0;
  var biggestLength = 0;

  allEquip.forEach((obj) => {
    if (obj.qtchamados > biggestLength) {
      biggestLength = obj.qtchamados;
      moreChamados = obj.id;
    }
  });

  const moreChamadosEquip = allEquip.find((x) => x.id === moreChamados).modelo;

  console.log(moreChamadosEquip);

  return [moreChamadosEquip, biggestLength];
};

export const getAuthToken = async() =>{

       const authData = {           
        email: 'a@a.com',
        password: 'a'
      } 
       const res = await fetch('https://desenvolvimento.arkmeds.com/rest-auth/token-auth/', {
        method: 'POST',       
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
      })

      const data = await res.json()
      return data.token
  }




export const postChamado = async (ticket) => {

  const token = await getAuthToken()

  console.log(token)

  const res = await fetch("https://desenvolvimento.arkmeds.com/api/v1/chamado/novo/", {
    method: 'POST',
    headers: {
      'Authorization': `JWT ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ticket)
  });

  try{

  const topRes = await res.json()
  return {result: false, msg: "Chamado enviado com sucesso!"}

  } catch {
    return {result: true, msg: "Informaçoẽs inválidas. Certifique a procedência do número do equipamento e do solicitante."}
  }
  
  

}







