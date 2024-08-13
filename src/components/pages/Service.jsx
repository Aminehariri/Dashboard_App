import { Editor } from '@tinymce/tinymce-react';
import { useRef , useState ,useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import servicesData from '../../data/services';

export default function Service (){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    // Extract the services array from the imported data
    const services = servicesData.services;

    const id = queryParams.get('id');
    const service = services.find(item => item.id === parseInt(id));

    if (!service) {
        return <p>No lead found with ID {id}</p>;
    }

    const editorRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    
    return(
        <>
            {/* <h1>{service.title}</h1> */}
            {/* <p>{service.texte}</p> */}
            {/* <img src={service.image} alt={service.title} /> */}
       
                        
            <form className="formulaire" onSubmit={handleSubmit}>
                <div className="form-group">
                <span>Titre de service</span>
                <input type="text" name="pageTitle" defaultValue={service.title} />
                </div>
                <div className="form-group">
                <span>Sous titre</span>
                <input type="text" name="subTitle" defaultValue={service.subtitle} />
                </div>
                <div className="form-group">
                <span>Conteunu</span>
                <Editor 
                    apiKey='8tf26jpmdrxbefwfqqtljzgts7c8np39l5ah9xeqtecq0il4'
                    init={{
                    // plugins: 'anchor autolink charmap inlinecss markdown',
                    // toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    initialValue={service.texte}
                />
                </div>
                <div className="form-group">
                <input className="btn-principal" type="submit" value='Valide' />
                </div>
            </form>
        </>
    )
}