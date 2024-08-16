import './App.css'
import './TwitterFollowCard'
import { TwitterFollowCard } from './TwitterFollowCard'
const users =[
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durám',
        isFollowing : true
    },
    {
        userName: '120299',
        name: 'Brayan Lasso',
        isFollowing : false
    },
    {
        userName: 'pheralb',
        name: 'Pablo H',
        isFollowing : true
    },
    {
        userName: 'TMChein',
        name: 'Paco Hedez',
        isFollowing : false
    },
    

]
export function App(){
    return(
       <>
       <h1 style={{color:'white', textAlign: 'center'}} >Lista Seguidores</h1>
        {
            users.map(user =>{
                const {userName, name, isFollowing} = user
                return(
                    <TwitterFollowCard key={userName}  inicialIsFollowing = {user.isFollowing} userName={user.userName} name={user.name}></TwitterFollowCard> 
                )
            })
        }
       </>
    )
}