import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAll } from "../../services/characters";

import Card from "../../components/card";


import searchIcon from "../../imgs/search.svg";
import arrowIcon from "../../imgs/arrow.svg" ;

interface props {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin_name: string;
    origin_url: string;
    location_name: string;
    location_url: string;
    image: string;
    created_at: string;
    updated_at: string;
};

const Home = () => {
    const [ values, setValues ] = useState<props[]>([]);

    const [ page, setPage ] = useState<number>(1);
    const [ lastPage, setLastPage ] = useState<number>(10);
    const [ select, setSelect ] = useState<string>("name");
    const [ search, setSearch ] = useState<string>("");
    const [ status, setStatus ] = useState<string>("");
    const [ gender, setGender ] = useState<string>("");

    const handleSearch = () => {
        setValues([]);
        if(page === 1) getData();
        else setPage(1);
    }

    const handleChangestatus = (e) => {
        setValues([]);
        setPage(1);
        setStatus(e.target.value);
    }

    const handleChangeGender = (e) => {
        setValues([]);
        setPage(1);
        setGender(e.target.value);
    }

    const showLess = () => {
        setPage(1);
        setValues([]);
    }

    const showMore = async () => {
        setPage(page + 1);
    }

    const getData = async () => {
        const filter = `
            ?page=${page}
            ${ search && `&${select}=${search}`}
            ${ status && `&status=${status}`}
            ${ gender && `&gender=${gender}`}`.replace(/\s+/g, '');

        await getAll(filter).then(({ data }) => {
            setValues(
                page === 1
                    ? data.data
                    : values.concat(data.data)
            );
            setLastPage(data.last_page);
        });

    }

    useEffect(() => { setValues([]) }, [status,gender]);

    useEffect(() => { getData() }, [page, status, gender]);

    return (
        <div>
            <div className="flex justify-end items-end flex-wrap mb-6 gap-6 text-sm">
                <div>
                    <span className="flex mb-2 ml-1 font-semibold">Pesquisar por</span>
                    <select name="filter" id="filter" className="rounded-lg p-2.5"
                        value={select}
                        onChange={(e) => setSelect(e.target.value)}>
                        <option value="name">Nome</option>
                        <option value="species">Espécie</option>
                        <option value="origin_name">Nome de Origem</option>
                        <option value="location_name">Localização</option>
                    </select>
                </div>
                <div>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => { if(e.key === 'Enter') handleSearch()}}
                        type="text"
                        placeholder="..."
                        className="rounded-lg p-2"/>
                </div>
                <div>
                    <span className="flex mb-2 ml-1 font-semibold">Status</span>
                    <select name="status" id="status" className="rounded-lg p-2.5"
                        value={status}
                        onChange={handleChangestatus}>
                        <option value=""></option>
                        <option value="Alive">Vivo</option>
                        <option value="Dead">Morto</option>
                        <option value="unknown">Desconhecido</option>
                    </select>
                </div>
                <div>
                    <span className="flex mb-2 ml-1 font-semibold">Gênero</span>
                    <select name="gender" id="gender" className="rounded-lg p-2.5"
                        value={gender}
                        onChange={handleChangeGender}>
                        <option value=""></option>
                        <option value="Female">Feminino</option>
                        <option value="Male">Masculino</option>
                        <option value="unknown">Desconhecido</option>
                    </select>
                </div>
                <div>
                    <img
                        src={searchIcon} alt="search"
                        className="w-9 cursor-pointer"
                        onClick={() => handleSearch()}
                        />
                </div>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {values?.map((data, index) => (
                    <Link key={index} to={"/details"} state={data} >
                        <Card
                            id={index}
                            name={data.name}
                            img={data.image}
                            status={data.status}
                            species={data.species}
                        />
                    </Link>
                ))}
            </div>
            { !values.length && <div className="flex justify-center mt-10 font-semibold text-lg">Nenhuma informação encontrada</div> }
            <div className="flex flex-wrap justify-center gap-6 mt-6">
                {
                    page > 1 && <div className="flex justify-center bg-white p-2 rounded-md gap-3 cursor-pointer min-w-40"
                        onClick={showLess}>
                        <span>Mostrar Menos</span>
                        <img src={arrowIcon} alt="arrow-less" className="w-4 rotate-270"/>
                    </div>
                }
                {
                    page < lastPage && <div className="flex justify-center bg-white p-2 rounded-md gap-3 cursor-pointer min-w-40"
                        onClick={showMore}>
                        <span>Mostrar Mais</span>
                        <img src={arrowIcon} alt="arrow-more" className="w-4 rotate-90"/>
                    </div>
                }
            </div>
        </div>
    )
};

export default Home;