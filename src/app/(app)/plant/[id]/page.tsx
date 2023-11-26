'use client';

import { CircleGraph } from '@/components/CircleGraph';
import { Remediation } from '@/components/Remediation';
import { useGetOnePlant } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';
import { StandardButton } from '@/components/Buttons/StandardButton';

export default function Page({ params }: { params: { id: string } }) {
  const { data, isLoading } = useGetOnePlant(params.id);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className='mx-32 items-center text-center flex py-10'>
        <div className='w-1/4'>
          <Image
            className='mx-auto my-auto rounded-3xl object-cover p-4 py-8'
            src={`/images/plants/${data.plant.imageURL}.png`}
            alt='descobreix'
            width={400}
            height={500}
            style={{
              background: 'white 50% / cover no-repeat',
              width: '200px',
              height: '200px',
            }}
          />
        </div>
        <div className='w-3/4 rounded-3xl py-6 border border-pop bg-pop px-10'>
          <p className='text-green-nav text-2xl p-4 font-bold'>
            Nom de la planta: {data.plant.name}
          </p>
          <p className='mb-4 text-green-nav text-2xl p-1 font-bold'>
            ID: {data.plant.id}
          </p>
          <div className='flex flex-row justify-between space-x-4'>
            <CircleGraph
              texto='Humitat de la planta'
              porcentaje={data.plant.soilHumidity}
            />
            <CircleGraph
              texto='Humitat del aire'
              porcentaje={data.plant.airHumidity}
            />
            <CircleGraph
              texto='Temperatura'
              porcentaje={data.plant.temperature}
              degrees={true}
            />
            <CircleGraph texto='Llum' porcentaje={data.plant.light} />
          </div>
          <Link href={`/historic/${data.plant.id}`}>
            <StandardButton
              text='Històric'
              className='rounded-full text-white bg-orange-btn p-5 text-xs mt-4'
            >
              <IoMdArrowForward className='ml-2' />
            </StandardButton>
          </Link>
        </div>
      </div>
      <div className='mx-80 items-center text-center'>
        <h1 className=' text-white text-3xl p-4 font-bold mt-9 '>
          Informació de la planta
        </h1>
        <p className='text-white text-lg p-4 font-bold '>
          L&#39;orenga és una de les plantes aromàtiques més populars i
          conegudes, aportant un sabor deliciós als nostres plats alhora que
          compta amb un exquisit olor.
        </p>
        <div className='flex flex-wrap justify-between mt-4'>
          <Remediation
            texto={
              'L orenga és una planta aromàtica molt resistent que, amb els cures adequats, pot produir flors i fulles saludables fins a 5 anys. Tot i que la seva durada pot ser superior a aquest període de temps, es recomana sembrar i utilitzar una planta nova transcorregut aquest temps, almenys si s&#39;utilitzen les seves fulles per cuinar.'
            }
            number={1}
          />

          <Remediation
            texto={
              'Aquesta planta aromàtica no és de les que més adob requereix, ja que creix bé sense massa estímul. Tot i això, i si ho desitges, pots abonar-la dues vegades l&#39;any a la primavera i a l&#39;estiu utilitzant algun adob natural o artificial, però tingues en compte que per fer-ho per primera vegada és convenient que la teva planta hagi assolit almenys els 15 centímetres d&#39;alçada i compti amb ramificacions.'
            }
            number={2}
          />

          <Remediation
            texto={
              'És molt important tenir en compte que aquesta planta suporta molt bé les temperatures extremes tant altes com baixes, això es tradueix en què el seu reg ha de ser moderat amb la finalitat d&#39;evitar que es pugui podrir. Tingues en compte que la terra només ha de regar-se quan es trobi completament seca, sent més freqüent el reg a l&#39;hivern que a l&#39;estiu.'
            }
            number={3}
          />
          <Remediation
            texto={
              "A causa que l'orenga és una planta normalment utilitzada a la cuina i que, a més a més, ofereix molts beneficis per a la nostra salut, extreure i assecar les seves fulles és la principal finalitat de cultivar-la, per això és important conèixer el moment adequat per fer-ho. Es recomana tallar les fulles just després que la planta floreixi, el moment idoni per a la recol·lecció."
            }
            number={4}
          />
          <Remediation
            texto={
              "També has de tenir en compte l'espai on ubicaràs la teva planta d'orenga. Pot rebre la llum del sol directament sense cap problema, de fet, és convenient que així sigui, tot i que també pots situar-la en un espai on tingui sol i ombra en diferents moments del dia."
            }
            number={5}
          />
          <Remediation
            texto={
              "Un cop hem extret les fulles d'orenga, hem de reunir-les en feixos i penjar-les en un lloc sec i ventilat per assecar-les. Quan estiguin secs, podrem emmagatzemar les fulles en un recipient preferiblement hermètic per a una millor conservació, afegint-les a les nostres receptes favorites per donar-los el seu deliciós aroma i sabor."
            }
            number={6}
          />
        </div>
      </div>
    </>
  );
}
