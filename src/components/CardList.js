import React from 'react';
import Card from "./Card";


const CardList = ({ robots }) =>{
    const cardComponent = robots.map((user, i) => {
        return (<Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            catchPhrase={robots[i].company.catchPhrase }
        />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;
















/*
* 'é melhor fazemos loop pois caso adicionemos muitos robôs,
* a gnt n precisa ficar dando ctrl c ctrl v toda hora
* */