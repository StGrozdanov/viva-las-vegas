import './Members.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuid } from 'uuid';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PaginationBar from "../Pagination/PaginationBar";
import { useEffect, useState } from 'react';
import { countUsers, getAllUsers } from '../../services/userService';
import { useLocation } from 'react-router-dom';

function Members() {
    const [users, setUsers] = useState([{}]);
    const [usersCount, setUsersCount] = useState([{}]);
    const location = useLocation();

    useEffect(() => {
        const currentPage = location.search.split('=')[1] || 1;
        getAllUsers(currentPage)
            .then(users => setUsers(users))
            .catch(err => console.log(err));
    }, [location]);

    useEffect(() => {
        countUsers().then(users => setUsersCount(users.count)).catch(err => console.log(err));
    }, []);

    return (
        <article className='members-article'>
            <h2>Members</h2>
            <ul className='members-article-ul'>
                {
                    users.length > 0
                        ?
                        users.map(user => (
                            <div key={uuid()}>
                                <FontAwesomeIcon icon={faStar} color={'green'} />
                                <span className='members-article-ul-username-span'>
                                    {user.username}
                                </span>
                            </div>
                        ))
                        : <h4>No members yet. Be the first one!</h4>
                }
            </ul>
            <PaginationBar usersCount={usersCount} />
        </article>
    );
}

export default Members;