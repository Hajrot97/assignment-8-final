import React from 'react';
import css from './Main.css';
import data from '../fakeData/person.json'
import { useState } from 'react';

const Main = () => {


    const [player, setPlayer] = useState(data);
    const [myTeam, setMyTeam] = useState([]);
    const [Salary, setSalary] = useState(0);

    return (
        <div>
            <div className='row'>
                <div className='col-md-9'>
                    <div className='row'>
                        {
                            player.map(player => {
                                return (
                                    <div className='margin col-md-3' key={player.id}>

                                        <div className='card1'>
                                            <img style={{ width: '90px', height: '90px' }} src={player.img} className='card-img-top' alt='...' />
                                            <div className='card-body'>
                                                <h5 className='card-title'>{player.Name}</h5>
                                                <p className='card-text'>Salary : {player.Salary} </p>
                                                <p className='card-text'>Role : {player.Role}</p>
                                                <p className='card-text'>Age : {player.Age}</p>
                                                <p className='card-text'>Country : {player.Country}</p>
                                                <h4><button className='button btn btn-primary' onClick={() => {
                                                    setMyTeam([...myTeam, player]);
                                                    setSalary(Salary + player.Salary);
                                                }}>Add <i class="fas fa-cart-plus"></i> </button> </h4>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='first-card col-md-3'>
                    <h1>player added : {myTeam.length}</h1>
                    <h1>Total cost : $ {Salary} </h1>
                    {
                        myTeam.map(player => {
                            return (
                                <div className='' key={player.id}>
                                    <div className='second-card card-body'>
                                        <h5 className='card-title'>{player.name}</h5>
                                        <h4> Name: {player.Name}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;