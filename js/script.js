'use strict';

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!', event);


  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [IN PROGRESS] add class 'active' to the clicked link */
  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.post.active');

  for (let activeArticle of activeArticles) {
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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-authot';

function generateTitleLinks(customSelector = '') {

  const titleList = document.querySelector(optTitleListSelector);
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log('customSelector')
  for (let article of articles) {

    const articleId = article.getAttribute('id');

    const articleTitleElement = article.querySelector('.post-title');

    const title = articleTitleElement.innerHTML;

    const link = '<li><a href="#' + articleId + '">' + title + '</a></li>';

    titleList.innerHTML = titleList.innerHTML + link;
  }

  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks();


function generateTags() {

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */
  for (let article of articles) {
    /* make html variable with empty string */
    let html = '';
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);
    /*split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);
  }
  /* START LOOP: for each tag */
  for (let tag of articleTagsArray) {
    /* generate HTML of the link */
    const tagLink = '<li><a href="#' + tag + '">' + tag + '</a></li>';
    /* add generated code to html variable */
    html = html + tagLink;
    /* END LOOP: for each tag */
  }
  /* insert HTML of all the links into the tags wrapper */
  tagsWrapper.innerHTML = html;

}
generateTags();


function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('Tag was clicked!');
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeTag = document.querySelectorAll('a.active[href^="#tag-"]')
  /* START LOOP: for each active tag link */
  for (let activeTag of activeTags) {
    /* remove class active */
    activeTag.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]')
  /* START LOOP: for each found tag link */
  for (let tagLink of tagLinks) {
    /* add class active */
    tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
  const allLinksTags = document.querySelectorAll('a[href="' + href + '"]')
  /* START LOOP: for each link */
  for (let link of allLinksTags) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler)
    /* END LOOP: for each link */
  }
}
addClickListenersToTags();


function generateAuthors() {
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    let html = '';
    const authotWrapper = article.querySelector(optArticleTagsSelector);
    const articleTags = article.getAttribute('data-author');
    console.log(articleTags);
  }
}
/*
function addClickListenersToAuthors(){

}
function authorClickHandler(){
  
}

*/

