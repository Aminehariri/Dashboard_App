import { Link } from "react-router-dom"
import welcome from '../assets/welcome.svg'
export default function Page(){
  return(
    <div className="welcome-page">
      <h2 className="main-title">Votre Tableau de Bord </h2>
      <div className="welcome-box">
        <div className="one">
          <img src={welcome} alt="Welcome image"></img>
        </div>
        <div className="two">
          <p>
            Bienvenue dans votre tableau de bord personnalisé, où vous pouvez facilement gérer vos leads, consulter les statistiques de votre site, et ajuster les paramètres selon vos besoins. Utilisez les onglets ci-dessus pour naviguer à travers différentes sections, explorer les données importantes, et optimiser vos opérations en toute simplicité.
          </p>
          <p>
            Que vous souhaitiez analyser les performances de votre site, suivre vos ventes, ou mettre à jour votre contenu, notre tableau de bord vous offre tous les outils nécessaires pour rester informé et prendre des décisions éclairées. Profitez de l'expérience utilisateur intuitive et des fonctionnalités avancées pour maximiser l'efficacité de votre gestion.
          </p>
          <div className="cta">
            <Link to="/leads" className="btn-principal">Voir les Leads</Link>
            <Link to="/stats" className="btn-principal">Consulter les Statistiques</Link>
            <Link to="/setting" className="btn-principal">Paramètres</Link>
          </div>
          </div>
        </div>
      
    </div>
  )
}