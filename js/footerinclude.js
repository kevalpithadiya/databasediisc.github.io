const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<div class="footer-main">
<div class="footer-text" id="info">
  <h1>Databased</h1>
  <h4>
    <a class="footer-link" href="https://csa.iisc.ac.in"> 
      Department of Computer Science and Automation (CSA)
    </a>
    <br />
  </h4>
  <h5>
    <a class="footer-link" href="https://iisc.ac.in">
      Indian Institute of Science, Bengaluru - 560012, INDIA.
    </a>
  </h5>
  <br>
  <h6>
    Copyright © <span class="copyright">2023</span> IISc, Bengaluru
  </h6>
</div>
<div class="footer-logo">
  <img id="footer-logo" src="/img/Logo_transparent.png" />
</div>
</div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = footerTemplate.innerHTML;
  }
}

customElements.define('footer-component', Footer);
