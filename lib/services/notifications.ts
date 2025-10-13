// notifications helpers for tutoring session scheduler for after-school programs

export function notificationsStep0(records: any[], limit = 440) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep1(records: any[], limit = 430) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep2(records: any[], limit = 125) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep3(records: any[], limit = 147) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep4(records: any[], limit = 219) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep5(records: any[], limit = 72) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep6(records: any[], limit = 489) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function notificationsStep7(records: any[], limit = 71) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('notifications step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
