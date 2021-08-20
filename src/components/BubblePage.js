import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let mounted = true
    async function getColors() {
    let  newColors = await fetchColorService();
    if(mounted){
      setLoading(false)
    setColors(newColors);
    console.log("newColors", newColors)
    }
    }
    getColors()
    return function cleanup(){
      mounted = false
    }
    
  },[editing])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    console.log(editColor)
    axiosWithAuth().put(`/colors/${editColor.id}`, editColor)
    .then(res =>{
      toggleEdit(false)
    })
  };

  const deleteColor = (colorToDelete) => {
    console.log(colorToDelete)
    axiosWithAuth().delete(`/colors/${colorToDelete.id}`)
    .then(res =>{
      toggleEdit(true)
      toggleEdit(false)
    })
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
