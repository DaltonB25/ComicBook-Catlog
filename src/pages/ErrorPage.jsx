// src/pages/ErrorPage.jsx

const imgURL = "../src/images/spidermanmeme.gif" 

function ErrorPage() {
  return (
    <div className="ErrorPage">
       <h1>Error 404</h1>
      <img src={imgURL} alt="404 error gif" className="page-img" />
    </div>
  );
}

export default ErrorPage;
