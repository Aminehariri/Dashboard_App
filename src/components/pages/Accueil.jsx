import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import img1 from '../../assets/qsn/qsn.jpeg'
import img2 from '../../assets/qsn/qsn2.jpeg'
import img3 from '../../assets/qsn/qsn3.jpeg'

export default function Accueil() {
  const editorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const qsmImgs = {
    img: img1,
    img2: img2,
    img3: img3,
  }

  console.log(qsmImgs);
  
  return (
    <>
      <h2 className="main-title">Accueil</h2>
      <form className="formulaire" onSubmit={handleSubmit}>
        <div className="form-group">
          <span>Titre de la page</span>
          <input type="text" name="pageTitle" defaultValue='Page accueil'  />
        </div>
        <div className="form-group">
          <span>Sous titre</span>
          <input type="text" name="subTitle"  defaultValue='sous titre page accueil' />
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
            initialValue="Site en cours d'enrichissement..."
          />
        </div>
        {/* <div className="form-group current-img">
          {
            Object.keys(qsmImgs).map(key => (
              <img key={key} src={qsmImgs[key]} className='current-service-img' alt="" />
            ))
          }
        </div> */}
        <div className="form-group">
          <input className="btn-principal" type="submit" value='Valide' />
        </div>
      </form>
      

      <div className="separator">

      </div>
    </>
  );
}
