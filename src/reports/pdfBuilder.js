<<<<<<< HEAD
// reports/pdfBuilder.js

import html2pdf from 'html2pdf.js';
import { buildReportHtml } from './cityReportTemplates.js';

export async function generatePdf(reportData, filename = 'report.pdf') {

  const html = buildReportHtml(reportData);

  const opt = {
    margin: 10,
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  await html2pdf().set(opt).from(html).save();
=======
// reports/pdfBuilder.js

import html2pdf from 'html2pdf.js';
import { buildReportHtml } from './cityReportTemplates.js';

export async function generatePdf(reportData, filename = 'report.pdf') {

  const html = buildReportHtml(reportData);

  const opt = {
    margin: 10,
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  await html2pdf().set(opt).from(html).save();
>>>>>>> f5684a6278b64a9f195794048f99a666f88c917b
}