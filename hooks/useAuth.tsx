import { error } from 'console'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth'
import{ useRouter } from 'next/router'
import { createContext, useContext, useEffect, useMemo, useState  } from "react"
import {auth} from '../firebase'

interface IAuth {
    user: User | null
    signUp: (email:string, password: string) => Promise<void>
    signIn: (email:string, password: string) => Promise<void>
    logOut: () => Promise<void>
    error:string | null
    loading: boolean
}


const AuthContext = createContext<IAuth>({
    user:null,
    signUp: async () => {},
    signIn: async () => {},
    logOut: async () =>{},
    error:null,
    loading:false,


})

interface AuthProviderProps{
    children: React.ReactNode
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [ loading, setLoading ]= useState(false)
    const [user, setUser ] = useState<User | null>(null)
    const [error, setError]= useState(null)
    const [initialLoading, setInitialLoading]=useState(true)
    const router = useRouter()



    useEffect(
        () => 
        // Accepts auth instance and give us back the user 
        onAuthStateChanged(auth, (user) => {
            // We check if there's a user
            if(user){
                //logged in..
                setUser(user)
                setLoading(false)
            }
            // If there isn't a user setloading true and we push to the login page
            else{
                //not logged in..
                setUser(null)
                setLoading(true)
                router.push('/login')
            }
            setInitialLoading(false)
        }),
        [auth]
    )




    const signUp = async (email:string, password:string) =>{
        setLoading(true)

        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>{
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)

        })
        .catch((error) => alert(error.message))
        .finally(() => setLoading(false))
    }
    const signIn = async (email:string, password:string) =>{
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password).then((userCredential) =>{
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)

        })
        .catch((error) => alert(error.message))
        .finally(() => setLoading(false))
    }
    
    const logOut = async () => {
        setLoading(true)

        signOut(auth)
        .then(() => {
            setUser(null)
        })
        .catch((error) => alert(error.message))
        .finally(()=> setLoading(false))
    }

    const memoedValue = useMemo(()=>({
        user,
        signUp,
        signIn,
        logOut,
        error,
        loading
    }), [user, loading, ])

  return( <AuthContext.Provider value={memoedValue}>
    {!initialLoading && children}
  </AuthContext.Provider>
  )
}

export default function useAuth(){
    return useContext(AuthContext)
}
