const MenuConfig = [
  {
    href: 'recommendation',
    text: '{{menu.recommendation}}',
    iconClass: 'linecons-star'
  },
  {
    text: '{{menu.telecommunication}}',
    iconClass: 'fa-phone',
    children: [
      {
        href: 'simcard',
        text: '{{menu.simcard}}'
      },
      {
        href: 'internet',
        text: '{{menu.internet}}'
      }
    ]
  },
  {
    text: "{{menu.renting}}",
    iconClass: 'fa-home',
    children: [
      {
        href: 'rent',
        text: '{{menu.rent}}'
      },
      {
        href: 'electricity',
        text: '{{menu.electricity}}'
      },
      {
        href: 'garant',
        text: '{{menu.garant}}'
      }
    ]
  },
  {
    text: '{{menu.transport}}',
    iconClass: 'fa-bus',
    children: [
      {
        href: 'transport',
        text: '{{menu.transport.transport}}'
      }
    ]
  }
];