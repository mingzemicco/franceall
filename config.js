const MenuConfig = [
  {
    href: '#recommendation',
    text: `{{menu.recommendation}}`,
    iconClass: 'linecons-star'
  },
  {
    text: `{{menu.bank&insurance}}`,
    iconClass: 'fa-bank',
    children: [
      {
        href: '#banktraditional',
        text: `{{menu.banktraditional}}`
      },
      {
        href: '#onlinebank',
        text: `{{menu.onlinebank}}`
      },
      {
        href: '#insurance',
        text: `{{menu.insurance}}`
      }
    ]
  },
  {
    text: `{{menu.telecommunication}}`,
    iconClass: 'fa-phone',
    children: [
      {
        href: '#simcard',
        text: `{{menu.simcard}}`
      },
      {
        href: '#internet',
        text: `{{menu.internet}}`
      }
    ]
  },
  {
    text: "{{menu.logement}}",
    iconClass: 'fa-home',
    children: [
      {
        href: '#rent',
        text: `{{menu.rent}}`
      },
      {
        href: '#electricity',
        text: `{{menu.electricity}}`
      },
      {
        href: '#garant',
        text: `{{menu.garant}}`
      }
    ]
  },
  {
    text: `{{menu.transport}}`,
    iconClass: 'fa-bus',
    children: [
      {
        href: '#transport',
        text: `{{menu.transport}}`
      }
    ]
  }
];

