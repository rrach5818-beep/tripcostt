<<<<<<< HEAD
// reports/cityReportTemplates.js

export function buildReportHtml(reportData) {
  const { title, sections } = reportData;

  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            line-height: 1.6;
            color: #222;
          }
          h1 {
            font-size: 28px;
            margin-bottom: 20px;
          }
          h2 {
            margin-top: 30px;
            font-size: 20px;
          }
          .section {
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        ${sections.map(section => `
          <div class="section">
            <h2>${section.title}</h2>
            <p>${section.content}</p>
          </div>
        `).join('')}
      </body>
    </html>
  `;
=======
// reports/cityReportTemplates.js

export function buildReportHtml(reportData) {
  const { title, sections } = reportData;

  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 40px;
            line-height: 1.6;
            color: #222;
          }
          h1 {
            font-size: 28px;
            margin-bottom: 20px;
          }
          h2 {
            margin-top: 30px;
            font-size: 20px;
          }
          .section {
            margin-bottom: 20px;
          }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        ${sections.map(section => `
          <div class="section">
            <h2>${section.title}</h2>
            <p>${section.content}</p>
          </div>
        `).join('')}
      </body>
    </html>
  `;
>>>>>>> f5684a6278b64a9f195794048f99a666f88c917b
}