<?php
/**
 * Plugin Name: Testing Allowed Blocks
 */

add_action('init', function() {
	register_block_type( __DIR__ . '/build' );
});
