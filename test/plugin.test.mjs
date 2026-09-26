import test from 'node:test'
import assert from 'node:assert/strict'
import { apply, inject } from '../lib/client.js'

test('declares locale injection', () => {
  assert.deepEqual(inject, ['locale'])
})

test('registers Vietnamese and all dictionaries', () => {
  const languages=[]
  const registrations=[]
  const effects=[]
  const ctx={
    locale:{
      addLanguage(meta){languages.push(meta); return () => {}},
      register(namespace,locale,dictionary){registrations.push({namespace,locale,dictionary});return()=>{}},
    },
    effect(fn,label){effects.push(label);return fn()},
  }
  apply(ctx)
  assert.deepEqual(languages,[{id:'vi',label:'Tiếng Việt',fallback:'en'}])
  assert.ok(registrations.length>=55)
  assert.ok(registrations.every(r=>r.locale==='vi'))
  const byNs=Object.fromEntries(registrations.map(r=>[r.namespace,r.dictionary]))
  assert.equal(byNs.common.cancel,'Hủy')
  assert.equal(byNs['settings.locale']['language.title'],'Ngôn ngữ')
  assert.equal(byNs['directory-browser']['browser.title'],'Chọn thư mục không gian làm việc')
  assert.ok(Object.keys(byNs.conversation).length>10)
  assert.equal(new Set(registrations.map(r=>r.namespace)).size,registrations.length)
})
