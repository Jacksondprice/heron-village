// transcripts helpers for tutoring session scheduler for after-school programs

export function transcriptsStep0(records: any[], limit = 336) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep1(records: any[], limit = 359) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep2(records: any[], limit = 85) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep3(records: any[], limit = 247) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep4(records: any[], limit = 409) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep5(records: any[], limit = 454) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep6(records: any[], limit = 439) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep7(records: any[], limit = 27) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function transcriptsStep8(records: any[], limit = 103) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('transcripts step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
