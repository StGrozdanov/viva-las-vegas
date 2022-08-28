import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PaginationBar({ usersCount = 0 }) {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage = Number(location.search.split('=')[1]) || 1;

  const totalPages = Math.ceil(usersCount / 8);

  async function buttonClickHandler(number) {
    setActive(number);
    navigate(`?page=${number}`);
  }

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <button
        key={number}
        active={number === active}
        disabled={currentPage === number}
        onClick={() => buttonClickHandler(number)}>
        {number}
      </button>,
    );
  }

  return (
    <div style={{ marginTop: 20, display: "flex", alignContent: "center", justifyContent: "center" }}>
      <div>
        <button
          disabled={currentPage <= 1 ? true : false}
          onClick={() => buttonClickHandler(currentPage - 1)}
        >
          prev
        </button>
        {items}
        <button
          disabled={currentPage >= totalPages ? true : false}
          onClick={() => buttonClickHandler(currentPage + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default PaginationBar;