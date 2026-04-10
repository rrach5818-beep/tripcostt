/**
 * CityFAQ Component
 * Displays FAQ section for city
 */

export function CityFAQ(city) {
  const faqs = [
    {
      question: `Is ${city.name} safe for digital nomads?`,
      answer: `${city.name} has a safety score of ${city.digitalNomad.safetyScore}/100. ${city.digitalNomad.safetyScore >= 70 ? 'It is generally considered safe for visitors and remote workers.' : 'Take normal precautions as you would in any major city.'}`
    },
    {
      question: `How is the internet in ${city.name}?`,
      answer: `The average WiFi speed is ${city.digitalNomad.wifiSpeed} Mbps, which is ${city.digitalNomad.wifiSpeed >= 100 ? 'excellent for video calls and heavy usage' : city.digitalNomad.wifiSpeed >= 50 ? 'good for most remote work needs' : 'adequate for basic work tasks'}.`
    },
    {
      question: `What is the cost of living in ${city.name}?`,
      answer: `Monthly accommodation in the city center costs around ${city.currencySymbol}${city.costs.accommodation.center * 30}. Food costs range from ${city.currencySymbol}${city.costs.food.budget}/day (budget) to ${city.currencySymbol}${city.costs.food.premium}/day (premium).`
    }
  ];

  const faqsHtml = faqs.map(faq => `
    <div class="card" style="margin-bottom:var(--space-3);">
      <div class="card__body">
        <h4 style="margin-bottom:var(--space-2);">${faq.question}</h4>
        <p style="margin:0;color:var(--color-text-secondary);">${faq.answer}</p>
      </div>
    </div>
  `).join('');

  return `
    <div class="section" data-testid="city-faq">
      <h2 class="section__title mb-6">Frequently Asked Questions</h2>
      ${faqsHtml}
    </div>
  `;
}

export default CityFAQ;
