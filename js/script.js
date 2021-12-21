'use strict';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!', event);
  
  
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* [IN PROGRESS] add class 'active' to the clicked link */
  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.post.active');
    
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute("href");
  console.log('articleSelector');

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle');

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list'

function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    
    const articleId = article.getAttribute('id');
    
    const articleTitleElement = article.querySelector('.post-title');
    
    const title = articleTitleElement.innerHTML;
    
    const link = '<li><a href="#' + articleId + '">' + title + '</a></li>';
    
    titleList.innerHTML = titleList.innerHTML + link;
  }

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  titleList.innerHTML = html;
}

generateTitleLinks();


function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  
  for (let article of articles){
    
    const article = article.querySelector(optArticleTagsSelector);
   
    let html = '';
  
    const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);

    /*split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
    /* for each tag */
    for(let tag of articleTagsArray){
      
      
      const tagLink = '<li><a href="#' + tag + '">' + tag + '</a></li>';

    }
   
  }
  /* START LOOP: for every article: */

    /* find tags wrapper */

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

      /* generate HTML of the link */

      /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();


function tagClickHandler(event){
  /* prevent default action for this event */

  /* make new constant named "clickedElement" and give it the value of "this" */

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();