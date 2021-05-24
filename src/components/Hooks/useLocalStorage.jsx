import React from 'react'
import { useState, useLayoutEffect, useEffect } from "react";

export default function useLocalStorage(key, value) {

    const [state, setState] = useState(value)

    useLayoutEffect(()=>{
        const data = localStorage.getItem(key)
        data!== undefined && setState(JSON.parse(data))
    },[])

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(state))
        },[state]
    )
        return [state, setState]
    }