'use strict';

function titleClickHandler(event){
  event.preventDefault();  //Adres strony nie powinien się już zmieniać przy klikaniu w linki w lewej kolumnie
  const clickedElement = this;
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }   

  /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log('clickedElement:', {clickedElement}, "aktywny");
  

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article.post');
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute("href");
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  console.log(targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log('targetArticle:', {targetArticle}, "aktywny");
}

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';



//modul 5.4 Generowanie listy tytulow

function generateTitleLinks(){

  /* remove contents of titleList */
  const titleList =  document.querySelector(optTitleListSelector);
  function clearMessages(){
    document.getElementById('titleList').innerHTML = '';
  }
 
  /* for each article */

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

console.log ("wywołanie funkcji generateTitleLinks" );
}

generateTitleLinks();