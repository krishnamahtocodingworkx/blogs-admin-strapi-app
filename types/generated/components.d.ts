import type { Schema, Struct } from '@strapi/strapi';

export interface SharedKeypoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_keypoints';
  info: {
    displayName: 'Keypoints';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMyCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_my_categories';
  info: {
    displayName: 'MyCategory';
    icon: 'hashtag';
  };
  attributes: {
    BlogsCategory: Schema.Attribute.Enumeration<['App Development']>;
  };
}

export interface SharedParts extends Struct.ComponentSchema {
  collectionName: 'components_shared_parts';
  info: {
    description: '';
    displayName: 'Parts';
    icon: 'discuss';
  };
  attributes: {
    contents: Schema.Attribute.RichText;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    description: '';
    displayName: 'Section';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    Keypoints: Schema.Attribute.Component<'shared.keypoints', true>;
    title: Schema.Attribute.String;
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

export interface SharedTags extends Struct.ComponentSchema {
  collectionName: 'components_shared_tags';
  info: {
    displayName: 'Tags';
    icon: 'hashtag';
  };
  attributes: {
    Tag: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
        minLength: 2;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.keypoints': SharedKeypoints;
      'shared.media': SharedMedia;
      'shared.my-category': SharedMyCategory;
      'shared.parts': SharedParts;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tags': SharedTags;
    }
  }
}
