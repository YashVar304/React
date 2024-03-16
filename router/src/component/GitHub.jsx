import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'




function GitHub() {
    const data = useLoaderData()

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/YashVar304").then((res)=>res.json()).then((res)=>setData(res))
    // },[])
    return (
        <div className='text-center text-3xl bg-slate-700 text-white p-5 '>
            GitHub Username: {data.login}
            <img src={data.avatar_url} alt="" className='h-60 w-60 rounded-full mx-auto mt-8'/>
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/YashVar304")
    return response.json()
}
