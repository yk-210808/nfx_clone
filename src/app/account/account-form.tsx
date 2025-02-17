'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import { updateAuth } from './actions'

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState<string | null>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    if (user) {
      setLoading(false)
      setEmail(user.email!)
    }
  }, [])

  async function handleUpdate(formData: FormData) {
    const result = await updateAuth(formData)
    if (result.error) {
      setError(result.error);
    }
  }

  useEffect(() => {
    console.log(error);
    
  },[error])

  // const getProfile = useCallback(async () => {
  //   try {
  //     setLoading(true)

  //     const { data, error } = await supabase
  //       .auth
  //       .getUser()

  //     // if (error && status !== 406) {
  //     if (error) {
  //       console.log(error)
  //       throw error
  //     }

  //     if (data) {

  //       // setEmail(data.email)
  //       // setFullname(data.full_name)
  //       // setUsername(data.username)
  //       // setWebsite(data.website)
  //       // setAvatarUrl(data.avatar_url)
  //     }
  //   } catch (error) {
  //     // alert('Error loading user data!')
  //     console.log(error);
      
  //   } finally {
  //     setLoading(false)
  //   }
  // }, [user, supabase])

  // useEffect(() => {
  //   getProfile()
  // }, [user, getProfile])

  // async function updateProfile({
  //   username,
  //   website,
  //   avatar_url,
  // }: {
  //   username: string | null
  //   fullname: string | null
  //   website: string | null
  //   avatar_url: string | null
  // }) {
  //   try {
  //     setLoading(true)

  //     const { error } = await supabase.from('profiles').upsert({
  //       id: user?.id as string,
  //       full_name: fullname,
  //       username,
  //       website,
  //       avatar_url,
  //       updated_at: new Date().toISOString(),
  //     })
  //     if (error) throw error
  //     alert('Profile updated!')
  //   } catch (error) {
  //     alert('Error updating the data!')
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  

  return (
    <div className="form-widget">

      {/* ... */}

      <form action={handleUpdate}>
        <div>
          <label htmlFor="email">Email：</label>
          <input
            id="email"
            className='c-input'
            type="email"
            name='email'
            defaultValue={user?.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>Password：*********</p>
        </div>
  
        <div>
          <button
            className="c-btn01"
            // onClick={() => updateProfile({ fullname, username, website, avatar_url })}
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Update'}
          </button>
        </div>
      </form>

      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}