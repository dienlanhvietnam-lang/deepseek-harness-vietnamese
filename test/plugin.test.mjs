import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'

function runtime() {
  const source = fs.readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8')
  let d
  vm.runInNewContext(source, { window: { __ModuleLoader__: { load(v) { d = v } } } })
  assert.equal(d.id, 'dsh-vietnamese-language-pack')
  return { source, plugin: d.factory(() => { throw new Error('unexpected require') }) }
}

test('uses DSH ModuleLoader wrapper', () => {
  const { source, plugin } = runtime()
  assert.match(source, /window\.__ModuleLoader__\.load/)
  assert.doesNotMatch(source, /^\s*export\s/m)
  assert.deepEqual([...plugin.inject], ['locale'])
})

test('registers Vietnamese dictionaries', () => {
  const { plugin } = runtime()
  const languages = [], registrations = [], effects = []
  const ctx = {
    locale: {
      addLanguage(meta) { languages.push({ ...meta }); return () => {} },
      register(namespace, locale, dictionary) { registrations.push({ namespace, locale, dictionary }); return () => {} },
    },
    effect(fn, label) { effects.push(label); return fn() },
  }
  plugin.apply(ctx)
  assert.deepEqual(languages, [{ id: 'vi', label: 'Tiếng Việt', fallback: 'en' }])
  assert.ok(registrations.length >= 55)
  assert.ok(registrations.every(r => r.locale === 'vi'))
  const byNs = Object.fromEntries(registrations.map(r => [r.namespace, r.dictionary]))
  assert.equal(byNs.common.cancel, 'Hủy')
  assert.equal(byNs['settings.locale']['language.title'], 'Ngôn ngữ')
  assert.equal(byNs['directory-browser']['browser.title'], 'Chọn thư mục không gian làm việc')
  assert.equal(new Set(registrations.map(r => r.namespace)).size, registrations.length)
  assert.ok(effects.includes('dsh-vietnamese-language-pack: language'))
})
