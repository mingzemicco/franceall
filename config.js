const MenuConfig = [
  {
    href: '#recommendation',
    text: `{{menu.recommendation}}`,
    iconClass: 'linecons-star'
  },
  {
    text: `{{menu.banque&insurance}}`,
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
    text: "{{menu.renting}}",
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
      img: '/assets/images/logos/bnp.png'
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
      link: 'https://business.revolut.com/signup?af_sub1=%7B%22conversion_page_url%22%3A%22https%3A%2F%2Fwww.revolut.com%2Ffr-FR%2Fbusiness%2Fpm-business-n%2F%22%2C%22cookie_consent%22%3A%5B%22ads%22%2C%22analytics%22%5D%2C%22landing_page_url%22%3A%22https%3A%2F%2Fwww.revolut.com%2Ffr-FR%2Fbusiness%2Fpm-business-n%2F%22%2C%22qr_code%22%3Afalse%2C%22website_client_id%22%3A%22721229a0-8ee3-492f-99da-c989d9312440%22%7D&af_c_id=18316596177&af_adset_id=142904601484&pid=Google&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv085VdaGQVdnJIsj5BTle7aD3vfDd6QlxNdo2c9YzGsX8Q4FKxKnfRoCfRkQAvD_BwE&af_sub5=FR&keyword=comment%20ouvrir%20compte%20bancaire&utm_source=Google&af_adset=%7Badset.name%7D&af_ad=692710877271&utm_campaign=Rev_BIZ_GSearch_2021_FR_FR_ALL&af_channel=website_organic&af_ad_id={ad.id}&c=Rev_BIZ_GSearch_2021_FR_FR_ALL',
      desc: `{{bank.revolut.desc}}`,
      img: '/assets/images/logos/revolut.png'
    },
    {
      title: `{{bank.hellobank}}`,
      link: 'https://www.hellobank.fr/fr/avantages/devenir-client-hello/',
      desc: `{{bank.hellobank.desc}}`,
      img: '/assets/images/logos/hellobank.png'
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
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{bank.axa.desc}}`,
      img: '/assets/images/logos/ambassade.png'
    },
    {
      title: `{{bank.mutuelle}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{bank.mutuelle.desc}}`,
      img: '/assets/images/logos/ambassade.png'
    }
  ],
  'simcard': [
    {
      title: `{{simcard.orange}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{simcard.orange.desc}}`,
      img: '/assets/images/logos/orange.png'
    },
    {
      title: `{{simcard.sfr}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{simcard.sfr.desc}}`,
      img: '/assets/images/logos/sfr.png'
    }
    ,
    {
      title: `{{simcard.bouyguesmobile}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{simcard.bouyguesmobile.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{simcard.freemobile}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{simcard.freemobile.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{simcard.lycamobile}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{simcard.lycamobile.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{simcard.lebara}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{simcard.lebara.desc}}`,
      img: '/assets/images/logos/sfr.png'
    }
  ],
  'internet': [
    {
      title: `{{internet.orangebox}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{internet.orangebox.desc}}`,
      img: '/assets/images/logos/orange.png'
    },
    {
      title: `{{internet.sfrbox}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{internet.sfrbox.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{internet.bouyguesbox}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{internet.bouyguesbox.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{inernet.freebox}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{inernet.freebox.desc}}`,
      img: '/assets/images/logos/sfr.png'
    }
  ],
  'rent': [
    {
      title: `{{rent.newEurope}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{rent.newEurope.desc}}`,
      img: '/assets/images/logos/orange.png'
    },
    {
      title: `{{rent.huarenjie}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{rent.huarenjie.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{rent.studapart}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{rent.studapart.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{rent.bienici}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{rent.bienici.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{rent.seloger}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{rent.seloger.desc}}`,
      img: '/assets/images/logos/seloger.png'
    }
    ,
    {
      title: `{{rent.leboncoin}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{rent.leboncoin.desc}}`,
      img: '/assets/images/logos/seloger.png'
    }
  ],
  'electricity': [
    {
      title: `{{electricity.engie}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{electricity.engie.desc}}`,
      img: '/assets/images/logos/orange.png'
    },
    {
      title: `{{electricity.totalenergie}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{electricity.totalenergie.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{electricity.EDF}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{electricity.EDF.desc}}`,
      img: '/assets/images/logos/edf.png'
    }
  ],
  'garant': [
    {
      title: `{{garantie.visale}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{garantie.visale.desc}}`,
      img: '/assets/images/logos/visale.png'
    },
    {
      title: `{{garantie.smartgarant}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{garantie.smartgarant.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{garantie.garentme}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{garantie.garentme.desc}}`,
      img: '/assets/images/logos/edf.png'
    }
  ],
  'transport': [
    {
      title: `{{tranport.ratp}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{tranport.ratp.desc}}`,
      img: '/assets/images/logos/ratp.png'
    },
    {
      title: `{{tranport.citymapper}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{tranport.citymapper.desc}}`,
      img: '/assets/images/logos/sfr.png'
    },
    {
      title: `{{tranport.blablacar}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{tranport.ouigo.desc}}`,
      img: '/assets/images/logos/edf.png'
    },
    {
      title: `{{tranport.ouigo}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{tranport.ouigo.desc}}`,
      img: '/assets/images/logos/edf.png'
    },
    {
      title: `{{tranport.ouigo}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{tranport.ouigo.desc}}`,
      img: '/assets/images/logos/edf.png'
    },
    {
      title: `{{tranport.ouigo}}`,
      link: 'http://fr.china-embassy.gov.cn/chn/zgzfg/zgsg/lsb/tz/',
      desc: `{{tranport.ouigo.desc}}`,
      img: '/assets/images/logos/edf.png'
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