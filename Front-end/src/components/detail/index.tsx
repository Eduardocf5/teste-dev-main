import { Link } from "react-router-dom";

import arrow from "../../imgs/arrow-back.svg";

import { getStatus } from "../../services/utils";

interface character {
    id: number;
    name: string;
    image: string,
    status: string,
    species: string,
    origin_name: string,
    gender: string,
    location_name: string,
    type: string
}

interface props {
    data: character;
  }

const Detail = ({ data }: props) => {

    return (
        <div className="flex justify-center">
            <div className="bg-white p-4 rounded-md">
                <Link to={"/"}>
                    <img src={arrow} alt="back-arrow" className="w-10 cursor-pointer"/>
                </Link>
                <div className="flex items-center flex-wrap gap-9 mt-5">
                    <img src={data?.image} alt="icond" className="rounded-full max-w-44"/>
                    <div>
                        <div className="text-4xl">{data?.name}</div>
                        <div className="flex items-center gap-1">
                            <div className={`rounded-full ${getStatus(data?.status)} w-3 h-3`}></div>
                            <div>{data?.status} - {data?.species}</div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <span className="font-semibold">Nome de origem: </span>
                    <span>{data?.origin_name}</span>
                </div>
                <div className="mt-2">
                    <span className="font-semibold">Genero: </span>
                    <span>{data?.gender}</span>
                </div>
                <div className="mt-2">
                    <span className="font-semibold">Localização: </span>
                    <span>{data?.location_name}</span>
                </div>
                {
                    data?.type && <div className="mt-2">
                        <span className="font-semibold">Type: </span>
                        <span>{data?.type}</span>
                    </div>
                }
            </div>
        </div>
    )
};

export default Detail;