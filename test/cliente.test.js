const Cliente = require("../modelos/cliente.js");

test('Ao digitar um cpf inválido o sistema precisa retornar false', () => {
  let cliente = new Cliente('Danilo', '23u03u23089309')
  expect(cliente.validarCpf()).toBe(false);
});

test('Ao digitar um cpf inválido (11111111111) o sistema precisa retornar false', () => {
  let cliente = new Cliente('Danilo', '11111111111')
  expect(cliente.validarCpf()).toBe(false);
});

test('Ao digitar um cpf inválido (1111111111) o sistema precisa retornar false', () => {
  let cliente = new Cliente('Danilo', '1111111111')
  expect(cliente.validarCpf()).toBe(false);
});

test('Ao digitar um cpf inválido (1111111111111) o sistema precisa retornar false', () => {
  let cliente = new Cliente('Danilo', '1111111111111')
  expect(cliente.validarCpf()).toBe(false);
});