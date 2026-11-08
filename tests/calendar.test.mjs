import {test} from 'node:test';
import assert from 'node:assert/strict';
import {monthCalendar,shiftPersianMonth,toPersianParts,tehranDateKey} from '../src/lib/calendar.mjs';

test('Persian calendar respects Nowruz and leap-year Esfand',()=>{
  const esfand=monthCalendar(new Date('2025-03-15T12:00:00Z'));
  assert.equal(esfand.days.length,30);
  const farvardin=shiftPersianMonth(new Date('2025-03-15T12:00:00Z'),1);
  assert.deepEqual(toPersianParts(farvardin),{year:1404,month:1,day:1});
  assert.equal(monthCalendar(farvardin).days.length,31);
  assert.deepEqual(toPersianParts(shiftPersianMonth(farvardin,-1)),{year:1403,month:12,day:1});
});

test('calendar dates use Tehran time near UTC midnight',()=>{
  assert.equal(tehranDateKey(new Date('2026-11-08T22:00:00Z')),'2026-11-09');
  const aban=monthCalendar(new Date('2026-11-08T12:00:00Z'));
  assert.equal(aban.days.length,30);
  assert.equal(aban.days[0].key,'2026-10-23');
  assert.equal(aban.startWeekday,6);
});
