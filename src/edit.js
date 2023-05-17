import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({
      className: `uncommon-home-creatively-scientific`
    }) }>
			<InnerBlocks
        allowedBlocks={['core/image', 'core/heading', 'core/video', 'core/group', 'core/paragraph']}
        template={[
          ['core/heading', {
            className: 'uncommon-home-creatively-scientific__title', 
            placeholder: 'Headline'
          }],
          ['core/group', {
            className: 'uncommon-home-creatively-scientific__images',
            anchor: 'images'
          }, [
            ['core/image'],['core/video']
          ]],
          ['core/heading', {
            className: 'uncommon-home-creatively-scientific__title_two',
          }],
          ['core/paragraph', {
            className: 'uncommon-home-creatively-scientific__paragraph',
          }]
        ]}
        templateLock={'all'}
      />
		</div>
	);
}
