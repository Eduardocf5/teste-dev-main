import React from "react";
import { useLocation } from "react-router-dom";

import Detail from "../../components/detail";

const Details = () => {
    const { state } = useLocation();

    return (<Detail data={state} />)
};

export default Details;