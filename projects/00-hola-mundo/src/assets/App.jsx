import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    { userName: 'midudev', name: 'Miguel Angel Durán', isFollowing: true },
    { userName: 'pheralb', name: 'Pablo Hernández', isFollowing: false },
    { userName: 'd4nidev', name: 'Daniel de la Cruz', isFollowing: true }
]

export function App() {
    return (
        <section className='App'>
            {users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
            }
        </section>
    )
}