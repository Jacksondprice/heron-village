// imports helpers for tutoring session scheduler for after-school programs

export function importsStep0(records: any[], limit = 432) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep1(records: any[], limit = 464) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep2(records: any[], limit = 309) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep3(records: any[], limit = 230) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep4(records: any[], limit = 449) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep5(records: any[], limit = 65) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
