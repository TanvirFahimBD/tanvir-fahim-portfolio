(function () {
  /* ---------------------------------------------------------------
     PROJECT LINKS (taken from your CV). Add or change URLs here.
     An empty "" value hides that link, so the page never has a dead link.
     --------------------------------------------------------------- */
  var LINKS = {
    internal:  { live: "https://agamisoft.tracetick.com/view/login.php" },
    buet:      { live: "https://chem-buet.agamisoft.cloud/view/login.php" },
    ecommerce: { live: "https://miswanfashion.com/" },
    school:    { live: "https://jaasfm.agamisoft.cloud/view/login.php" },
    doctor:    { live: "https://astha.care/" },
    sheccha:   { live: "https://humanity-hand.web.app/", code: "https://github.com/TanvirFahimBD/sheccha-shebok-client" },
    beautify:  { live: "https://beautify-me-e67e5.web.app/", code: "https://github.com/TanvirFahimBD/beautify-me-client" },
    drone:     { live: "", code: "" },
    tour:      { live: "", code: "" },
    med:       { live: "", code: "" }
  };

  document.querySelectorAll("[data-project]").forEach(function (el) {
    var cfg = LINKS[el.getAttribute("data-project")] || {};
    var labels = { live: "Live site", code: "Source code" };
    var wrap = document.createElement("div");
    wrap.className = "pl";
    ["live", "code"].forEach(function (k) {
      if (!cfg[k]) return;
      var a = document.createElement("a");
      a.href = cfg[k]; a.target = "_blank"; a.rel = "noopener";
      a.textContent = labels[k];
      wrap.appendChild(a);
    });
    if (wrap.children.length) el.appendChild(wrap);
  });

  var root = document.documentElement, btn = document.getElementById("theme"), KEY = "tf-theme";
  function apply(m) { root.setAttribute("data-theme", m); btn.textContent = m === "dark" ? "Light" : "Dark"; }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved || "light");
  btn.addEventListener("click", function () {
    var n = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(n);
    try { localStorage.setItem(KEY, n); } catch (e) {}
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();