const ContentConfig = {
  'recommendation': [
    {
      title: `{{foreigner.residency}}`,
      link: 'https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/',
      desc: `{{foreigner.residency.desc}}`,
      img: '/assets/images/logos/etranger-en-france.png'
    },
    {
      title: `{{visa.visa}}`,
      link: 'https://france-visas.gouv.fr/',
      desc: `{{visa.desc}}`,
      img: '/assets/images/logos/etranger-en-france.png'
    },
    {
      title: `{{healthcare.student}}`,
      link: 'https://www.messervices.etudiant.gouv.fr',
      desc: `{{healthcare.student.desc}}`,
      img: '/assets/images/logos/mes-services-etudiants.png'
    },
    {
      title: `{{ameli.ameli}}`,
      link: 'https://etudiant-etranger.ameli.fr/#/',
      desc: `{{ameli.desc}}`,
      img: '/assets/images/logos/ameli.png'
    },
    {
      title: `{{caf.caf}}`,
      link: 'https://www.caf.fr',
      desc: `{{caf.desc}}`,
      img: '/assets/images/logos/caf.png'
    },
    {
      title: `{{photo.photo}}`,
      link: 'https://stores.photomaton.fr/fr',
      desc: `{{photo.desc}}`,
      img: '/assets/images/logos/photomaton.png'
    },
    {
      title: `{{ratp.card}}`,
      link: 'https://www.ratp.fr/titres-et-tarifs/forfait-navigo-annuel',
      desc: `{{ratp.card.desc}}`,
      img: '/assets/images/logos/ratp.png' 
    },
    {
      title: `{{ambassador.china}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{ambassador.desc}}`,
      img: '/assets/images/logos/ambassade.png'
    }
  ],
  'banktraditional': [
    {
      title: `{{bank.bnp}}`,
      link: 'https://mabanque.bnpparibas/fr/ouvrir-un-compte/?agence=EERI',
      desc: `{{bank.bnp.desc}}`,
      img: '/assets/images/logos/bnparibas.png'
    },
    {
      title: `{{bank.lcl}}`,
      link: 'https://bienvenue.secure.lcl.fr/#/offre=ouvrir-un-compte-lcl-essentiel',
      desc: `{{bank.lcl.desc}}`,
      img: '/assets/images/logos/lcl.png'
    },
    {
      title: `{{bank.societegeneral}}`,
      link: 'https://particuliers.sg.fr/campagne-media/ouverture-de-compte/ouvrir-mon-compte-en-ligne?esl-k=google%7Cng%7Cc667020912369%7Cme%7Cksg%20ouverture%20compte%7Cp%7Ct%7Cdc%7Ca152103493855%7Cg20397073116&cl500_src_medium=sl&cl500_src_support=google&cl500_src_campaign=acqui-google-tm-odc-exact-ouverture-de-compte_20397073116&cl500_src_creation=google-tm-exact-25_152103493855&cl500_src_variant=667020912369&cl500_src_link=sg%20ouverture%20compte&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv541F52Wrhu6PUp0Zl5gimI8vhy20owk2VkhLDTkmm6e-_SWhFgJdhoCdRUQAvD_BwE',
      desc: `{{bank.societegeneral.desc}}`,
      img: '/assets/images/logos/societegeneral.png'
    },
    {
      title: `{{bank.Caissedepargne}}`,
      link: 'https://www.caisse-epargne.fr/comptes-cartes/ouvrir-compte/',
      desc: `{{bank.Caissedepargne.desc}}`,
      img: '/assets/images/logos/caissedepargne.png'
    }
  ],
  'onlinebank': [
    {
      title: `{{bank.revolut}}`,
      link: 'https://www.revolut.com/en-FR/',
      desc: `{{bank.revolut.desc}}`,
      img: '/assets/images/logos/revolut.png'
    },
    {
      title: `{{bank.hellobank}}`,
      link: 'https://www.hellobank.fr/fr/avantages/devenir-client-hello/',
      desc: `{{bank.hellobank.desc}}`,
      img: '/assets/images/logos/hellobanque.png'
    },
    {
      title: `{{bank.fortuneo}}`,
      link: 'https://www.fortuneo.fr/compte-bancaire',
      desc: `{{bank.fortuneo.desc}}`,
      img: '/assets/images/logos/fortuneo.png' 
    },
    {
      title: `{{bank.boursorama}}`,
      link: 'https://www.boursobank.com/ouvrir-un-compte',
      desc: `{{bank.boursorama.desc}}`,
      img: '/assets/images/logos/boursorama.png'
    }
  ],
  'insurance': [
    {
      title: `{{bank.axa}}`,
      link: 'https://www.axa.fr/services-assistance/services-en-ligne/aide-connexion.html',
      desc: `{{bank.axa.desc}}`,
      img: '/assets/images/logos/axa.png'
    },
    {
      title: `{{bank.mutuelle}}`,
      link: 'https://www.service-public.fr/particuliers/vosdroits/F20314',
      desc: `{{bank.mutuelle.desc}}`,
      img: '/assets/images/logos/republique.png'
    }
  ],
  'simcard': [
    {
      title: `{{simcard.orange}}`,
      link: 'https://boutique.orange.fr/mobile/offres',
      desc: `{{simcard.orange.desc}}`,
      img: '/assets/images/logos/orange.png'
    },
    {
      title: `{{simcard.sfr}}`,
      link: 'https://www.sfr.fr/offre-mobile',
      desc: `{{simcard.sfr.desc}}`,
      img: '/assets/images/logos/sfr.png'
    }
    ,
    {
      title: `{{simcard.bouyguesmobile}}`,
      link: 'https://www.bouyguestelecom.fr/forfaits-mobiles/sans-engagement',
      desc: `{{simcard.bouyguesmobile.desc}}`,
      img: '/assets/images/logos/bouygues.png'
    },
    {
      title: `{{simcard.freemobile}}`,
      link: 'https://mobile.free.fr/',
      desc: `{{simcard.freemobile.desc}}`,
      img: '/assets/images/logos/free.png'
    },
    {
      title: `{{simcard.lycamobile}}`,
      link: 'https://www.lycamobile.fr/fr/',
      desc: `{{simcard.lycamobile.desc}}`,
      img: '/assets/images/logos/lycamobile.png'
    },
    {
      title: `{{simcard.lebara}}`,
      link: 'https://www.lebara.fr/fr/home.html',
      desc: `{{simcard.lebara.desc}}`,
      img: '/assets/images/logos/lebara.png'
    }
  ],
  'internet': [
    {
      title: `{{internet.orangebox}}`,
      link: 'https://boutique.orange.fr/internet/offres-fibre',
      desc: `{{internet.orangebox.desc}}`,
      img: '/assets/images/logos/orange.png'
    },
    {
      title: `{{internet.sfrbox}}`,
      link: 'https://www.sfr.fr/offre-internet',
      desc: `{{internet.sfrbox.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{internet.bouyguesbox}}`,
      link: 'https://www.bouyguestelecom.fr/offres-internet',
      desc: `{{internet.bouyguesbox.desc}}`,
      img: '/assets/images/logos/bouygues.png'
    },
    {
      title: `{{inernet.freebox}}`,
      link: 'https://www.free.fr/freebox/',
      desc: `{{inernet.freebox.desc}}`,
      img: '/assets/images/logos/free.png'
    }
  ],
  'rent': [
    {
      title: `{{rent.newEurope}}`,
      link: 'https://bbs.xineurope.com/cat_2.html',
      desc: `{{rent.newEurope.desc}}`,
      img: '/assets/images/logos/xineurope.png'
    },
    {
      title: `{{rent.huarenjie}}`,
      link: 'https://www.huarenjiewang.com/category-32-9-1.html',
      desc: `{{rent.huarenjie.desc}}`,
      img: '/assets/images/logos/huarenjie.png'
    },
    {
      title: `{{rent.studapart}}`,
      link: 'https://www.studapart.com/',
      desc: `{{rent.studapart.desc}}`,
      img: '/assets/images/logos/studapart.png'
    },
    {
      title: `{{rent.bienici}}`,
      link: 'https://www.bienici.com/recherche/location/paris-75000/appartement',
      desc: `{{rent.bienici.desc}}`,
      img: '/assets/images/logos/bienici.png'
    },
    {
      title: `{{rent.seloger}}`,
      link: 'https://www.seloger.com/immobilier/locations/immo-paris-75/bien-appartement/',
      desc: `{{rent.seloger.desc}}`,
      img: '/assets/images/logos/seloger.png'
    }
    ,
    {
      title: `{{rent.leboncoin}}`,
      link: 'https://www.leboncoin.fr/locations/offres/ile_de_france/paris',
      desc: `{{rent.leboncoin.desc}}`,
      img: '/assets/images/logos/leboncoin.png'
    }
  ],
  'electricity': [
    {
      title: `{{electricity.engie}}`,
      link: 'https://particuliers.engie.fr/',
      desc: `{{electricity.engie.desc}}`,
      img: '/assets/images/logos/engie.png'
    },
    {
      title: `{{electricity.totalenergie}}`,
      link: 'https://www.totalenergies.fr/particuliers/devenir-client/comment-souscrire',
      desc: `{{electricity.totalenergie.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{electricity.EDF}}`,
      link: 'https://souscrire.edf.fr/MS/index.html?at_previous_click=menu_souscrire',
      desc: `{{electricity.EDF.desc}}`,
      img: '/assets/images/logos/edf.png'
    }
  ],
  'garant': [
    {
      title: `{{garantie.visale}}`,
      link: 'https://www.visale.fr/visale-pour-les-locataires/avantages/',
      desc: `{{garantie.visale.desc}}`,
      img: '/assets/images/logos/visale.png'
    },
    {
      title: `{{garantie.smartgarant}}`,
      link: 'https://www.smart-garant.com/partners/micco',
      desc: `{{garantie.smartgarant.desc}}`,
      img: '/assets/images/logos/smartgarant.png'
    },
    {
      title: `{{garantie.garentme}}`,
      link: 'https://garantme.fr/fr/',
      desc: `{{garantie.garentme.desc}}`,
      img: '/assets/images/logos/garantme.png'
    }
  ],
  'transport': [
    {
      title: `{{tranport.ratp}}`,
      link: 'https://www.ratp.fr/titres-et-tarifs/forfait-navigo-annuel',
      desc: `{{tranport.ratp.desc}}`,
      img: '/assets/images/logos/ratp.png'
    },
    {
      title: `{{tranport.citymapper}}`,
      link: 'https://citymapper.com/',
      desc: `{{tranport.citymapper.desc}}`,
      img: '/assets/images/logos/citymapper.png'
    },
    {
      title: `{{tranport.blablacar}}`,
      link: 'https://www.blablacar.com/',
      desc: `{{tranport.blablacar.desc}}`,
      img: '/assets/images/logos/blablacar.png'
    },
    {
      title: `{{tranport.ouigo}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{tranport.ouigo.desc}}`,
      img: '/assets/images/logos/edf.png'
    },
    {
      title: `{{tranport.idfmobilite}}`,
      link: 'https://www.iledefrance-mobilites.fr/',
      desc: `{{tranport.idfmobilite.desc}}`,
      img: '/assets/images/logos/iledefrance-mobilites.png'
    },
    {
      title: `{{tranport.fileo}}`,
      link: 'https://www.fileo.com/',
      desc: `{{tranport.fileo.desc}}`,
      img: '/assets/images/logos/fileo.png'
    },
    {
      title: `{{tranport.uber}}`,
      link: 'https://www.uber.com/fr/en/',
      desc: `{{tranport.uber.desc}}`,
      img: '/assets/images/logos/uber.png'
    },
    {
      title: `{{tranport.SNCFConnect}}`,
      link: 'https://www.sncf-connect.com/',
      desc: `{{tranport.SNCFConnect.desc}}`,
      img: '/assets/images/logos/sncf_connect.png'
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