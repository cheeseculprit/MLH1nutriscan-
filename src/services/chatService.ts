import type { FoodScanResult, ChatMessage } from '../types/nutrition';

/**
 * Responds to user follow-up questions grounded strictly in the food's analyzed data,
 * ingredients list, nutrition facts, and verified sources.
 */
export async function answerFollowUpQuestion(
  question: string,
  food: FoodScanResult
): Promise<ChatMessage> {
  // Simulate short conversational processing
  await new Promise(resolve => setTimeout(resolve, 550));

  const q = question.toLowerCase();

  // Safety / Medical boundary check
  if (q.includes('cure') || q.includes('disease') || q.includes('diabetes treatment') || q.includes('prescribe') || q.includes('medicine')) {
    return {
      id: `chat-${Date.now()}`,
      sender: 'assistant',
      text: "NutriScan AI is an educational food intelligence tool and does not provide medical diagnoses, treatment plans, or clinical prescriptions. For medical advice or chronic dietary management, please consult a physician or registered dietitian.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      unsupportedQueryWarning: true,
      citations: ["Clinical Disclaimer: Non-medical software"]
    };
  }

  // Sugar question
  if (q.includes('sugar') || q.includes('sweet')) {
    const sugarVal = food.nutrition.totalSugar.value;
    const addedVal = food.nutrition.addedSugar?.value;
    const dv = food.nutrition.totalSugar.dailyValuePercentage;
    const cit = [food.nutrition.totalSugar.sourceNote || "Extracted Nutrition Facts Panel"];
    return {
      id: `chat-${Date.now()}`,
      sender: 'assistant',
      text: `Based on the verified label for ${food.name}, one serving (${food.servingBasis}) contains ${sugarVal ?? 'Not available'}g of total sugars${addedVal ? ` (including ${addedVal}g of added sugars, ${dv ? `${dv}% of daily value` : ''})` : ''}. For reference, the American Heart Association recommends no more than 25g (women) or 36g (men) of added sugars per day.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      citations: cit
    };
  }

  // Ingredient explanation
  if (q.includes('ingredient') || q.includes('explain') || q.includes('maltodextrin') || q.includes('lecithin') || q.includes('additive') || q.includes('msg')) {
    const additives = food.ingredientsAnalysis.extractedIngredients.filter(i => i.isAdditive);
    if (additives.length > 0) {
      const breakdown = additives.map(a => `• **${a.name}** (${a.purpose || 'additive'}): ${a.description || 'Processed ingredient.'}`).join('\n\n');
      return {
        id: `chat-${Date.now()}`,
        sender: 'assistant',
        text: `Here is the plain-English breakdown of key food additives extracted from this label:\n\n${breakdown}\n\n*Note: NutriScan AI highlights functional ingredients but recommends verifying manufacturer packaging.*`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: ["Extracted Ingredients Paragraph", "Open Food Facts Additives Taxonomy"]
      };
    } else {
      return {
        id: `chat-${Date.now()}`,
        sender: 'assistant',
        text: `The ingredient list for ${food.name} consists of: ${food.ingredientsAnalysis.extractedIngredients.map(i => i.name).join(', ')}. No industrial emulsifiers, artificial colorants, or synthetic leaveners were flagged.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citations: ["Ingredients Label OCR Inspection"]
      };
    }
  }

  // Allergy / intolerance question
  if (q.includes('allergy') || q.includes('peanut') || q.includes('gluten') || q.includes('celiac') || q.includes('dairy') || q.includes('nut')) {
    const allergens = food.ingredientsAnalysis.declaredAllergens.join(', ') || 'None explicitly declared';
    const advisory = food.ingredientsAnalysis.crossContaminationWarnings.join(', ') || 'No shared line advisory found';
    return {
      id: `chat-${Date.now()}`,
      sender: 'assistant',
      text: `**Declared Allergens:** ${allergens}\n\n**Cross-Contamination Warnings:** ${advisory}\n\n⚠️ **Mandatory Caution:** ${food.ingredientsAnalysis.allergenCautionMessage} AI OCR can miss fine print or localized allergen warnings.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      citations: ["Manufacturer Label: Contains statement", "Advisory Warning OCR"]
    };
  }

  // Missing information question
  if (q.includes('missing') || q.includes('unreadable') || q.includes('what information is missing')) {
    const unreadable = food.ingredientsAnalysis.unreadableSections?.join(', ') || 'No illegible text detected';
    const safetyDate = food.foodSafety.dateExtracted ? `Found date: ${food.foodSafety.dateExtracted}` : 'Expiry/Best-before date could not be detected';
    return {
      id: `chat-${Date.now()}`,
      sender: 'assistant',
      text: `Based on the scanned visual area:\n\n• **Date Check:** ${safetyDate}\n• **Unclear Text:** ${unreadable}\n• **Serving Count:** ${food.servingsPerContainer ? `${food.servingsPerContainer} servings per container` : 'Total container servings not visible in this angle'}\n\n*Tip: Capturing both the front packaging and the rear nutrition facts ensures 100% field coverage.*`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      citations: ["Visual Inspection Bounding Checks", "Evidence Panel Missing Fields"]
    };
  }

  // Nova / processing
  if (q.includes('nova') || q.includes('ultra-processed') || q.includes('processed')) {
    const nova = food.interpretation.processingLevel;
    return {
      id: `chat-${Date.now()}`,
      sender: 'assistant',
      text: `This product is classified as **${nova.label}**.\n\n**Scientific Rationale:** ${nova.explanation}\n\n**Specific Processing Markers Detected:**\n${nova.markers.map(m => `• ${m}`).join('\n')}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      citations: ["NOVA Food Classification Standard (Monteiro et al., 2019)", "Extracted Ingredients Taxonomy"]
    };
  }

  // Default grounded response
  return {
    id: `chat-${Date.now()}`,
    sender: 'assistant',
    text: `Regarding **${food.name}** (${food.servingBasis}):\n\n• Calories: ${food.nutrition.calories.value ?? 'N/A'} kcal\n• Protein: ${food.nutrition.protein.value ?? 'N/A'}g\n• Total Carbs: ${food.nutrition.carbohydrates.value ?? 'N/A'}g (Sugars: ${food.nutrition.totalSugar.value ?? 'N/A'}g)\n• Sodium: ${food.nutrition.sodium.value ?? 'N/A'}mg\n\nIs there a specific ingredient, allergen, or serving comparison you would like me to explain from this label?`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    citations: ["NutriScan Verified Food Report"]
  };
}
