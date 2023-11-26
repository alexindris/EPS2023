'use client';

import { CircleGraph } from '@/components/CircleGraph';
import { Remediation } from '@/components/Remediation';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <div className='mx-80 items-center text-center flex py-10'>
        <div className='w-1/4'>
          <Image
            className='mx-auto my-auto rounded-3xl object-cover p-4 py-8'
            src='/images/plants/coliflor.png'
            alt='descobreix'
            width={400}
            height={500}
            style={{
              background: 'white 50% / cover no-repeat',
              width: '200px', // ajusta el ancho según tus necesidades
              height: '200px', // ajusta la altura según tus necesidades
            }}
          />
        </div>
        <div className='w-3/4 rounded-3xl py-6 border border-pop bg-pop px-10'>
          <p className='text-green-nav text-2xl p-4 font-bold'>
            Nombre de la planta: Ciruelo
          </p>
          <p className='mb-4 text-green-nav text-2xl p-1 font-bold'>
            ID: 0cab3e86-2381-48f8-965e-3a3ce14e3fab
          </p>
          <div className='flex flex-row justify-between space-x-4'>
            <CircleGraph texto='Humedad de la planta' porcentaje={10} />
            <CircleGraph texto='Humedad del aire' porcentaje={78} />
            <CircleGraph texto='Temperatura' porcentaje={24} degrees={true} />
            <CircleGraph texto='Luz' porcentaje={32} />
          </div>
        </div>
      </div>
      <div className='mx-80 items-center text-center'>
        <h1 className=' text-white text-3xl p-4 font-bold mt-9 '>
          Información de la planta
        </h1>
        <p className='text-white text-lg p-4 font-bold '>
          El orégano es una de las plantas aromáticas más populares y conocidas,
          aportando un sabor delicioso a nuestros platos al tiempo que cuenta
          con un exquisito olor.
        </p>
        <div className='flex flex-wrap justify-between mt-4'>
          <Remediation
            texto={
              'El orégano es una planta aromática muy resistente que, con los cuidados adecuados, puede producir flores y hojas saludables hasta por 5 años. Aunque su duración puede ser superior a este período de tiempo, se recomienda sembrar y utilizar una planta nueva transcurrido este tiempo, al menos si usas sus hojas para cocinar.'
            }
            number={1}
          />
          <Remediation
            texto={
              'Esta planta aromática no es de las que más abono requiere, pues crece bien sin demasiado estímulo. A pesar de ello, y si lo deseas, pues abonarla dos veces al año en primavera y verano usando algún abono natural o artificial, pero ten en cuenta que para hacerlo por primera vez es conveniente que tu planta haya alcanzado al menos los 15 centímetros de altura y cuente con ramificaciones.'
            }
            number={2}
          />
          <Remediation
            texto={
              'Es muy importante tener en cuenta que esta planta soporta muy bien las temperaturas extremas tanto altas como bajas, esto se traduce en que su riego debe ser moderado con el fin de evitar que se pudra. Ten en cuenta que la tierra solo debe regarse cuando se encuentre completamente seca, siendo más frecuente el riego en invierno que en verano.'
            }
            number={3}
          />
          <Remediation
            texto={
              'Debido a que el orégano es una planta usada normalmente en la cocina y que además cuenta con muchos beneficios para nuestra salud, extraer y secar sus hojas es la principal finalidad de cultivarla, por eso es importante conocer el momento adecuado para hacerlo. Se recomienda cortar las hojas justo después de que la planta florezca, el momento idóneo para la recolección.'
            }
            number={4}
          />
          <Remediation
            texto={
              'También debes tener en cuenta el espacio en el que ubicarás tu planta de orégano. La misma puede recibir el sol directo sin problema , de hecho es conveniente que así sea aunque también puedes ubicarla en un espacio en el que cuente con sol y con sombra en distintos momentos del día.'
            }
            number={5}
          />
          <Remediation
            texto={
              'Una vez que hemos extraído las hojas de orégano debemos reunirlas en manojos y colgarlos en un lugar seco y ventilado para secarlos. Cuando estén secos podremos almacenar las hojas en un recipiente preferiblemente hermético para una mejor conservación, añadiéndolas a nuestras recetas favoritas para aportarles su delicioso aroma y sabor.'
            }
            number={6}
          />
        </div>
      </div>
    </>
  );
}
