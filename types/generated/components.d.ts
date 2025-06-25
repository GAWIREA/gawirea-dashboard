import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFullImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_full_image_blocks';
  info: {
    displayName: 'Full Image Block';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksGawireaEduHubBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gawirea_edu_hub_blocks';
  info: {
    displayName: 'GAWIREA Edu-hub Block';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.program-card', true>;
    content: Schema.Attribute.Text;
    headline: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksGawireaLab extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gawirea_labs';
  info: {
    description: '';
    displayName: 'GAWIREA Lab Block';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.program-card', true>;
    content: Schema.Attribute.Text;
    headline: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeadingBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heading_blocks';
  info: {
    displayName: 'Heading Block';
  };
  attributes: {
    heading: Schema.Attribute.String;
    linkId: Schema.Attribute.String;
  };
}

export interface BlocksHeadingWithDescriptionBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heading_with_description_blocks';
  info: {
    displayName: 'Heading With Description Block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection1 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_section_1s';
  info: {
    description: '';
    displayName: 'Hero Section 1';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    external: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    theme: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface BlocksHeroSection2 extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_section_2s';
  info: {
    description: '';
    displayName: 'Hero Section 2';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksImpactBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_impact_blocks';
  info: {
    displayName: 'Impact Block';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.program-card', true>;
    content: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    description: '';
    displayName: 'Journey Block';
  };
  attributes: {
    content1: Schema.Attribute.Text;
    content2: Schema.Attribute.Text;
    content3: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    headline1: Schema.Attribute.String;
    headline2: Schema.Attribute.String;
    headline3: Schema.Attribute.String;
  };
}

export interface BlocksMojukBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_mojuk_blocks';
  info: {
    displayName: 'Mojuk Block';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.program-card', true>;
    content: Schema.Attribute.Text;
    headline: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksNetZeroHeroesBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_net_zero_heroes_blocks';
  info: {
    displayName: 'Net Zero Heroes Block';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.program-card', true>;
    content: Schema.Attribute.Text;
    headline: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksParagraphBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraph_blocks';
  info: {
    displayName: 'Paragraph Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface BlocksParagraphWithImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraph_with_image_blocks';
  info: {
    displayName: 'Paragraph With Image Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    imageLandscape: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksPartnerBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_partner_blocks';
  info: {
    description: '';
    displayName: 'Partner Block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    partners: Schema.Attribute.Component<'elements.partner-card', true>;
    tab: Schema.Attribute.Component<'elements.tab', false>;
  };
}

export interface BlocksSinariProjectBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sinari_project_blocks';
  info: {
    displayName: 'Sinari Project Block';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.program-card', true>;
    content: Schema.Attribute.Text;
    headline: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSolarSisterBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_solar_sister_blocks';
  info: {
    displayName: 'Solar Sister Block';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.program-card', true>;
    content: Schema.Attribute.Text;
    headline: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTeamBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_blocks';
  info: {
    description: '';
    displayName: 'Team Block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    tab: Schema.Attribute.Component<'elements.tab', false>;
    team_members: Schema.Attribute.Component<'elements.team-card', true>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsPartnerCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_partner_cards';
  info: {
    displayName: 'Partner Card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    image: Schema.Attribute.Media<'images'>;
    partnerDescription: Schema.Attribute.Text;
    partnerName: Schema.Attribute.Text;
  };
}

export interface ElementsProgramCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_program_cards';
  info: {
    description: '';
    displayName: 'Program Card';
  };
  attributes: {
    categories: Schema.Attribute.Enumeration<
      [
        'Solar Sister',
        'Net Zero Heroes',
        'GAWIREA Lab',
        'GAWIREA Edu-hub',
        'Sinari Project',
        'Mojuk',
      ]
    >;
    content: Schema.Attribute.Text;
    cta: Schema.Attribute.Component<'elements.link', false>;
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

export interface ElementsTab extends Struct.ComponentSchema {
  collectionName: 'components_elements_tabs';
  info: {
    displayName: 'Tab';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.Text;
  };
}

export interface ElementsTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_team_cards';
  info: {
    displayName: 'Team Card';
  };
  attributes: {
    membersImage: Schema.Attribute.Media<'images'>;
    membersName: Schema.Attribute.Text;
    membersRole: Schema.Attribute.Text;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.full-image-block': BlocksFullImageBlock;
      'blocks.gawirea-edu-hub-block': BlocksGawireaEduHubBlock;
      'blocks.gawirea-lab': BlocksGawireaLab;
      'blocks.heading-block': BlocksHeadingBlock;
      'blocks.heading-with-description-block': BlocksHeadingWithDescriptionBlock;
      'blocks.hero-section-1': BlocksHeroSection1;
      'blocks.hero-section-2': BlocksHeroSection2;
      'blocks.impact-block': BlocksImpactBlock;
      'blocks.info-block': BlocksInfoBlock;
      'blocks.mojuk-block': BlocksMojukBlock;
      'blocks.net-zero-heroes-block': BlocksNetZeroHeroesBlock;
      'blocks.paragraph-block': BlocksParagraphBlock;
      'blocks.paragraph-with-image-block': BlocksParagraphWithImageBlock;
      'blocks.partner-block': BlocksPartnerBlock;
      'blocks.sinari-project-block': BlocksSinariProjectBlock;
      'blocks.solar-sister-block': BlocksSolarSisterBlock;
      'blocks.team-block': BlocksTeamBlock;
      'elements.link': ElementsLink;
      'elements.partner-card': ElementsPartnerCard;
      'elements.program-card': ElementsProgramCard;
      'elements.tab': ElementsTab;
      'elements.team-card': ElementsTeamCard;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
