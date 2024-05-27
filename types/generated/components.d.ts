import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsActualiteDataWindow extends Schema.Component {
  collectionName: 'components_components_actualite_data_windows';
  info: {
    displayName: 'ActualiteDataWindow';
  };
  attributes: {
    title: Attribute.String;
    actualites: Attribute.Relation<
      'components.actualite-data-window',
      'oneToMany',
      'api::actualite.actualite'
    >;
  };
}

export interface ComponentsAppelOffreDataWindow extends Schema.Component {
  collectionName: 'components_components_appel_offre_data_windows';
  info: {
    displayName: 'AppelOffreDataWindow';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    appelOffres: Attribute.Relation<
      'components.appel-offre-data-window',
      'oneToMany',
      'api::appel-offre.appel-offre'
    >;
  };
}

export interface ComponentsCarousel extends Schema.Component {
  collectionName: 'components_components_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    images: Attribute.Media;
  };
}

export interface ComponentsEspaceEtudiant extends Schema.Component {
  collectionName: 'components_components_espace_etudiants';
  info: {
    displayName: 'EspaceEtudiant';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsEvenementDataWindow extends Schema.Component {
  collectionName: 'components_components_evenement_data_windows';
  info: {
    displayName: 'EvenementDataWindow';
  };
  attributes: {
    title: Attribute.String;
    evenements: Attribute.Relation<
      'components.evenement-data-window',
      'oneToMany',
      'api::evenement.evenement'
    >;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Links';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsRecrutementDataWindow extends Schema.Component {
  collectionName: 'components_components_recrutement_data_windows';
  info: {
    displayName: 'RecrutementDataWindow';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    recrutements: Attribute.Relation<
      'components.recrutement-data-window',
      'oneToMany',
      'api::recrutement.recrutement'
    >;
  };
}

export interface ComponentsSocials extends Schema.Component {
  collectionName: 'components_components_socials';
  info: {
    displayName: 'Socials';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    image: Attribute.Media;
  };
}

export interface LayoutBody extends Schema.Component {
  collectionName: 'components_layout_bodies';
  info: {
    displayName: 'Body Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    actualites: Attribute.Component<'components.actualite-data-window'>;
    evenements: Attribute.Component<'components.evenement-data-window'>;
    recrutements: Attribute.Component<'components.recrutement-data-window'>;
    appelOffres: Attribute.Component<'components.appel-offre-data-window'>;
    carousel: Attribute.Component<'components.carousel'>;
    espaceEtudiant: Attribute.Component<'components.espace-etudiant'>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logo: Attribute.Media;
    links: Attribute.Component<'components.link', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    contact: Attribute.String;
    socials: Attribute.Component<'components.socials', true>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    links: Attribute.Component<'components.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.actualite-data-window': ComponentsActualiteDataWindow;
      'components.appel-offre-data-window': ComponentsAppelOffreDataWindow;
      'components.carousel': ComponentsCarousel;
      'components.espace-etudiant': ComponentsEspaceEtudiant;
      'components.evenement-data-window': ComponentsEvenementDataWindow;
      'components.link': ComponentsLink;
      'components.recrutement-data-window': ComponentsRecrutementDataWindow;
      'components.socials': ComponentsSocials;
      'layout.body': LayoutBody;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
