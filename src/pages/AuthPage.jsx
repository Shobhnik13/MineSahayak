import React from 'react'
import Authcomp from '../components/Authcomp'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/helper/SupabaseClient'

const AuthPage = () => {
    const navigate=useNavigate()
    const {data}=supabase.auth.getSession()
    if(data){
        navigate('/dashboard')
    }
  return (
    <div>
        <Authcomp/>
    </div>
  )
}

export default AuthPage