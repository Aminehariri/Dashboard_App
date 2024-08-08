import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Accueil() {
  const editorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <h2 className="main-title">Qui-sommes nous</h2>
      <form className="formulaire" onSubmit={handleSubmit}>
        <div className="form-group">
          <span>Titre de la page</span>
          <input type="text" name="pageTitle" />
        </div>
        <div className="form-group">
          <span>Sous titre</span>
          <input type="text" name="subTitle"  />
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
            initialValue="Welcome to TinyMCE!"
          />
        </div>
        <div className="form-group">
          <input className="btn-principal" type="submit" value='Valide' />
        </div>
      </form>
    </>
  );
}
