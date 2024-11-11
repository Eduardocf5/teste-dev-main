import { getStatus } from "../../services/utils";

interface props {
    id: number;
    name: string;
    img: string,
    status: string,
    species: string
  }

const Card = ({ id, name, img, status, species }: props) => {
    
    return (
        <div key={id} className="bg-white flex items-center cursor-pointer hover:shadow-inner p-4 rounded-md gap-9">
            <img src={img} alt="icon" className="rounded-full w-24"/>
            <div>
                <div className="text-lg">{name}</div>
                <div className="flex items-center gap-1">
                    <div className={`rounded-full ${getStatus(status)} w-3 h-3`}></div>
                    <div>{status} - {species}</div>
                </div>
            </div>
        </div>
    )
};

export default Card;