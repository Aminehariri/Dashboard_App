import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import newsData from '../../data/news';
import { NavLink } from 'react-router-dom';

export default function New() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Extract the news articles array from the imported data
    const actualites = newsData;

    // Get ID from URL
    const id = queryParams.get('id');
    console.log("Parsed ID from URL:", id);

    // Find the matching news article
    const actu = actualites.find(item => item.id === parseInt(id));
    console.log("Found actu:", actu);

    // Handle case when the news article is not found
    if (!actu) {
        return <p>No news article found with ID {id}</p>;
    }

    const editorRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <>
            <form className="formulaire" onSubmit={handleSubmit}>
                <div className="form-group">
                    <span>Titre d'actualité</span>
                    <input type="text" name="pageTitle" defaultValue={actu.title} />
                </div>
                <div className="form-group">
                    <span>L'auteur</span>
                    <input type="text" name="subTitle" defaultValue={actu.author} />
                </div>
                <div className="form-group">
                    <span>La date</span>
                    <input type="date" name="subTitle" defaultValue={actu.date} />
                </div>
                <div className="form-group">
                    <span>Contenu</span>
                    <Editor 
                        apiKey='8tf26jpmdrxbefwfqqtljzgts7c8np39l5ah9xeqtecq0il4'
                        init={{
                        // plugins: 'anchor autolink charmap inlinecss markdown',
                        // toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        tinycomments_mode: 'embedded',
                        tinycomments_author: 'Author name',
                    
                        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                        }}
                        initialValue={actu.text}
                    />
                </div>
                <div className="form-group ">
                    <span>L'image</span>
                    <img src={actu.image} className='current-service-img' alt="Current Service" />
                </div>
                <div className="form-group cta">
                    <input className="btn-principal" type="submit" value='Enregistrer' />
                    <NavLink className="btn-principal" to='/serviceslist'>Retour</NavLink>
                </div>
            </form>
        </>
    );
}
