(function(){
  var toggle = document.getElementById('theme-toggle');
  if(!toggle) return;

  function apply(theme){
    document.documentElement.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  apply(document.documentElement.getAttribute('data-theme') || 'light');

  toggle.addEventListener('click', function(){
    var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    apply(next);
  });
})();
