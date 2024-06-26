const MenuConfig = [
  {
    href: '#recommendation',
    text: '{{menu.recommendation}}',
    iconClass: 'linecons-star'
  },
  {
    text: '{{menu.telecommunication}}',
    iconClass: 'fa-phone',
    children: [
      {
        href: '#simcard',
        text: '{{menu.simcard}}'
      },
      {
        href: '#internet',
        text: '{{menu.internet}}'
      }
    ]
  },
  {
    text: "{{menu.renting}}",
    iconClass: 'fa-home',
    children: [
      {
        href: '#rent',
        text: '{{menu.rent}}'
      },
      {
        href: '#electricity',
        text: '{{menu.electricity}}'
      },
      {
        href: '#garant',
        text: '{{menu.garant}}'
      }
    ]
  },
  {
    text: '{{menu.transport}}',
    iconClass: 'fa-bus',
    children: [
      {
        href: '#transport',
        text: '{{menu.transport}}'
      }
    ]
  }
];

const ContentConfig = {
  'recommendation': [
    {
      title: '{{paper.expansion}}',
      link: 'https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/',
      desc: '{{paper.handle}}',
      img: '/assets/images/logos/etranger-en-france.png'
    },
    {
      title: '{{visa.visa}}',
      link: 'https://france-visas.gouv.fr/',
      desc: '{{visa.firstApply}}',
      img: '/assets/images/logos/etranger-en-france.png'
    },
    {
      title: '{{mes.mes}}',
      link: 'https://www.messervices.etudiant.gouv.fr',
      desc: '{{mes.mes}}',
      img: '/assets/images/logos/mes-services-etudiants.png'
    },
    {
      title: '{{ameli.ameli}}',
      link: 'https://etudiant-etranger.ameli.fr/#/',
      desc: '{{ameli.franceAmeli}}',
      img: '/assets/images/logos/ameli.png'
    },
    {
      title: '{{caf.caf}}',
      link: 'https://www.caf.fr',
      desc: '{{caf.desc}}',
      img: '/assets/images/logos/caf.png'
    },
    {
      title: '{{photo.photo}}',
      link: 'https://stores.photomaton.fr/fr',
      desc: '{{photo.desc}}',
      img: '/assets/images/logos/photomaton.png'
    },
    {
      title: '{{ratp.card}}',
      link: 'https://www.ratp.fr/titres-et-tarifs/forfait-navigo-annuel',
      desc: '{{ratp.card.desc}}',
      img: '/assets/images/logos/ratp.png' 
    },
    {
      title: '{{ambassador.ambassador}}',
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: '{{ambassador.officier}}',
      img: '/assets/images/logos/ambassade.png'
    }
  ]
};

function createCell (config) {
  const { title, link, desc, img } = config;
  const cell = document.createElement('div');
  cell.classList.add('col-sm-3');
  cell.innerHTML = `
    <div class="xe-widget xe-conversations box2 label-info" onclick="window.open('${link}', '_blank')" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="${link}">
      <div class="xe-comment-entry">
        <a class="xe-user-img">
          <img data-src="${img}" class="lozad img-circle" width="40">
        </a>
        <div class="xe-comment">
          <a href="#" class="xe-user-name overflowClip_1">
            <strong>${title}</strong>
          </a>
          <p class="overflowClip_2">${desc}</p>
        </div>
      </div>
    </div>
  `;
  return cell;
}

(() => {
  const menuUlEl = document.querySelector('ul.main-menu');
  function createLi (config, isSmooth = false) {
    const { text, href, iconClass, children } = config;
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    if (href) {
      anchor.href = href;
    }
    if (isSmooth) {
      anchor.classList.add('smooth');
    }
    anchor.innerHTML = `
      ${iconClass ? `<i class="${iconClass}"></i>` : ''}
      <span class="title">${text}</span>
    `;
    li.appendChild(anchor);
    if (Array.isArray(children)) {
      const subUl = document.createElement('ul');
      children.forEach((child) => {
        subUl.appendChild(createLi(child, true));
      });
      li.appendChild(subUl);
    }
    return li;
  }
  if (menuUlEl) {
    MenuConfig.forEach((config, index) => {
      menuUlEl.appendChild(createLi(config));
    });
  }
  for (const [key, value] of Object.entries(ContentConfig)) {
    const wrapper = document.querySelector(`.row.${key}`);
    if (!wrapper) continue;
    value.forEach((config) => {
      wrapper.appendChild(createCell(config));
    });
  }
})();