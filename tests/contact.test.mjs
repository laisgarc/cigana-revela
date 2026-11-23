import test from 'node:test';
import assert from 'node:assert/strict';
import { getWhatsAppUrl } from '../src/lib/contact.js';

test('não encaminha contatos quando o número está ausente ou inválido', () => {
  for (const number of ['', null, undefined, 'abc', '123', '5511999<script>', '01234567890']) {
    assert.equal(getWhatsAppUrl(number, 'Olá'), null);
  }
});

test('normaliza formatação e preserva mensagem com acentos e caracteres reservados', () => {
  const message = 'Olá, Raissa! Amor & escolhas? Quero saber + sobre a leitura.';
  const url = new URL(getWhatsAppUrl('+55 (11) 99999-0000', message));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/5511999990000');
  assert.equal(url.searchParams.get('text'), message);
});
