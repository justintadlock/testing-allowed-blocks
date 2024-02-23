import { registerBlockType } from '@wordpress/blocks';
import { useInnerBlocksProps } from '@wordpress/block-editor';
import metadata from './block.json';

// Register block type.
registerBlockType( metadata, {
	edit: (props) => {
		const innerBlocksProps = useInnerBlocksProps();
	
		return (
			<div { ...innerBlocksProps } />
		);
	}
} );
