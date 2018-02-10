const keys = require("../../config/keys");

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align:center">
          <h3>INPUT PLZ</h3>
          <p>answer this or else:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">YES</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">NO</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
