(function(){
  var b=document.querySelector('.site-toggle'),l=document.getElementById('site-links');
  if(!b||!l)return;
  b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o);});
  l.addEventListener('click',function(e){if(e.target.tagName==='A'){l.classList.remove('open');b.setAttribute('aria-expanded','false');}});
})();
