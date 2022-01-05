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
  optArticleAuthorSelector = '.post-authot',
  optTagsListSelector = '.tags.list',
  optCloudClassCount = '5',
  optCloudClassPrefix = 'tag-size-',
  optAuthorsListSelector = '.authors.list';



function generateTitleLinks(customSelector = '') {
  const titleList = document.querySelector(optTitleListSelector);
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log('customSelector');
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


function calculateTagsParams(tags) {
  const params = {
    max: 0,
    min: 999999
  };
  for (let tag in tags) {
    console.log(tag + ' is used ' + tags[tag] + ' times');

    if (tags[tag] > params.max) {
      params.max = tags[tag];
    }
    if (tags[tag] < params.min) {
      params.min = tags[tag];
    }
  }
  return params;
}



function calculateTagClass(count, params) {
  const tagLinkHTML = '<li>' + calculateTagClass(allTags[tag], tagsParam) + '</li>';
  console.log('tagLinkHTML:', tagLinkHTML);
  allTagsHTML += tagLinkHTML;

  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);
  return optCloudClassPrefix + classNumber;

}


function generateTags() {
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
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
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const tagLink = '<li><a href="#' + tag + '">' + tag + '</a></li>';
      /* add generated code to html variable */
      html = html + tagLink;
      /* [NEW] check if this link is NOT already in allTags */
      if (!allTags[tag]) {
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;
    }
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(optTagsListSelector);

    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams);

    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for (let tag in allTags) {
      /* [NEW] generate code of a link and add it to allTagsHTML */
      allTagsHTML += tag + ' (' + allTags[tag] + ') ';
    }
    /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;
  }
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
  const allTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let allTagLink of allTagLinks) {
    /* remove class active */
    allTagLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
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
  const allLinksTags = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each link */
  for (let allLinkTag of allLinksTags) {
    /* add tagClickHandler as event listener for that link */
    allLinkTag.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}
addClickListenersToTags();



function calculateAuthorsParams(authors) {
  const params = {
    max: 0,
    min: 999999
  }
  for (let author in authors) {
    console.log(author + ' is used ' + authors[author] + ' times');
    if (authors[author] > params.max) {
      params.max = authors[author];
    }
    if (authors[author] < params.min) {
      params.min = authors[author];
    }
  }
  return params;
}

function calculateAuthorClass(count, params) {
  const authorLinkHTML = '<li>' + calculateAuthorClass(allAuthors[author], authorsParam) + '</li>';
  console.log('authorLinkHTML:', authorLinkHTML);
  allAuthorsHTML += authorLinkHTML;

  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);
  return optCloudClassPrefix + classNumber;

}

function generateAuthors() {
  /* [NEW] create a new variable allTags with an empty array */
  let allAuthors = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find author wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-author attribute */
    const authorTags = article.getAttribute('data-author');
    console.log(authorTags);
    /* generate HTML of the link */
    const authorLink = '<li><a href="#' + authorTags + '">' + authorTags + '</a></li>';
    /* add generated code to html variable */
    html = html + authorLink;
    /* [NEW] check if this link is NOT already in allTags */
    if (!allAuthors[author]) {
      /* [NEW] add tag to allTags object */
      allAuthors[author] = 1;
    } else {
      allAuthors[author]++;
    }
    /* insert HTML of all the links into the author wrapper */
    authorWrapper.innerHTML = html;
  }
  /* [NEW] find list of tags in right column */
  const authorList = document.querySelector(optAuthorsListSelector);

  /* [NEW] add HTML from allTags to tagList */
  // tagList.innerHTML = allTags.join(' ');
  //console.log(allTags);

  const authorsParams = calculateAuthorsParams(allAuthors);
  console.log('authorsParams:', authorsParams)
  /* [NEW] create variable for all links HTML code */
  let allAuthorsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags: */
  for (let author in allAuthors) {
    /* [NEW] generate code of a link and add it to allTagsHTML */
    allAuthorsHTML += author + ' (' + allAuthors[author] + ') ';
  }
  /* [NEW] END LOOP: for each tag in allTags: */

  /*[NEW] add HTML from allTagsHTML to tagList */
  authorList.innerHTML = allAuthorsHTML;
}
generateAuthors();


function authorClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  console.log('author was clicked!');
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const author = href.replace('#author-', '');
  /* find all tag links with class active */
  const allAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
  /* START LOOP: for each active tag link */
  for (let allAuthorLink of allAuthorLinks) {
    /* remove class active */
    allAuthorLink.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let authorLink of authorLinks) {
    /* add class active */
    authorLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
}
generateTitleLinks('[data-author="' + author + '"]');


function addClickListenersToAuthors() {
  /* find all links to authors */
  const allAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');

  /* START LOOP: for each link */
  for (let allAuthorLink of allAuthorLinks) {
    /* add tagClickHandler as event listener for that link */
    allAuthorLink.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
  }
}
addClickListenersToAuthors();



