import './Members.css';
import PaginationBar from "../Pagination/PaginationBar";
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/userService';

function Members() {
    const [users, setUsers] = useState([{}]);

    useEffect(() => {
        getAllUsers()
            .then(users => setUsers(users))
            .catch(err => console.log(err));
    }, []);

    return (
        <article className='members-article'>
            <h2>Members</h2>
            <ul className='members-article-ul'>
                {
                    users.length > 0
                        ?
                        users.map(user => <li key={user.username}>{user.username}</li>)
                        : <h4>No members yet. Be the first one!</h4>
                }
            </ul>
            <PaginationBar usersCount={users.length} />
        </article>
    );
}

export default Members;