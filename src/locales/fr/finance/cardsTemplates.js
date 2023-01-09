module.exports = [
  {
    name: 'VISA',
    card_number_templates: ['4###############'],
    cvv_template: '###',
    sort_number_template: '######',
    account_number_template: '########',
  },
  {
    name: 'Mastercard',
    card_number_templates: ['51##############',
      '52##############',
      '53##############',
      '54##############',
      '55##############'],
    cvv_template: '###',
    sort_number_template: '######',
    account_number_template: '########',
  },
];
