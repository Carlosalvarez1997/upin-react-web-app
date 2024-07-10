'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from "@/../../utils/supabase/server"

interface formData{
  email:string,
  password:string
}


  export async function login(dataa:FormData) {
    const supabase = createClient()
    
    // Fetch user data
    let { data: userdata, error: fetchError } = await supabase
      .from('userdata')
      .select('email, userUID')
      .eq("email", dataa.email)
  
    // Handle errors or no user found
    if (fetchError || !userdata || userdata.length === 0) {
      console.log("Email not found.")
      return { error: "Email or Password are incorrect" }
    }
  
    // Authenticate user
    const { error: signInError } = await supabase.auth.signInWithPassword(dataa)
  
    if (signInError) {
      console.log("Error: " + signInError.message)
      return { error: "Email or Password are incorrect" }
    }
  
    // Revalidate the path and set the session cookie
    revalidatePath('/')
    redirect('/account')
    return { success: true }
  }

export async function signup(formData: FormData) {
  const supabase = createClient()
  
  // Type-casting for convenience, but validate your inputs in practice
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    age: formData.get('age') as string,
    birthdate: formData.get('birthdate') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log("Error: " + error)
    redirect('/error')
  }

  // Revalidate the path and set the session cookie
  revalidatePath('/')
  redirect('/account')
}

export async function logout() {
  const supabase = createClient()
  
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log("Error: " + error)
    redirect('/error')
  }

  // Revalidate the path and clear the session cookie
  revalidatePath('/')
  redirect('/')
}
