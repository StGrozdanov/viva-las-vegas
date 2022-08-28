import './Members.css';
import PaginationBar from "../Pagination/PaginationBar";

function Members() {
    return (
        <article className='members-article'>
            <h2>Members</h2>
            <ul className='members-article-ul'>
                <li>Some one</li>
                <li>Another one</li>
                <li>Any one</li>
            </ul>
            <PaginationBar />
        </article>
    );
}

export default Members;