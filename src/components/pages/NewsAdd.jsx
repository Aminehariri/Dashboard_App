import { Editor } from '@tinymce/tinymce-react';

export default function NewsAdd(){
  const handleSubmit =()=>{
    console.log('test');
  }
  return(

    
    <>

      <h2 className="main-title">Ajouter une actualite</h2>
      <form className="formulaire" onSubmit={handleSubmit}>
        <div className="form-group">
          <span>Titre de l'actualite</span>
          <input type="text" name="pageTitle"  />
        </div>
        <div className="form-group">
          <span>Sous titre</span>
          <input type="text" name="subTitle"   />
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
            initialValue=""
          />
        </div>
        <div className="form-group ">
          <span>Ajouter une photo</span>
          <input type='file' className='' />
        </div>

        <div className="form-group">
          <input className="btn-principal" type="submit" value='Valide' />
        </div>
      </form>
      

      <div className="separator">

      </div>
    </>
  )
}