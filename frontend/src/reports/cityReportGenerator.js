export function generateCityReport(city) {
  return {
    title: `${city.name} Intelligence Report`,
    sections: [
      buildExecutiveSummary(city),
      buildBudgetSection(city),
      buildLifestyleSection(city),
      buildSafetySection(city),
      buildNomadSection(city),
      buildFamilySection(city),
      buildVisaSection(city),
      buildFinalVerdict(city)
    ]
  };
}