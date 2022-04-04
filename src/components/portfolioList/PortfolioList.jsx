import './portfolioList.scss';

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <div className='portfolioList'>
      <li
        className={active ? 'portfolioList active' : 'portfolioList'}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </div>
  );
}
