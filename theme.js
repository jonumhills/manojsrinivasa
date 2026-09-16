(function(){
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('portfolio-theme'); } catch(e){}
  if (stored === 'dark' || stored === 'light') root.setAttribute('data-theme', stored);

  function wire(){
    var btn = document.getElementById('themeBtn');
    if (!btn) return;
    btn.addEventListener('click', function(){
      var mql = window.matchMedia('(prefers-color-scheme: dark)');
      var current = root.getAttribute('data-theme') || (mql.matches ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('portfolio-theme', next); } catch(e){}
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }
})();
