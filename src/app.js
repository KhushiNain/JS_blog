class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title,detail){
    this.title=title;
    this.detail=detail 
  }

  addTitle(){
    let title_card =document.createElement("h1");
    title_card.setAttribute("id","blog-title");
    document.getElementById("card-text").appendChild(title_card);
    title_card.innerHTML+=this.title;
  }
  addDescription(){
    let description_card=document.createElement("p");
    description_card.setAttribute("id","blog-description");
    document.getElementById("card-text").appendChild(description_card);
    description_card.innerHTML+=this.detail;
  } 
}
// Progression 2: Setup an event listner - add two functions

// 1. `helperAddPost()`
toggle=false
function helperAddPost(){
  let popupEle=document.getElementById("popupContact");
  
  if(toggle==false){
    popupEle.style.display="block"
  }
  else{
    popupEle.style.display="none"
  }
  toggle=!toggle
}
// 2. `helperPost()`
function helperPost(){
  let title=document.getElementById("title").value;
  let detail=document.getElementById("detail").value;
  let blog = new Blog(title,detail);
  blog.addTitle();
  blog.addDescription();

}
