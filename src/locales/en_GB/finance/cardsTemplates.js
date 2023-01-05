module.exports = [
  {
    name: "VISA",
    card_number_templates: ["4###############"],
    cvv_template: "###",
    sort_number_template: "######",
    account_number_template: "########"
  },
  {
    name: "Mastercard",
    card_number_templates: ["2###############", "5###############"],
    cvv_template: "###",
    sort_number_template: "######",
    account_number_template: "########"
  }
]