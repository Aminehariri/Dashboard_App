
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='fixed_header'>
    
    <div>
      <p>Bienvenu Amine HARIRI sur votre  Tableau de Bord </p>
    </div>
    <div>
      <div className="cta">
        <a href="#" className="btn-principal">Voir le site</a>
        <a href="#" className="btn-principal">Se deconecter</a>
      </div>
    </div>
    </header>

  );
}