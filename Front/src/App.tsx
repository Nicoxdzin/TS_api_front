import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Interface do veículo
interface Vehicle {
  brand: string;
  model: string;
  year: number;
}

const App = () => {
  const [vehicle, setVehicle] = useState<Vehicle>();

  useEffect(() => {
    axios.get<Vehicle>('http://localhost:3333/vehicle')
      .then(response => {
        setVehicle(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Erro ao buscar veículo:', error);
      });
  }, []);

  return (
    <div>
      {vehicle ? (
        <div>
          <h1>{vehicle.brand}</h1>
          <p>Modelo: {vehicle.model}</p>
          <p>Ano: {vehicle.year}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default App;