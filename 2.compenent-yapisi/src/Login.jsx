import React from 'react'

// sadece Export için örnek
export const users = [
    {
        userName: "Enes",
        password: "1"
    },
    {
        userName: "Hanife",
        password: "2"
    }
]

function Login() {
  return (
   
        <div>
            <div>
                <p>Kullanıcı Adınız</p>
                <input type="text" />
            </div>

            <div>
                <p>Şifreniz</p>
                <input type="text" />
            </div>
                <button>Giriş Yap</button>
        </div>
    
  )
}

export default Login


