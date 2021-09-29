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





// data = {
//   "equipamento": equipment['id'],
//   "solicitante": equipment['proprietario']['id'], 
//   "tipo_servico": 3, 
//   "problema": 5,
//   "observacoes": "texto gerado aleatoriamente com até 100 palavras", 
//   "data_criacao": nowStamp, 
//   "id_tipo_ordem_servico": 1
// }
// res = requests.request('POST',
//                      f"{self.baseApiEndpoint}/api/v1/chamado/novo/",
//                      headers=self.header,
//                      data=data).json()