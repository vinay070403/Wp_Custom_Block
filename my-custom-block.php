<?php

/**
 * Plugin Name: My Custom Block
 * Description: A custom Gutenberg block built with @wordpress/scripts.
 * Version: 1.0.0
 * Author: Vinay
 */

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

// Enqueue block build files.
function my_custom_block_enqueue_assets()
{
    wp_register_script(
        'my-custom-block-editor',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    register_block_type('myplugin/my-custom-block', array(
        'editor_script' => 'my-custom-block-editor',
    ));
}
add_action('init', 'my_custom_block_enqueue_assets');
