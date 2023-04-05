import React from 'react';
import {useQuery,gql } from "@apollo/client";
import './characterList.css'

const GET_CHARACTERS = gql`
query{
    characters{
      results{
        id
        name
        image
      }
    }
  }

`

export default function CharactersList() {
const {error,loading,data} = useQuery(GET_CHARACTERS);

console.log(error,loading,data);

if(loading) return <div>loading.........</div>
return (
    <div className='container'>
        {data.characters.results.map((character)=>{
            return(
                <div>
                    <img src={character.image}></img>
                    <h1>{character.name}</h1>
                    {/* <p  >{character.id}</p> */}
                </div>
            )
        })}
    </div>
  )
}
