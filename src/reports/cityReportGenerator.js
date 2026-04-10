<<<<<<< HEAD
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
=======
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
>>>>>>> f5684a6278b64a9f195794048f99a666f88c917b
}